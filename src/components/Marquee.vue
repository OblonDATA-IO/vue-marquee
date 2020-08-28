<script>
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
    cloned.key = key;

    return cloned;
}

function deepCloneVNodes (vNodes, createElement) {
    return vNodes.map(
        vNode => cloneVNode(vNode, createElement)
    );
}

export default {
    "name": "Marquee",
    "props": {
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
            multiplier: 1,
        };
    },
    "render" (createElement) {
        console.log("render")

        this.children = [];

        if (this.$slots.default) {
            for (let i = 0; i < this.multiplier; i++) {
                this.children = this.children.concat(
                    deepCloneVNodes(
                        this.$slots.default.filter(
                            ({ tag }) => !!tag
                        ),
                        createElement
                    ),
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
        this.container = undefined;
        this.children = [];
        this.isForceUpdate = false;
    },
    mounted () {
        console.log("mounted")

        const measureProp = ["ltr", "rtl"].includes(this.direction) ? "offsetWidth" : "offsetHeight";
        const containerElement = this.container.elm;
        const childrenSize = this.children.length > 0 ?
            this.children.reduce(
                (acc, child) => acc += child.elm[measureProp] ? child.elm[measureProp] : 0,
                0
            ) :
            0;

        if (childrenSize > 0) {
            const childrenPerView = Math.ceil(containerElement[measureProp] / childrenSize);
            this.multiplier = childrenPerView < 1 ? 2 : childrenPerView * 2;
            console.log("multiplier", this.multiplier);
            this.isForceUpdate = true;
            this.$forceUpdate();
        }
    },
    updated () {
        console.log("updated")

        if (this.isForceUpdate === false) {
            const measureProp = ["ltr", "rtl"].includes(this.direction) ? "offsetWidth" : "offsetHeight";
            const containerElement = this.container.elm;
            const childrenSize = this.children.length > 0 ?
                this.children.reduce(
                    (acc, child) => acc += child.elm[measureProp] ? child.elm[measureProp] : 0,
                    0
                ) :
                0;

            if (childrenSize > 0) {
                const childrenPerView = Math.ceil(containerElement[measureProp] / childrenSize);
                this.multiplier = childrenPerView < 1 ? 2 : childrenPerView * 2;
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
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;

        width: fit-content;

        transform: translate3d(0, 0, 0);

        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-name: marquee-ltr;

        will-change: transform;

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
