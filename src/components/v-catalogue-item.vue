<template>
    <div class="v-catalogue-item">
        <img 
        class="v-catalogue-item__img circle" 
        :src="require('../assets/images/' + product_data.image)" 
        alt="picture">
        <p class="v-catalogue-item__name">{{product_data.name}}</p>
        <p class="v-catalogue-item__price">Price: {{product_data.price}} RUB</p>
        <p class="v-catalogue-item__about">{{product_data.about}}</p>
        <button class="v-catalogue-item__add_to_cart_btn btn deep-purple darken-2" @click="addToCart">Add to cart</button>
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
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: 20px;
    margin-bottom: 20px;
    border: 2px solid #22237f;
    border-radius: 10px;
    background: #1f154d;
}
.v-catalogue-item__name {
    font-size: 20px;
}

</style>