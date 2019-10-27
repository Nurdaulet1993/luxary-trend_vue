<template>
  <div id="app">
      <app-header></app-header>
      <transition name="pages" mode="out-in">
          <router-view></router-view>
      </transition>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: 'app',
  components: {
      appHeader: Header,
  }
}
</script>

<style lang="scss">
    @import "assets/scss/main.scss";
    @import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*background-color: #EFEFF5;*/
        color: #2c3e50;
     }

    .pages-enter {
      opacity: 0;
    }
    .pages-enter-active {
        transition: all 1.5s ease-in-out;
    }
    .pages-leave {

    }
    .pages-leave-active {

    }


</style>
