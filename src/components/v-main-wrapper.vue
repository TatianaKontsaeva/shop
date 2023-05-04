<template>
    <div class="v-main-wrapper">
        <router-view></router-view>
    </div>

</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: "v-main-wrapper",
    props: {},
    data() {
        return {};
    },
    computed: {
        ...mapGetters (["CART"]),
    },
    methods: {},
    watch: {},
    mounted () {
        console.log("hello! I`m here");
    }
}
</script>

<style>
    .v-main-wrapper {
        margin: 0 auto;
    }
</style>