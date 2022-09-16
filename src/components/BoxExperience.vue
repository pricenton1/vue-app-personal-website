<template>
  <div class="my-3">
      <vue-skeleton-loader
        v-if="show == false"
        class="mx-2 my-2"
        type="rect"
        :width="550"
        :height="100"
        animation="fade"
        :rounded="true"
    />
    <div
        v-else
        class="box has-background-dark"
    >
      <article class="media">
        <div class="media-left">
          <span class="icon is-medium mx-4 has-text-white"
            ><font-awesome-icon :icon="['fa', 'briefcase']" size="2x"
          /></span>
          <h5 class="subtitle is-5 mt-2 has-text-white">
            {{ experience.date }}
          </h5>
        </div>

        <div class="media-content">
          <div class="content">
            <h5 class="title is-5 has-text-primary-light">
              {{ experience.title }}
            </h5>
            <h6 class="title is-6 has-text-primary-light">
              {{ experience.position }}
            </h6>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "BoxExperience",
  props:{
      experience:Object
  },
  data(){
      return{
          show:false
      }
  },
  created(){
      setTimeout(()=>{
          this.show = true
      },1000)
  }
};
</script>

<style>
</style>