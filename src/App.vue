<template>
  <div id="app">
      <navigation></navigation>


      <router-view></router-view>


<!--      <equipments></equipments>-->


      <fast-connection></fast-connection>
      <preloader class="preloader"/>
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

    mounted(){
        this.$nextTick(()=>document.body.classList.add('app-mounted'));
    }


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

.preloader { display: none; }
body:not(.app-mounted) .spinner {
    display: block;
}

</style>
