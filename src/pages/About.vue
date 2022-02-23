<template>
  <div class="container">
    <!-- <h1>This is {{ msg2 }}</h1> -->
    <figure class="image is-128x128 mx-auto my-2">
      <img
        class="is-rounded has-background-info"
        :src="person.image"
      />
    </figure>
    <h3 class="title is-4">{{person.firstname}} {{person.lastname}}</h3>

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
      skills : []
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
    this.getData();
  }
};
</script>

<style></style>
