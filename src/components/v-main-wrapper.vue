<template>
    <div class="v-main-wrapper">
    
        <vCatalogue/>
        <vCart/>
    </div>

</template>

<script>
import vCatalogue from './v-catalogue.vue';
import vCart from './v-cart.vue';
export default {
    name: "v-main-wrapper",
    components: {
        vCatalogue,
        vCart
    },
    props: {},
    data() {
        return {
            title: "hello folks!",
        };
    },
    computed: {},
    methods: {},
    wath: {},
    mounted () {
        console.log("hello! I`m here");
    }


}
</script>

<style lang="scss">
    .v-main-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 900px;
        margin: 0 auto;

    }
</style>