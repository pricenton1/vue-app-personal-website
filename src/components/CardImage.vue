<template>
  <div>
    <vue-skeleton-loader
      v-if="show == false"
      class="mx-auto mt-1"
      type="rect"
      :width="300"
      :height="200"
      animation="fade"
      :rounded="true"
    />

    <div class="box my-1" v-else>
      <h6 class="title is-6">{{ activity.title }}</h6>
      <h6 class="subtitle is-6">{{ activity.date }}</h6>
      <figure class="image is-256x256 mx-2">
        <img :src="activity.image" />
      </figure>
      <button class="button is-link is-light is-small is-responsive mt-1" @click="showModal(activity)">Read More...</button>
    </div>

    <Modal v-if="showModalA" :showModalA.sync="showModalA" :modalActivity="modalActivity" />
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
      showModalA:false,
      modalActivity:{}
    };
  },
  methods: {
    getDate() {
      const d = new Date(this.activity.date);
      this.activity.date = d.toDateString();
    },
    showModal(activity) {
      this.showModalA = true
      this.modalActivity = activity
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
