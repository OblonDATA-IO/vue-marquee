<template>
    <marquee class="marquee-demo-vertical"
             duration-per-slide="1000"
             direction="ttb">
        <div class="slide">
            <img alt="From Unsplash"
                 src="https://source.unsplash.com/featured/?nature">
        </div>
        <div class="slide">
            <img alt="From Unsplash"
                 src="https://source.unsplash.com/featured/?water">
        </div>
        <div class="slide">
            <img alt="From Unsplash"
                 src="https://source.unsplash.com/featured/?architecture">
        </div>
        <div class="slide">
            <img alt="From Unsplash"
                 src="https://source.unsplash.com/featured/?art">
        </div>
    </marquee>
</template>

<script>
export default {
    name: "MarqueeDemoVertical",
}
</script>

<style lang="scss">
.marquee-demo-vertical {
    height: 600px;

    padding: 10px 0;
    margin: 10px 0;

    .slide {
        height: 350px;
        padding: 5px;

        & > img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
}
</style>
