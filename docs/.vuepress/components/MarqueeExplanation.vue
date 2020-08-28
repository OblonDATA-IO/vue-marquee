<template>
    <marquee class="marquee-demo-images"
             duration-per-slide="1000"
             direction="ltr">
        <div class="slide">
            A
        </div>
        <div class="slide">
            B
        </div>
        <div class="slide">
            C
        </div>
        <div class="slide">
            D
        </div>
    </marquee>
</template>

<script>
export default {
    name: "MarqueeExplanation",
    data () {
        return {

        };
    },
    computed: {

    },
    methods: {

    },
}
</script>

<style lang="scss" scoped>
.marquee-demo-images {
    background-color: lightgrey;

    .slide {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 300px;
        height: 300px;

        color: white;
        font-size: 128px;
        font-weight: bolder;

        background-color: dimgrey;

        margin: 10px 5px;

        &:nth-child(1) {
            background-color: red;
        }

        &:nth-child(5) {
            background-color: blue;
        }
    }
}
</style>
