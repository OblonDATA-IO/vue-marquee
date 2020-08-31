<script>
import "intersection-observer";

function cloneVNode (
    { children, tag, data, text, isComment, componentOptions, elm, context, ns, isStatic, key, },
    createElement
) {
    const clonedChildren = children && children
        .map(
            vNode => cloneVNode(vNode, createElement)
        );
    const cloned = createElement(tag, data, clonedChildren);
    cloned.text = text;
    cloned.isComment = isComment;
    cloned.componentOptions = componentOptions;
    cloned.elm = elm;
    cloned.context = context;
    cloned.ns = ns;
    cloned.isStatic = isStatic;
    cloned.key = undefined;
    return cloned;
}

export default {
    "name": "Marquee",
    "props": {
        "lazyStart": {
            type: Boolean,
            default: true,
        },

        "isPlaying": {
            type: Boolean,
            default: true,
        },

        "direction": {
            type: String,
            default: "ltr"
        },

        "durationPerSlide": {
            type: [String, Number],
            default: 2000
        },
    },
    data () {
        return {
            isPlayingCopy: undefined,
            multiplier: 1,
        };
    },
    computed: {
        isPlayingInComponent: {
            get () {
                if (this.isPlayingCopy !== undefined) {
                    return this.isPlayingCopy;
                }
                return this.isPlaying;
            },
            set (val) {
                this.isPlayingCopy = val;
                this.$emit("update:isPlaying", val);
            },
        },
    },
    "render" (createElement) {
        this.children = [];

        if (this.$slots.default) {
            for (let i = 0; i < this.multiplier; i++) {
                this.children = this.children.concat(
                    this.$slots.default
                        .filter(
                            ({ tag }) => !!tag
                        )
                        .map(
                            vNode => cloneVNode(vNode, createElement)
                        )
                );
            }
        }

        const animationDuration = parseInt(this.durationPerSlide) * (this.children.length > 0 ? this.children.length : 1);

        this.container = createElement(
            "div",
            {
                "staticClass": "marquee",
            },
            [
                createElement(
                    "div",
                    {
                        "staticClass": "marquee-content",
                        "class": {
                            "marquee-paused": this.isPlayingInComponent === false,
                            "marquee-rtl": this.direction === "rtl",
                            "marquee-ttb": this.direction === "ttb",
                            "marquee-btt": this.direction === "btt",
                        },
                        "style": {
                            "animation-duration": `${ animationDuration }ms`,
                        },
                    },
                    this.children
                )
            ]
        );
        return this.container;
    },
    created () {
        // non-reactive properties
        this.container = undefined;
        this.children = [];
        this.isForceUpdate = false;

        this.observer = new IntersectionObserver(
            (entries) => {
                this.isPlayingInComponent = entries[0].isIntersecting;
            },
            {
                "rootMargin": "0px",
                "threshold": 0
            }
        );
    },
    mounted () {
        const measureProp = ["ltr", "rtl"].includes(this.direction) ? "offsetWidth" : "offsetHeight";
        const containerElement = this.container.elm;

        if (this.lazyStart === true) {
            this.observer.observe(containerElement);
        }

        const childrenSize = this.children.length > 0 ?
            this.children
                .slice(0, this.children.length / this.multiplier)
                .reduce(
                    (acc, child) => acc += child.elm[measureProp] ? child.elm[measureProp] : 0,
                    0
                ) :
            0;

        if (childrenSize > 0) {
            const childrenPerView = Math.ceil(containerElement[measureProp] / childrenSize);
            this.multiplier = childrenPerView < 1 ? 2 : childrenPerView * 2;

            console.log(this.direction)
            console.log("measureProp", measureProp);
            console.log("containerElement", containerElement[measureProp]);
            console.log("childrenSize", childrenSize);
            console.log("childrenPerView", childrenPerView);
            console.log("multiplier", this.multiplier);

            this.isForceUpdate = true;
            this.$forceUpdate();
        }
    },
    updated () {
        if (this.isForceUpdate === false) {
            const measureProp = ["ltr", "rtl"].includes(this.direction) ? "offsetWidth" : "offsetHeight";
            const containerElement = this.container.elm;
            const childrenSize = this.children.length > 0 ?
                this.children
                    .slice(0, this.children.length / this.multiplier)
                    .reduce(
                        (acc, child) => acc += child.elm[measureProp] ? child.elm[measureProp] : 0,
                        0
                    ) :
                0;

            if (childrenSize > 0) {
                const childrenPerView = Math.ceil(containerElement[measureProp] / childrenSize);
                this.multiplier = childrenPerView < 1 ? 2 : childrenPerView * 2;

                console.log(this.direction)
                console.log("measureProp", measureProp);
                console.log("containerElement", containerElement[measureProp]);
                console.log("childrenSize", childrenSize);
                console.log("childrenPerView", childrenPerView);
                console.log("multiplier", this.multiplier);

                this.isForceUpdate = true;
                this.$forceUpdate();
            }
        } else {
            this.isForceUpdate = false;
        }
    },
}
</script>

<style lang="scss" scoped>
.marquee {
    white-space: nowrap;
    overflow: hidden;
    box-sizing: border-box;

    .marquee-content {
        height: 100%;

        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;

        width: fit-content;

        transform: translate3d(0, 0, 0);

        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-name: marquee-ltr;

        will-change: transform;

        -webkit-backface-visibility: hidden;
        -webkit-transform-style: preserve-3d;

        &.marquee-paused {
            animation-play-state: paused;
        }

        &.marquee-rtl {
            animation-name: marquee-rtl;
        }

        &.marquee-ttb {
            height: fit-content;
            flex-direction: column;
            animation-name: marquee-ttb;
        }

        &.marquee-btt {
            height: fit-content;
            flex-direction: column;
            animation-name: marquee-btt;
        }
    }
}

@keyframes marquee-ltr {
    0%   {
        transform: translate3d(-50%, 0, 0);
    }

    100% {
        transform: translate3d(0, 0, 0);
    }
}

@keyframes marquee-rtl {
    0% {
        transform: translate3d(0, 0, 0);
    }

    100% {
        transform: translate3d(-50%, 0, 0);
    }
}

@keyframes marquee-ttb {
    0%   {
        transform: translate3d(0, -50%, 0);
    }

    100% {
        transform: translate3d(0, 0, 0);
    }
}

@keyframes marquee-btt {
    0% {
        transform: translate3d(0, 0, 0);
    }

    100% {
        transform: translate3d(0, -50%, 0);
    }
}
</style>
