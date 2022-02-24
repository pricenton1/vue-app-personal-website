<template>
  <div>
    <vue-skeleton-loader
      v-if="showTitle == false"
      class="mx-auto my-2"
      type="rect"
      :width="300"
      :height="40"
      animation="fade"
      :rounded="true"
    />

    <h2 class="title is-3" v-else>Activities</h2>
    <div
      class="is-flex is-flex-wrap-wrap is-justify-content-space-evenly is-align-items-flex-start mb-2"
    >
      <CardImage v-for="(activity, index) in activities" :key="index" v-bind:activity="activity" />
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
      showTitle: false
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
    setTimeout(()=>{
      this.showTitle = true
    },3000)
    this.getActivity();
  },
  mounted(){
    
  }
};
</script>

<style lang="scss" scoped></style>
