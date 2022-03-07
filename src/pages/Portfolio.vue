<template>
  <div class="container">
    <div
      class="is-flex is-flex-wrap-wrap is-justify-content-space-evenly is-align-items-flex-start mb-2"
    >
      <BoxComp v-for="(item, index) in portfolio" :key="index" v-bind:item="item" />
    </div>
  </div>
</template>

<script>
import BoxComp from "../components/BoxComp.vue";
import DataService from "../services/DataService";

export default {
  name: "Portfolio",
  components: {
    BoxComp,
  },
  data() {
    return {
      portfolio: [],
    };
  },
  methods: {
    getPortfolio() {
      DataService.getDataPerson()
        .then((response) => {
          this.portfolio = response.data.portfolio;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted(){
    this.getPortfolio()
  }
};
</script>

<style></style>
