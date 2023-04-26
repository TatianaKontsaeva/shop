<template>
    <div class="v-cart-item">
    
        <vCatalogue/>
        <vCart/>
    </div>

</template>

<script>
import vCatalogue from './v-catalogue.vue';
import vCart from './v-cart.vue';
export default {
    name: "v-cart-item",
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
   
</style>