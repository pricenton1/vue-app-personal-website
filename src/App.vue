<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Home message="HELLO HOME" /> -->
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
// import HelloWorld from './components/HelloWorld.vue'
// import Home from './pages/Home.vue'
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";


export default {
  name: "App",
  components: {
    // HelloWorld,
    // Home,
    Navbar,
    Footer,
  },
  data: function () {
    return {
      data: "Home",
      count: Number,
      time:"",
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
