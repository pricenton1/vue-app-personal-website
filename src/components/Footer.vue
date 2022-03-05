<template>
  <section class="section has-background-dark p-1">
    <div class="content has-text-centered">
      <!-- <ColumnContent /> -->
      <MedSos />
      <div class="box mt-6">
        <p>&copy; 2022 <a href="#">@tonyKuy</a></p>
      </div>
    </div>
  </section>
</template>

<script>
import MedSos from "./MedSos.vue";
// import ColumnContent from './ColumnContent.vue'

export default {
  name: "Footer",
  components: {
    MedSos,
    // ColumnContent,
  },
  
};
</script>

<style></style>
