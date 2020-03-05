<template>
  <div id="app">
<!--    <select-model></select-model>-->
    <configurator></configurator>
<!--    <engine></engine>-->

  </div>
</template>

<script>
// import SelectModel from '@/components/SelectModel';
import Configurator from "@/components/Configurator";
// import Engine from '@/component/Engine';

export default {
  name: 'App',
  components: {
    // Engine,
    // SelectModel,
    Configurator
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
