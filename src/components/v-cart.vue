<template>
    <div class="v-cart">
            <router-link :to="{name: 'catalogue'}">
                <h3 class="v-cart__title">Cart</h3>
                <button class="btn deep-purple lighten-2">Back to catalog</button>
            </router-link>
        <p v-if="!CART.length">There is nothing in the cart...&#128542;</p>
         
        <vCartItem 
        v-for="(item, index) in CART"
        :key="item.article" 
        :cart_item_data="item" 
        @deleteFromCart="deleteFromCart(index)"
        @increment="increment(index)"
        @decrement="decrement(index)"
        />
       
        <div class="v-cart__total">
            <p class="v-cart__total__quantity" v-if="CART.length>0">Quantity in cart: {{ CART.reduce((sum, item) => sum + item.quantity, 0) }}</p>
            <p class="v-cart__total__name" v-if="TOTAL>0">Total: {{TOTAL}} &#8381;</p>
        </div>
    </div>
</template>

<script>
import vCartItem from "./v-cart-item.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
    name: 'v-cart',
    components: {
        vCartItem
    },
    props: {
        cart_data: {
            type: Array,
            default() {
                return [];
            },
        },
    },
    data () {
        return {};
    },
    computed: {
        ...mapGetters(['CART', "TOTAL"]), 
    },
    methods: {
        ...mapActions ([
            'DELETE_FROM_CART',
            'INCREMENT_CART_ITEM',
            'DECREMENT_CART_ITEM'
        ]),
        ...mapMutations (["SET_TOTAL"]),
        increment(index) {
            this.SET_TOTAL(this.TOTAL + this.CART[index].price);
            this.INCREMENT_CART_ITEM(index)
        },
        decrement(index) {
            this.SET_TOTAL(this.TOTAL - this.CART[index].price);
            this.DECREMENT_CART_ITEM(index)
        },
        deleteFromCart(index) {
            this.DELETE_FROM_CART(index);
            console.log(index);
        },
    },
};
</script>
<style scoped>
    .v-cart {
        font-size: 18px;
        margin-bottom: 150px;
    }
    p {
        text-align: center;
        font-size: 26px;
    }
   .v-cart__total {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 400px;
    margin: 0 auto;
    box-shadow: 0 0 8px 0 grey;
    background: #794ae9;
    color: white;
    border-radius: 20px;
    margin-bottom: 20px;
   }
   .v-cart__total__name,
   .v-cart__total__quantity {
    font-size: 18px;
   }
   .btn {
    margin: 15px;
   }
   .v-cart__title {
    color: #ede7f6;
   }

</style>