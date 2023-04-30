<template>
    <div class="v-cart">

        <router-link :to="{name: 'catalogue'}">
            <div class="v-catalogue__link_to_cart">
                <i class="medium material-icons">shopping_basket</i>
                {{ CART.length }}</div>

            <button class="btn">Back</button>
        </router-link>
        <p v-if="!CART.length">В корзине ничего нет</p>
       
         
        <vCartItem 
        v-for="(item, index) in CART"
        :key="item.article" 
        :cart_item_data="item" 
        @deleteFromCart="deleteFromCart(index)"
        @increment="increment(index)"
        @decrement="decrement(index)"
        />
       
        <!-- <div class="v-cart__total">
            <p class="v-cart__total__name">Total:</p>
            <p>{{ cartTotalCost }}</p>
        </div> -->
    </div>
</template>

<script>
import vCartItem from "./v-cart-item.vue";
import { mapActions, mapGetters } from "vuex";
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
            }
        }
    },
    data () {
        return {};
    },
    computed: {
        ...mapGetters(['CART']),
 
        // cartTotalCost() {
        //     let result = []

        //     if (this.cart_data.length) {
        //         for (let cart_item_data of this.cart_data) {
        //         result.push(cart_item_data.price * cart_item_data.quantity)
        //     }
        //     result = result.reduce(function (sum, el) {
        //         return sum + el;
        //     })
        //     return result;
        //     } else return 0
                
        // }
    },
    methods: {
        ...mapActions ([
            'DELETE_FROM_CART',
            'INCREMENT_CART_ITEM',
            'DECREMENT_CART_ITEM'
        ]),
        increment(index) {
            this.INCREMENT_CART_ITEM(index)
        },
        decrement(index) {
            this.DECREMENT_CART_ITEM(index)
        },
        deleteFromCart(index) {
            this.DELETE_FROM_CART(index);
        },
    },
};
</script>
<style scoped>
    .v-cart {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        color: grey;
        font-size: 20px;
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
    padding: 20px;
    display: flex;
    justify-content: center;
    color: white;
    background: #26a69a;
   }
   .v-cart__total__name {
    font-size: 20px;
   }

</style>