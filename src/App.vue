<template>
  <div id="app">
      <navigation></navigation>


      <router-view></router-view>


<!--      <equipments></equipments>-->


      <fast-connection></fast-connection>
      <preloader v-if="preloader"/>
      <app-footer></app-footer>
  </div>
</template>

<script>
    import Navigation from "./components/permanent/Navigation";
    import Footer from "./components/permanent/Footer";
    import FastConnection from "./components/permanent/FastConnection";
    import Preloader from "./components/permanent/Preloader";

export default {
  name: 'App',
  components: {
      Navigation,
      appFooter: Footer,
      FastConnection,
      Preloader,
  },

    data() {
      return {
          showPreloader: false,
      }
    },

    computed: {
      preloader() {
          return this.$store.getters.preloader;
      },
    },

    // beforeCreate() {
    //   this.showPreloader = true;
    // },


}
</script>

<style>
#app {
    width: 100%;
    min-width: 350px;
    min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

    #app {
        font-family: toyotadisplay_bd,Arial,Helvetica,sans-serif;
    }

   h1 {font-family: toyotadisplay_bd,Arial,Helvetica,sans-serif;}



</style>
