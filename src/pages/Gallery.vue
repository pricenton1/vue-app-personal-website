<template>
  <div>
    <h2 class="title is-3">Activities</h2>
    <div
      class="is-flex is-flex-wrap-wrap is-justify-content-space-evenly is-align-items-flex-start mb-2"
    >
      <CardImage  v-for="(activity, index) in activities" :key="index" v-bind:activity="activity" />
    </div>
  </div>
</template>

<script>
import CardImage from "../components/CardImage.vue";
import DataService from "../services/DataService";

export default {
  name: "Gallery",
  components: {
    CardImage,
  },
  data() {
    return {
      activities: [],
    };
  },
   methods: {
    getActivity() {
      DataService.getDataPerson()
        .then((response) => {
          this.activities = response.data.activities;
          console.log("INI RESPONSE ", response.data);
          console.log("INI ACTIVITY 2", this.activities)
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  created(){
    this.getActivity();
  },
  mounted(){
    
  }
};
</script>

<style lang="scss" scoped></style>
