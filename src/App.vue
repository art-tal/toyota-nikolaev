<template>
  <div id="app">
      <navigation></navigation>

      <router-view></router-view>

      <app-footer></app-footer>
  </div>
</template>

<script>
    import Navigation from "@/components/permanent/Navigation";
    import Footer from "@/components/permanent/Footer";
    // import axios from "axios";
// import SelectModel from '@/components/SelectModel';
// import Configurator from "@/components/Configurator";
// import Engine from '@/component/Engine';
// import AllModell from "./components/AllModell";

export default {
  name: 'App',
  components: {
      Navigation,
      appFooter: Footer,
      // AllModell,
    // Engine,
    // SelectModel,
    // Configurator
  },

  // created() {
  //     axios({
  //         method: 'get',
  //         url:"http://lara.toyota.nikolaev.ua/storage/lara.toyota.nikolaev.ua/ajax/id_mod",
  //         data: {id_mod: 1}
  //     })
  //         .then( (response) => {
  //             console.log(response.data);
  //         } )
  //         .catch( (error) => {
  //             console.log("Ошибка, не возможно загрузить доступные модификации");
  //             console.log(error);
  //         } );
  // },
}
</script>

<style>
#app {
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
