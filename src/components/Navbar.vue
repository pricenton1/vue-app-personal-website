<template>
  <div>
    <nav class="breadcrumb is-centered" aria-label="breadcrumbs" v-if="time">
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
    </nav>

    <vue-skeleton-loader v-else
      class="mx-auto mt-3"
      type="rect"
      :width="800"
      :height="40"
      animation="fade"
      :rounded="true"
    />
  </div>
</template>

<script>
// import 'bulma/css/bulma.css'
// import VueSkeletonLoader from "skeleton-loader-vue";

export default {
  name: "Navbar",
  data() {
    return {
      time: 0,
      // VueSkeletonLoader,
    };
  },
  methods: {
    navTimeOut() {
      setTimeout(() => {
        this.time = 3;
      }, 3000);
    },
  },
  computed: {},
  created() {
    
  },
  mounted(){
    this.navTimeOut();
  }
};
</script>

<style>
.breadcrumb ul li .router-link-exact-active {
  border-radius: 5px;
  font-weight: bolder;
  color: blue;
  font-size: 20px;
}

/* .router-link-active{
  color: black;
} */

/* .breadcrumb-item-color{
  color: black;
} */
</style>
