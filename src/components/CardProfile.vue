<template>
  <div>
    <div class="card">
      <div class="card-content">
        <figure class="image is-128x128 mx-auto mb-2">
          <img
            class="is-rounded has-background-info"
            v-if="person.image"
            v-bind:src="person.image"
          />
          <!-- skeleton loading -->
          <vue-skeleton-loader
            v-else
            class=""
            type="circle"
            :width="128"
            :height="128"
            animation="fade"
            :rounded="true"
          />
        </figure>

        <!-- v-bind:src="person.image" -->
        <!-- src="https://bulma.io/images/placeholders/128x128.png" -->

        <div class="media">
          <div class="media-content">
            <div v-if="person.firstname">
              <p class="title is-4" >
              {{ person.firstname }} {{ person.lastname }}
              </p>
              <p class="subtitle is-5 has-text-weight-semibold">
                Software Engineer
              </p>
            </div>
            
            <div class="skeleton" v-else>
              <vue-skeleton-loader
              class="mx-auto"
              type="rect"
              :width="200"
              :height="30"
              animation="fade"
              :rounded="true"
              />

              <vue-skeleton-loader
              class="mx-auto mt-2"
              type="rect"
              :width="200"
              :height="30"
              animation="fade"
              :rounded="true"
              />
            </div>
            
          </div>
        </div>

        <div class="content" v-if="age">
          I am {{ age }} years old, familiar with the programming language
          golang and react js and vue js for application development<br />
          <a href="#">@tonyKuy</a>
          <br />
          <p class="subtitle is-4">Yoroshiku</p>
        </div>

        <vue-skeleton-loader
          v-else
          class="mx-auto"
          type="rect"
          :width="370"
          :height="100"
          animation="fade"
          :rounded="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
// import 'bulma/css/bulma.css'
import DataService from "../services/DataService";

export default {
  name: "CardProfile",
  data: function () {
    return {
      person: {
        firstname: "",
        lastname: "",
        nationality: "",
        image: "",
      },
      age: 0,
    };
  },
  methods: {
    getAge() {
      setTimeout(()=>{
        let today = new Date();
        let birthDate = new Date("07/31/1996");
        let result = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          result--;
        }
        this.age = result;
      },3000)
      
    },

    getData() {
      DataService.getDataPerson()
        .then((response) => {
          this.person.firstname = response.data.firstname;
          this.person.lastname = response.data.lastname;
          this.person.image = response.data.image_person;
          console.log("INI RESPONSE ", response.data);
        })
        .catch((e) => {
          console.log(e);
        });

      // console.log(DataService)
    },
  },
  async created() {
    this.getData();
    this.getAge();
  },
  mounted() {},
};
</script>

<style>
/* .card-image{
    border: solid;
} */

/* .card {
  margin-top: 10%;
  height:300px ;
  background: linear-gradient(140deg, rgba(255,255,255,0.48783263305322133) 58%, rgba(255,255,255,1) 68%, rgba(69,199,252,1) 100%);
} */
</style>
