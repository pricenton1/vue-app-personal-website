<template>
  <div class="nav-container">
    <a
      role="button"
      id="navbarBurger"
      class="navbar-burger"
      data-target="navMenu"
      aria-label="menu"
      aria-expanded="false"
      v-on:click="showNav"
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>

    <nav
      class="breadcrumb"
      id="bread"
      aria-label="breadcrumbs"
      v-if="show == true"
    >
      <div class="navbar-menu" id="navMenu">
        <ul>
          <li>
            <router-link to="/">
              <span class="icon is-large">
                <font-awesome-icon :icon="['fas', 'house-user']" />
              </span>
              Home
            </router-link>
          </li>
          <li>
            <router-link to="/gallery">
              <span class="icon is-large">
                <font-awesome-icon :icon="['fas', 'photo-video']" />
              </span>
              Gallery
            </router-link>
          </li>
          <li>
            <router-link to="/portfolio">
              <span class="icon is-large">
                <font-awesome-icon :icon="['fas', 'bookmark']" />
              </span>
              Portfolio
            </router-link>
          </li>
          <li>
            <router-link to="/contact">
              <span class="icon is-large">
                <font-awesome-icon :icon="['fas', 'phone-alt']" />
              </span>
              Contact
            </router-link>
          </li>
          <li>
            <router-link to="/about">
              <span class="icon is-large">
                <font-awesome-icon :icon="['fas', 'user']" />
              </span>
              About
            </router-link>
          </li>
        </ul>
      </div>
    </nav>

    <vue-skeleton-loader
      v-else
      class="mt-3"
      type="rect"
      :width="700"
      :height="40"
      animation="fade"
      :rounded="true"
    />
  </div>
</template>

<script>
// import 'bulma/css/bulma.css'

export default {
  name: "Navbar",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    navTimeOut() {
      setTimeout(() => {
        this.show = true;
      }, 3000);
    },

    showNav() {
      // change clasName breadcrumb to navbar
      const bread = document.getElementById("bread");
      if (bread.className === "breadcrumb") {
        bread.className = "navbar";
      }else if (bread.className === "navbar"){
        bread.className = "breadcrumb"
      }

      // Get all "navbar-burger" elements
      const navbarBurgers = Array.prototype.slice.call(
        document.querySelectorAll(".navbar-burger"),
        0
      );
      if (navbarBurgers.length > 0) {
        // Add a click event on each of them
        navbarBurgers.forEach((el) => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const targetNavbarMenu = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          targetNavbarMenu.classList.toggle("is-active");
          
        });
      }
    },
  },
  computed: {},
  created() {},
  mounted() {
    this.navTimeOut();
  },
};
</script>

<style scoped>
.nav-container{
  margin-left: 320px;
}
.breadcrumb ul li .router-link-exact-active {
  border-radius: 5px;
  font-weight: bolder;
  color: blue;
  font-size: 20px;
}

.navbar-burger {
  display: none;
}

@media screen and (max-width: 1200px){
  .nav-container{
   margin-left: 50px;
  }
}



@media screen and (max-width: 800px) {
  .navbar-burger {
    display: block;
    height: 50px;
    width: 100px;
  }
  .breadcrumb {
    display: none;
  }
}
</style>
