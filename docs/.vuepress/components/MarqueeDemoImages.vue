<template>
    <marquee class="marquee-demo-images"
             duration-per-slide="1000"
             direction="ltr">
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
    name: "MarqueeDemoPlaintext",
}
</script>

<style lang="scss">
.marquee-demo-images {
    padding: 10px 0;
    margin: 10px 0;

    .slide {
        width: 300px;
        height: 300px;

        & > img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
}
</style>
