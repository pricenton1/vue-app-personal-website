<template>
  <div class="container">
    <figure class="image is-128x128 mx-auto my-2">
      <vue-skeleton-loader
        v-if="show.image == false"
        class="mx-auto"
        type="circle"
        :width="128"
        :height="128"
        animation="fade"
      />
      <img
        v-else
        class="is-rounded has-background-info"
        :src="person.image"
      />
    </figure>
    <div>
      <vue-skeleton-loader
        v-if="show.fullname == false"
        class="mx-auto"
        type="rect"
        :width="200"
        :height="40"
        animation="fade"
        :rounded="true"
      />
      <h3 v-else class="title is-4">{{person.firstname}} {{person.lastname}}</h3>
    </div>
    

    <CommonSection :about="person.about"/>

    <TwoColumns :educations="educations" :experiences="experiences" />
    <TabsComp :skills="skills" />
  </div>
</template>

<script>
import CommonSection from "../components/CommonSection.vue";
import TwoColumns from "../components/TwoColumns.vue";
import TabsComp from "../components/TabsComp.vue";
import DataService from "../services/DataService";

export default {
  name: "About",
  components: {
    CommonSection,
    TwoColumns,
    TabsComp
  },
  data() {
    return {
      person:{
        firstname: "",
        lastname: "",
        nationality: "",
        image: "",
        about: "",
      },
      educations: [],
      experiences: [],
      skills : [],
      show:{
        image:false,
        fullname:false
      }
    };
  },
  methods: {
    getData() {
      DataService.getDataPerson()
        .then((response) => {
          this.person.firstname = response.data.firstname; 
          this.person.lastname = response.data.lastname; 
          this.person.nationality = response.data.nationality; 
          this.person.image = response.data.image_person; 
          this.person.about = response.data.about; 
          this.educations = response.data.education;
          this.experiences = response.data.experience;
          this.skills = response.data.skills;
          console.log("INI RESPONSE ", response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

  },
  created(){
    setTimeout(()=>{
      this.show.image = true
      this.show.fullname = true
    },3000)
    this.getData();
  }
};
</script>

<style></style>
