<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Main from './components/layouts/Main.vue'

  export default Vue.extend ({
    components: {
      Main
    }
  })
</script>

<style lang="scss">
  * {
    box-sizing: border-box;
    margin: 0;
    border: 0;
    padding: 0;
    font-size: 15px;
    list-style-type: none;
    text-decoration: none;
    font-family: "Arial", "Helvetica";
  }


  @font-face {
      font-family: Poppins;
      src: url("./fonts/Poppins-ExtraLight.ttf") format("truetype");
  }

</style>
