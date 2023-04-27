<template>
    <div class="v-catalogue-item">
        <img 
        class="v-catalogue-item__img" 
        :src="require('../assets/images/' + product_data.image)" 
        alt="picture">
        <p class="v-catalogue-item__name">{{product_data.name}}</p>
        <p class="v-catalogue-item__price">{{product_data.price}}</p>
        <p class="v-catalogue-item__price">{{product_data.about}}</p>
        <p class="v-catalogue-item__price">{{product_data.category}}</p>
        <button class="v-catalogue-item__add_to_cart_btn" @click="addToCart">Add to cart</button>
    </div>
</template>

<script>
export default {
    name: 'v-catalogue-item',
    props: {
        product_data: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    data () {
        return {};
    },
    methods: {
        addToCart () {
            this.$emit('addToCart',this.product_data)
        }
    },
};
</script>

<style lang="scss">

.v-catalogue-item {
    flex-basis: 40%;
    box-shadow: 0 0 8px 0 grey;
    padding: 30px;
    margin: 20px;
}
.v-catalogue-item__img {
    width: 160px;
    margin: 0 auto;
    display: block;
}
</style>