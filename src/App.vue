<template>
  <div id="app">

    <Navbar />
  
    <router-view
      message="Hello Home"
      msg="Welcome to Your Vue.js App"
      msg2="About"
    ></router-view>

    
    <Footer />
  </div>
</template>

<script>

import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";



export default {
  name: "App",
  components: {
    Navbar,
    Footer,
   
  },
  data: function () {
    return {
      data: "Home",
    };
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
