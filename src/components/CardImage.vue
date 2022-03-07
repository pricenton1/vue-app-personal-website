<template>
  <div>
    <vue-skeleton-loader
      v-if="show == false"
      class="mx-auto"
      type="rect"
      :width="300"
      :height="200"
      animation="fade"
      :rounded="true"
    />

    <div class="box" v-else>
      <h6 class="title is-6">{{ activity.title }}</h6>
      <h6 class="subtitle is-6">{{ activity.date }}</h6>
      <figure class="image is-256x256 mx-2">
        <img :src="activity.image" />
      </figure>
      <button class="button is-link is-light is-small is-responsive mt-1" @click="showModal">Read More...</button>
      <!-- <a class="subtitle is-6 has-text-info" @click="showModal">Read More...</a> -->
    </div>

    <Modal id="detail-modal" :activity="activity" @close="closeModal" />
  </div>
</template>

<script>
import Modal from "../components/Modal.vue";

export default {
  name: "CardImage",
  components: {
    Modal,
  },
  props: {
    activity: Object,
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    getDate() {
      const d = new Date(this.activity.date);
      this.activity.date = d.toDateString();
    },
    showModal() {
      const modal = document.getElementById("detail-modal");
      modal.classList.add("is-active");
    },
    closeModal() {
      const modal = document.getElementById("detail-modal");
      modal.classList.remove("is-active");
    },
  },
  created() {
    setTimeout(() => {
      this.getDate();
      this.show = true;
    }, 3000);
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
figure img {
  width: 306px;
  height: 200px;
  cursor: pointer;
}
</style>
