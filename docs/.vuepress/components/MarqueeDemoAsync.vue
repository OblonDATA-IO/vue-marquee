<template>
    <marquee class="marquee-demo-async"
             duration-per-slide="1000"
             direction="rtl">
        <div class="slide"
             v-for="{ id, author, } in asyncData"
             v-bind:key="id">
            <img v-bind:alt="author"
                 v-bind:src="`https://picsum.photos/id/${ id }/400/300`">
        </div>
    </marquee>
</template>

<script>
export default {
    name: "MarqueeDemoAsync",
    data () {
        return {
            asyncData: [],
        };
    },
    async mounted () {
        const response = await fetch("https://picsum.photos/v2/list?page=2&limit=5");
        try {
            this.asyncData = await response.json();
        } catch (e) {
            console.error(e);
        }
    }
}
</script>

<style lang="scss" scoped>
.marquee-demo-async {
    padding: 10px 0;
    margin: 10px 0;

    .slide {
        width: 400px;
        height: 300px;

        & > img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
}
</style>

