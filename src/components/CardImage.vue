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
      <h6 class="title is-6">{{activity.title}}</h6>
      <figure class="image is-256x256 mx-2">
        <!-- <img src="https://bulma.io/images/placeholders/256x256.png" /> -->
        <img :src="activity.image" />
      </figure>
      <h6 class="subtitle is-6 mt-1">{{activity.date}}</h6>
    </div>
  </div>
</template>

<script>

export default {
  name: "CardImage",
  props:{
    activity:Object,
  },
  data(){
    return{
      show:false
    }
  },
  methods:{
    getDate(){
      const d = new Date(this.activity.date)
      this.activity.date = d.toDateString()
    }
  },
  created(){
    setTimeout(()=>{
      this.getDate();
      this.show = true
    },3000)
  },
  mounted(){}
};
</script>

<style lang="scss" scoped>
figure img {
  width: 306px;
  height: 200px;
  cursor: pointer;
}
</style>
