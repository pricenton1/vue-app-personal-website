<template>
  <div>
    <div class="box my-2 has-background-light">
      <p class="title is-5">Familiar with</p>
      <div class="tabs is-toggle is-centered">
        <ul>
          <li class="has-background-white" v-for="(skill, index) in skills" :key="index">
            <a>
                <figure class="image is-64x64">
                  <img
                    :src="skill.icon"
                    alt="Image"
                  /></figure>
              <!-- <span>{{ skill.name }}</span> -->
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
};
</script>

<style></style>
