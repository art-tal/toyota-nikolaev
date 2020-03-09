<template>
  <div id="app">
      <navigation></navigation>



<!--      <nav class="navbar navbar-expand-lg navbar-light">-->

<!--          <div class="collapse navbar-collapse justify-content-center" id="navbarNav">-->
<!--              <ul class="navbar-nav">-->

<!--                  <router-link-->
<!--                          class="nav-link ml-2 mr-2"-->
<!--                          tag="a"-->
<!--                          exact-->
<!--                          active-class="active"-->
<!--                          to="/select_model"-->
<!--                  >-->
<!--&lt;!&ndash;                      <b class="font-weight-bold align-middle">1</b>&ndash;&gt;-->
<!--                      <span>Модельный ряд</span>-->
<!--                      &lt;!&ndash;                        <span class="sr-only">(current)</span>&ndash;&gt;-->
<!--                  </router-link>-->

<!--                  <router-link-->
<!--                          class="nav-link ml-2 mr-2"-->
<!--                          tag="a"-->
<!--                          exact-->
<!--                          active-class="active"-->
<!--                          to="/configurator"-->
<!--                  >-->
<!--&lt;!&ndash;                      <b class="font-weight-bold align-middle">2</b>&ndash;&gt;-->
<!--                      <span>Сконфигурировать</span>-->
<!--                      &lt;!&ndash;                        <span class="sr-only">(current)</span>&ndash;&gt;-->
<!--                  </router-link>-->


<!--              </ul>-->
<!--          </div>-->
<!--      </nav>-->
<!--    <select-model></select-model>-->
<!--    <configurator></configurator>-->
<!--    <engine></engine>-->
<!--      <all-modell></all-modell>-->

      <router-view></router-view>

      <Footer></Footer>
  </div>
</template>

<script>
    import Navigation from "@/components/permanent/Navigation";
    import Footer from "@/components/permanent/Footer";
// import SelectModel from '@/components/SelectModel';
// import Configurator from "@/components/Configurator";
// import Engine from '@/component/Engine';
// import AllModell from "./components/AllModell";

export default {
  name: 'App',
  components: {
      Navigation,
      Footer,
      // AllModell,
    // Engine,
    // SelectModel,
    // Configurator
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

    #app {
        font-family: toyotadisplay_bd,Arial,Helvetica,sans-serif;;
    }

   header h1 {
        display: inline-block;
    }


</style>
