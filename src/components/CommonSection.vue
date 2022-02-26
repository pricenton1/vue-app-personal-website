<template>
  <section class="section">
    <vue-skeleton-loader
      v-if="show == false"
      class="mx-auto"
      type="rect"
      :width="950"
      :height="100"
      animation="fade"
      :rounded="true"
    />
    <div v-else>
      <h1 class="title is-4">Know me more ?</h1>
      <h2 class="subtitle">
        {{about}}
      </h2>
    </div>
  </section>
</template>

<script>
export default {
  name: "CommonSection",
  props:{
    about:String
  },
  data(){
    return{
      show:false
    }
  },
  created(){
    setTimeout(()=>{
      this.show = true
    },3000)
  }
};
</script>

<style></style>
