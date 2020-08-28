<template>
    <marquee class="marquee-demo-plaintext"
             duration-per-slide="200">
        <div>😺</div>
        <div>😸</div>
        <div>😹</div>
        <div>😻</div>
        <div>😼</div>
        <div>😽</div>
        <div>🙀</div>
        <div>😿</div>
        <div>😾</div>
    </marquee>
</template>

<script>
export default {
    name: "MarqueeDemoPlaintext",
}
</script>

<style lang="scss">
.marquee-demo-plaintext {
    padding-top: 10px;
    padding-bottom: 10px;

    background-color: lightgrey;

    div {
        font-size: 32px;
        margin-right: 15px;
        filter: drop-shadow(0px 10px 5px #999999);
    }
}
</style>
