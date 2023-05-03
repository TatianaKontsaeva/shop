<template>
  <div id="app">
   
<vMainWrapper />
  </div>
</template>

<script>
import vMainWrapper from './components/v-main-wrapper.vue';
export default {
  name: 'app',
  components: {
    vMainWrapper
  }
};
</script>
<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
body {
  background-color: #1c0b38;
  color: white;
  }
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}


</style>
