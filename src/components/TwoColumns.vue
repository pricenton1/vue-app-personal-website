<template>
  <div class="columns">
    <div class="column is-narrow-mobile">
      <div class="box has-background-info-light">
        <div>
            <vue-skeleton-loader
              v-if="show.titleEdu == false"
              class="mx-auto my-2"
              type="rect"
              :width="150"
              :height="40"
              animation="fade"
              :rounded="true"
            />
           <p v-else class="title is-4">Education</p>
        </div>  
          
        <BoxEducation
          v-for="(education, index) in educations"
          :key="index"
          :education="education" />
      </div>
    </div>

    <div class="column is-narrow-mobile">
      <div class="box has-background-info-light">
        <div>
          <vue-skeleton-loader
            v-if="show.titleExp == false"
            class="mx-auto my-2"
            type="rect"
            :width="150"
            :height="40"
            animation="fade"
            :rounded="true"
          />
          <p v-else class="title is-4">Experience</p>
        </div>
        
        <BoxExperience v-for="(experience, index) in experiences"
          :key="index"
          :experience="experience" />

      </div>
    </div>
  </div>
</template>

<script>
import BoxEducation from "./BoxEducation";
import BoxExperience from "./BoxExperience";

export default {
  name: "TwoColumns",
  components:{
    BoxEducation,
    BoxExperience
  },
  props: {
    educations: Array,
    experiences: Array,
  },
  data(){
    return{
      show:{
        titleEdu:false,
        titleExp:false,
      }
    }
  },
  created(){
    setTimeout(()=>{
      this.show.titleEdu = true
      this.show.titleExp = true
    },3000)
  }
};
</script>

<style scoped></style>
