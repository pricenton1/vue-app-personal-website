<template>
  <div class="mt-2">
    <vue-skeleton-loader
      v-if="show == false"
      class="mx-auto"
      type="rect"
      :width="500"
      :height="50"
      animation="fade"
      :rounded="true"
      color="rgba(212,208,208,0.12)"
    />

    <div v-else class="tabs is-toggle is-toggle-rounded is-centered is-mobile">
      <ul>
        <li>
          <a
            href="https://wa.me/08987876401?text=Hello%20Antony"
            class="whatsapp"
          >
            <span class="icon is-medium"
              ><font-awesome-icon :icon="['fab', 'whatsapp']"
            /></span>
          </a>
        </li>
        <li>
          <a href="https://web.telegram.org/z/#1109245542" class="telegram">
            <span class="icon is-medium"
              ><font-awesome-icon :icon="['fab', 'telegram-plane']"
            /></span>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/AntonyPricenton" class="twitter">
            <span class="icon is-medium"
              ><font-awesome-icon :icon="['fab', 'twitter']"
            /></span>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/mirasandyantony/">
            <span class="icon is-medium"
              ><font-awesome-icon :icon="['fab', 'instagram']"
            /></span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/antony-mirasandy-60939b172/">
            <span class="icon is-medium"
              ><font-awesome-icon :icon="['fab', 'linkedin']"
            /></span>
            <span></span>
          </a>
        </li>
        <li>
          <a href="https://github.com/pricenton1">
            <span class="icon is-medium"
              ><font-awesome-icon :icon="['fab', 'github']"
            /></span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "MedSos",
  data(){
    return {
      show:false,
    }
  },
  methods:{
    medSosTimeOut(){
      setTimeout(()=>{
        this.show = true
      },3000)
    },
  },
  mounted(){
    this.medSosTimeOut();
  }
};
</script>

<style scoped></style>
