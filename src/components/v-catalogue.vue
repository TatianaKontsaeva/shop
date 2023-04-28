<template>
    <div class="v-catalogue">
        <h1 class="v-catalogue__title">Каталог</h1>
        <router-link :to="{name: 'cart', params: {cart_data: CART}}">
            <div class="v-catalogue__link_to_cart"><i class="medium material-icons">shopping_basket</i>
                {{ CART.length }}</div>
        </router-link>
        
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
        ...mapGetters(['PRODUCTS', 'CART'])
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
        background: #fff

    }
.v-catalogue__title {
    margin:0 auto;
}
.v-catalogue__link_to_cart {
    padding: absolute;
    top: 10px;
    right: 15px;
    padding: 15px;
}
</style>