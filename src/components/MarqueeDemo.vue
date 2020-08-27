<template>
    <marquee class="test"
             duration-per-slide="1000"
             direction="left">
        <div>Test Test</div>
        <div>Test Hello</div>
        <div>Test Idiot</div>
        <div>Test World</div>
    </marquee>
</template>

<script>
import Marquee from "@/components/Marquee";

export default {
    name: "MarqueeDemo",
    components: {
        Marquee,
    },
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
.test {
    background-color: grey;
    color: white;
}
</style>
