<template>
    <div class="v-catalogue">
        <h1 class="v-catalogue__title">Catalogue</h1>
        <div class="v-catalogue__list">
            <vCatalogueItem
            v-for="product in PRODUCTS" 
            :key="product.article" 
            :product_data="product"
            @addToCart="addToCart"
            />
     </div>
    </div>
</template>

<script>
import vCatalogueItem from './v-catalogue-item.vue';
import { mapActions, mapGetters } from "vuex";
export default {
    name: 'v-catalogue',
    components: {
        vCatalogueItem
    },
    props: {},
    data () {
        return {
           
        }
    },
    computed: {
        ...mapGetters(['PRODUCTS'])
    },
    methods: {
        ...mapActions (['GET_PRODUCTS_FROM_API', 'ADD_TO_CART']),
        addToCart(data) {
            this.ADD_TO_CART(data);
        }
    },
    mounted() {
        this.GET_PRODUCTS_FROM_API().then((response) => {
            if(response.data) {
            console.log("ok");
            }
        })
    }

};

</script>

<style>
 .v-catalogue,
 .v-catalogue__list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
    }
.v-catalogue__title {
    margin:0 auto;
}
</style>