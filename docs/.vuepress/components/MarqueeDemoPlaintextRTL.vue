<template>
    <marquee class="marquee-demo-plaintext-rtl"
             duration-per-slide="1000"
             direction="rtl">
        <div>
            <strong>S&P 500</strong> 3,484.55 <span class="is-green">+5.82</span>
        </div>
        <div>
            <strong>Dow 30</strong> 28,492.27 <span class="is-green">+160.35</span>
        </div>
        <div>
            <strong>Nasdaq</strong> 11,625.34 <span class="is-red">-39.72</span>
        </div>
        <div>
            <strong>Russell 2000</strong> 1,564.56 <span class="is-green">+4.3</span>
        </div>
        <div>
            <strong>Crude Oil</strong> 42.91 <span class="is-red">-0.13</span>
        </div>
        <div>
            <strong>Gold</strong> 1,935.00 <span class="is-green">+2.40</span>
        </div>
        <div>
            <strong>Silver</strong> 27.07 <span class="is-green">+0.04</span>
        </div>
    </marquee>
</template>

<script>
export default {
    name: "MarqueeDemoPlaintextRTL",
}
</script>

<style lang="scss" scoped>
.marquee-demo-plaintext-rtl {
    padding: 10px 0;
    margin: 10px 0;

    background-color: lightgrey;

    div {
        margin-right: 15px;
    }

    .is-green {
        color: green;
    }

    .is-red {
        color: red;
    }
}
</style>
