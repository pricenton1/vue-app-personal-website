/* eslint-disable no-useless-escape */
<template>
  <form
    class="box"
    name="submit-to-google-sheet"
    v-on:submit.prevent="submitForm"
  >
    <div class="field">
      <label class="label has-text-left">Name</label>
      <div class="control">
        <input
          class="input is-info"
          type="text"
          name="nama"
          v-model="nama"
          placeholder="Write Your Name Here..."
        />
      </div>
      <div class="is-danger mt-2" v-if="error.nama">
        <p class="has-text-danger">{{ error.nama }}</p>
      </div>
    </div>

    <div class="field">
      <label class="label has-text-left">Email</label>
      <div class="control">
        <input
          class="input is-info"
          type="email"
          name="email"
          v-model="email"
          placeholder="Example@gmail.com"
        />
      </div>
      <div class="is-danger mt-2" v-if="error.email">
        <p class="has-text-danger">{{ error.email }}</p>
      </div>
    </div>

    <div class="field">
      <label class="label has-text-left">Message</label>
      <div class="control">
        <textarea
          class="textarea is-info"
          name="message"
          id="message"
          v-model="message"
          placeholder="Comment Here..."
        ></textarea>
      </div>
      <div class="error mt-2" v-if="error.message">
        <p class="has-text-danger">{{ error.message }}</p>
      </div>
    </div>
    <div class="field is-grouped">
      <div class="control">
        <button
          class="button is-info is-outlined is-rounded"
          v-bind:class="{ 'is-loading': loading }"
          type="submit"
        >
          Contact Me
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import Swal from "sweetalert2";

export default {
  name: "FormComp",
  data() {
    return {
      nama: "",
      email: "",
      message: "",
      error: {
        nama: "",
        email: "",
        message: "",
      },
      loading: false,
    };
  },
  methods: {
    submitForm() {
      this.error.nama = "";
      this.error.email = "";
      this.error.message = "";
      
      // validation if input empty
      if (this.nama === "") {
        this.error.nama = "Field name empty !!";
      }
      
      if (this.email === "") {
        this.error.email = "Field email empty or invalid !!";
      }
      if (this.message === "") {
        this.error.message = "Field message empty !!";
      }

      // url to submit google sheet
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbzRmLvpN2IQ7dZOug8TFIpE-GpVoCkK7yQAb8c09wDUFIOtJkdn8Y_muVFrJCe-mOxF/exec";
      const form = document.forms["submit-to-google-sheet"];

      // eslint-disable-next-line no-useless-escape
      if (this.nama && this.email && this.message) {
        this.loading = true;
        fetch(scriptURL, { method: "POST", body: new FormData(form) })
          .then((response) => {
            console.log("Success", response);

            // alert if succcess 
            const Toast = Swal.mixin({
              toast: true,
              position: "top",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
              },
            });

            Toast.fire({
              icon: "success",
              title: "Your message has been sent",
            });
            // reset form and button
            this.loading = false;
            this.nama = "";
            this.email = "";
            this.message = "";
          })
          .catch((error) => console.log("Error", error.message));
        // form.reset();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 700px;
}
</style>
