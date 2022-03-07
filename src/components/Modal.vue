<template>
  <div class="modal">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box">
        <h3 class="title is-3 ">{{ activity.title }}</h3>
        <h4 class="subtitle is-5 has-text-left my-1">Date : {{ activity.date }}</h4>
        <figure class="image is-256x256 mx-2">
          <img :src="activity.image" />
        </figure>
        <h4 class="subtitle is-4 has-text-left">Description :</h4>
        <h5 class="subtitle is-5 has-text-justified mx-2">{{activity.desc}}</h5>
      </div>
    </div>

    <button
      class="modal-close is-large"
      aria-label="close"
      @click="close"
    ></button>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    activity: Object,
  },
  methods: {
    dateConvert() {
      const d = new Date(this.activity.date);
      this.activity.date = d.toDateString();
    },
    close() {
      this.$emit("close");
    },
    created(){
        this.dateConvert();
    }
  },
};
</script>

<style></style>
