<template>
  <div>
    <div class="box my-2 has-background-light">
      <div class="my-2">
        <vue-skeleton-loader
          v-if="show.title == false"
          class="mx-auto my-2"
          type="rect"
          :width="200"
          :height="40"
          animation="fade"
          :rounded="true"
        />
        <p v-else class="title is-5">Familiar with</p>
      </div>
      
      <div class="tabs is-toggle is-centered">
        <vue-skeleton-loader
          v-if="show.tabs == false"
          class="mx-auto my-2"
          type="rect"
          :width="550"
          :height="100"
          animation="fade"
          :rounded="true"
        />

        <ul v-else>
          <li class="has-background-white" v-for="(skill, index) in skills" :key="index">
            <a>
                <figure class="image is-64x64">
                  <img
                    :src="skill.icon"
                    alt="Image"
                  /></figure>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabsComp",
  props: {
    skills: Array,
  },
  data(){
    return{
      show:{
        title:false,
        tabs:false
      }
    }
  },
  created(){
    setTimeout(()=>{
      this.show.title = true
      this.show.tabs = true
    },3000)
  }
};
</script>

<style></style>
