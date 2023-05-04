<template>
    <div class="v-cart-item">
        <img 
        class="v-cart-item__image circle" 
        :src="require('../assets/images/' + cart_item_data.image)" 
        alt="picture">
       
        <div>
            <p>{{ cart_item_data.name }}</p>
            <p>{{ cart_item_data.price }} &#8381;</p>
            <p>{{ cart_item_data.article }}</p>
            <p>{{ cart_item_data.about }}</p>
        </div>
        <div class="v-cart-item__quantity">
        <p>Quantity:</p>
            <span>
                <span class="quantity__btn" @click="decrementItem">&#8722;</span>
                {{cart_item_data.quantity }}
                <span  class="quantity__btn" @click="incrementItem">&#43;</span>
            </span>
        </div>
        <button class="btn deep-purple lighten-4" @click="deleteFromCart">Delete</button>
    </div>

</template>

<script>

export default {
    name: "v-cart-item",
    props: {
        cart_item_data:{
            type: Object,
            default() {
                return {};
            }
        }
    },
    data() {
        return {};
    },
    computed: {},
    methods: {
        decrementItem() {
            this.$emit('decrement')
        },
        incrementItem () {
            this.$emit('increment')
        },
        deleteFromCart() {
            this.$emit("deleteFromCart")
        }
    },
    watch: {},
    mounted () {}
}
</script>

<style lang="scss">
    .v-cart-item {  
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
        flex-basis: 25%;
        padding: 20px;
        margin: 0 auto;
        margin-bottom: 20px;
        margin-top: 20px;
        box-shadow: 0 0 8px 0 grey;
        background: #1f154d;
        color: white;
        border-radius: 20px;
        max-width: 900px;
    }
    .v-cart-item__image {
        min-width: 20%;
    }
    .quantity__btn {
        cursor: pointer; 
    }
    .deep-purple.darken-2 {
        color:#b39ddb;
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(139,0,255,1) 100%);
        border-radius: 20px;
        border:1px solid #b39ddb;
    }
    .deep-purple.darken-2:hover {
        background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(139,0,255,1) 100%);
        color: white;

    }
    .deep-purple.lighten-4 {
        color:white;
        background: linear-gradient(90deg, rgb(150, 0, 255), rgb(0, 25, 255));
        border-radius: 20px;
        border:1px solid #b39ddb;
        transition-duration: 0.5s;
    }
    .deep-purple.lighten-4:hover {
        background: linear-gradient(280deg, rgb(150, 0, 255), rgb(0, 25, 255));
    }
    .quantity__btn {
        padding-top: 8px;
        background: linear-gradient(90deg, rgb(2, 0, 36) 0%, rgb(9, 9, 121) 35%, rgb(139, 0, 255) 100%);
        border: 1px solid #b39ddb;
        border-radius: 50%;
        padding-left: 15px;
        padding-right: 15px;
        padding-bottom: 8px;
        margin: 10px;
    }
</style>