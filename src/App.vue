<template>
  <div id="app">
      <navigation></navigation>

<!--      <router-view></router-view>-->
      <router-view name="pages"></router-view>


<!--      <equipments></equipments>-->

      <app-footer></app-footer>
  </div>
</template>

<script>
    import Navigation from "@/components/permanent/Navigation";
    import Footer from "@/components/permanent/Footer";
export default {
  name: 'App',
  components: {
      Navigation,
      // Equipments,
      appFooter: Footer,
      // AllModel,
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
