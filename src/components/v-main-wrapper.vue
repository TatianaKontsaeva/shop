<template>
    <div class="v-main-wrapper">
    
        <vCatalogue/>
        <vCart
        v-if="CART.length" :cart_data="CART"/>
    </div>

</template>

<script>
import vCatalogue from './v-catalogue.vue';
import vCart from './v-cart.vue';
import { mapGetters } from 'vuex'
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
    computed: {
        ...mapGetters (["CART"]),
    },
    methods: {},
    watch: {},
    mounted () {
        console.log("hello! I`m here");
    }


}
</script>

<style>
    .v-main-wrapper {
        margin: 0 auto;
    }
</style>