<template>
  <div>
    <BgGradient v-if="showBg" class="bg-gradient" />
    <div class="container is-max-desktop">
      <!-- <h1 class="title-anton" v-if="titleHome">{{titleHome}}</h1> -->
      <img
        class=""
        :src="require(`../assets/images/${imageTitle}`)"
        :alt="imageTitle"
        v-if="imageTitle"
      />
      <!-- skeleton loading title -->
      <vue-skeleton-loader
        v-else
        class="mx-auto my-3"
        type="rect"
        :width="600"
        :height="50"
        animation="fade"
        :rounded="true"
      />

      <div class="columns is-desktop">
        <div class="column"><CardProfile /></div>
        <div class="column">
          <img
            class=""
            :src="require(`../assets/images/${image}`)"
            alt="image1"
            v-if="image"
          />
          <vue-skeleton-loader
            v-else
            class="mx-auto"
            type="rect"
            :width="420"
            :height="370"
            animation="fade"
            :rounded="true"
          />
        </div>
      </div>
    </div>
    <!-- <h1>{{ message }}</h1> -->
  </div>
</template>

<script>
// import "bulma/css/bulma.css";
import CardProfile from "../components/CardProfile.vue";
import BgGradient from "../components/svg/BgGradient.vue";

export default {
  name: "Home",
  props: {
    message: String,
  },
  components: {
    CardProfile,
    BgGradient
  },
  data: function () {
    return {
      imageTitle: "",
      image: "",
      showBg:false
    };
  },
  methods: {
    fadeTitle() {
      setTimeout(() => {
        this.imageTitle = "imageTitle.png";
      }, 3000);
    },
    getImage() {
      setTimeout(() => {
        this.image = "image1.png";
        this.showBg = true
      }, 3000);
    },
  },
  mounted() {
    this.fadeTitle();
    this.getImage();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");

.title-anton {
  font-family: "Anton", sans-serif;
  font-size: 40px;
  letter-spacing: 4px;
}
/* .columns {
  height: 450px;
  border: solid;
} */

.bg-gradient{
  position: absolute;
  right: -5px;
  top: 382px;
}

@media screen and (max-width: 750px){
  .bg-gradient{
    display: none;
  }
}

</style>
