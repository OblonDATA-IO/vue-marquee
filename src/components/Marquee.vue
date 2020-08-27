<script>
let container;
let isForceUpdate = false;
let children = [];

function cloneVNode (
    { children, tag, data, text, isComment, componentOptions, elm, context, ns, isStatic, key, },
    createElement
) {
    const clonedChildren = children && children
        .map(
            vnode => cloneVNode(vnode, createElement)
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

function deepCloneVNodes (vnodes, createElement) {
    return vnodes.map(
        vnode => cloneVNode(vnode, createElement)
    );
}

export default {
    "name": "Marquee",
    "props": {
        "direction": {
            type: String,
            default: "left"
        },

        "durationPerSlide": {
            type: Number,
            default: 2000
        },
    },
    data () {
        return {
            multiplier: 1,
        };
    },
    "render" (createElement) {
        console.log("render");

        children = [];

        if (this.$slots.default) {
            for (let i = 0; i < this.multiplier; i++) {
                children = children.concat(
                    deepCloneVNodes(
                        this.$slots.default,
                        createElement
                    ),
                );
            }
        }

        const animationDuration = parseInt(this.durationPerSlide) * (children.length > 0 ? children.length : 1);

        container = createElement(
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
                            "marquee-rtl": this.direction === "right"
                        },
                        "style": {
                            "animation-duration": `${ animationDuration }ms`,
                        },
                    },
                    children
                )
            ]
        );
        return container;
    },
    mounted () {
        const containerElement = container.elm;
        const countChildren = children.length;
        const sample = children.length > 0 ? children[0] : null;

        /*const childrenWidth = children.length > 0 ?
            children.reduce(
                (acc, child) => acc += child.elm.offsetWidth,
                0
            ) :
            0;*/

        if (childrenWidth > 0) {
            const countPerView = Math.ceil(containerElement.offsetWidth / sample.elm.offsetWidth);
            this.multiplier = countChildren > countPerView ? 2 : Math.ceil(countPerView / countChildren) * 2;
            console.log(this.multiplier);
            isForceUpdate = true;
            this.$forceUpdate();
        }
    },
    updated () {
        if (isForceUpdate === false) {
            const containerElement = container.elm;
            const countChildren = children.length;
            const sample = children.length > 0 ? children[0] : null;

            if (sample) {
                const countPerView = Math.ceil(containerElement.offsetWidth / sample.elm.offsetWidth);
                this.multiplier = countChildren > countPerView ? 2 : Math.ceil(countPerView / countChildren) * 2;
                console.log(this.multiplier);
                isForceUpdate = true;
                this.$forceUpdate();
            }
        } else {
            isForceUpdate = false;
        }
    },
}
</script>

<style lang="scss" scoped>
.marquee {
    white-space: nowrap;
    overflow: hidden;
    box-sizing: border-box;

    width: 100%;

    .marquee-content {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;

        width: fit-content;
        height: 100%;

        transform: translate3d(0, 0, 0);

        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-name: marquee;

        &.marquee-rtl {
            animation-name: marquee-rtl;
        }
    }
}

@keyframes marquee {
    0% {
        transform: translate3d(0, 0, 0);
    }

    100% {
        transform: translate3d(-50%, 0, 0);
    }
}

@keyframes marquee-rtl {
    0%   {
        transform: translate3d(-50%, 0, 0);
    }

    100% {
        transform: translate3d(0, 0, 0);
    }
}
</style>
