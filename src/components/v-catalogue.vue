<template>
    <div class="v-catalogue">
        <h1 class="v-catalogue__title">Course catalog</h1>
        <router-link :to="{name: 'cart'}">
            <div class="v-catalogue__link_to_cart"><i class="small material-icons" >shopping_basket</i>
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
        return {}
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
.v-catalogue {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}
 .v-catalogue__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    column-gap: 20px;
}
    
.v-catalogue__title {
    margin:0 auto;
    padding-bottom: 20px;
    color: #ede7f6;
}
.v-catalogue__link_to_cart {
    padding: absolute;
    top: 10px;
    right: 15px;
    padding: 15px;
    color: #b39ddb
}
.material-icons {
    color: #b39ddb;
}
</style>