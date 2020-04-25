<template>
  <div id="app">
      <navigation></navigation>

      <router-view></router-view>


<!--      <equipments></equipments>-->

      <app-footer></app-footer>
  </div>
</template>

<script>
    import Navigation from "./components/permanent/Navigation";
    import Footer from "./components/permanent/Footer";

export default {
  name: 'App',
  components: {
      Navigation,
      appFooter: Footer,

  },


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
