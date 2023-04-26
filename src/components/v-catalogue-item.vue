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
        <button class="v-catalogue-item__add_to_cart_btn" @click="sendDataToParent">Add to cart</button>
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
        sendDataToParent () {
            this.$emit("hello", this.product_data.article)
        }
    },
};
</script>

<style lang="scss">

.v-catalogue-item {
    padding: 20px;
    margin: 20px;
    box-shadow: 0 0 8px 0 grey;
    
}
</style>