<template>
  <div id="app">

      <nav class="navbar navbar-expand-lg navbar-light">

          <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul class="navbar-nav">

                  <router-link
                          class="nav-link ml-2 mr-2"
                          tag="a"
                          exact
                          active-class="active"
                          to="/select_model"
                  >
<!--                      <b class="font-weight-bold align-middle">1</b>-->
                      <span>Модельный ряд</span>
                      <!--                        <span class="sr-only">(current)</span>-->
                  </router-link>

                  <router-link
                          class="nav-link ml-2 mr-2"
                          tag="a"
                          exact
                          active-class="active"
                          to="/configurator"
                  >
<!--                      <b class="font-weight-bold align-middle">2</b>-->
                      <span>Сконфигурировать</span>
                      <!--                        <span class="sr-only">(current)</span>-->
                  </router-link>


              </ul>
          </div>
      </nav>
<!--    <select-model></select-model>-->
<!--    <configurator></configurator>-->
<!--    <engine></engine>-->
      <router-view></router-view>

  </div>
</template>

<script>
// import SelectModel from '@/components/SelectModel';
// import Configurator from "@/components/Configurator";
// import Engine from '@/component/Engine';

export default {
  name: 'App',
  components: {
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
