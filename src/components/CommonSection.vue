<template>
  <section class="section">
    <h1 class="title is-4">Know me more ?</h1>
    <h2 class="subtitle">
      {{about}}
    </h2>
  </section>
</template>

<script>
export default {
  name: "CommonSection",
  props:{
    about:String
  }
};
</script>

<style></style>
