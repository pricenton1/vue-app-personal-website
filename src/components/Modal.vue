<template>
  <div class="modal is-active" role="dialog">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box">
        <h3 class="title is-3 ">{{ modalActivity.title }}</h3>
        <h4 class="subtitle is-5 has-text-left my-1">Date : {{ modalActivity.date }}</h4>
        <figure class="image is-256x256 mx-2">
          <img :src="modalActivity.image" />
        </figure>
        <h4 class="subtitle is-4 has-text-left">Description :</h4>
        <h5 class="subtitle is-5 has-text-justified mx-2">{{modalActivity.desc}}</h5>
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
    showModalA:{
      'default' : false
    },
    modalActivity: Object,
  },
  methods: {
    dateConvert() {
      const d = new Date(this.modalActivity.date);
      this.modalActivity.date = d.toDateString();
    },
    close() {
      // this.$emit("close");
      this.$emit('update:showModalA');
    },
    created(){

    },
  },
};
</script>

<style></style>
