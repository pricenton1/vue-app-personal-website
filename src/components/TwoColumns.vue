<template>
  <div class="columns">
    <div class="column is-narrow-mobile">
      <div class="box has-background-info-light">
        <p class="title is-4">Education</p>
        <div
          class="box has-background-dark"
          v-for="(education, index) in educations"
          :key="index"
        >
          <article class="media">
            <div class="media-left">
              <span class="icon is-medium mx-4 has-text-white"
                ><font-awesome-icon :icon="['fa', 'graduation-cap']" size="2x"
              /></span>
              <h5 class="subtitle is-5 mt-2 has-text-white">
                {{ education.date }}
              </h5>
            </div>

            <div class="media-content">
              <div class="content">
                <h5 class="title is-5 has-text-primary-light">
                  {{ education.type }} {{ education.name }}
                </h5>
                <h6 class="title is-6 has-text-primary-light">
                  {{ education.major }}
                </h6>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
    <div class="column is-narrow-mobile">
      <div class="box has-background-info-light">
        <p class="title is-4">Experience</p>
        <div
          class="box has-background-dark"
          v-for="(experience, index) in experiences"
          :key="index"
        >
          <article class="media">
            <div class="media-left">
             <span class="icon is-medium mx-4 has-text-white"
                ><font-awesome-icon :icon="['fa', 'briefcase']" size="2x"
              /></span>
              <h5 class="subtitle is-5 mt-2 has-text-white">
                {{ experience.date }}
              </h5>
            </div>

            <div class="media-content">
              <div class="content">
                <h5 class="title is-5 has-text-primary-light">
                  {{experience.title}}
                </h5>
                <h6 class="title is-6 has-text-primary-light">
                  {{ experience.position }}
                </h6>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TwoColumns",
  props: {
    educations: Array,
    experiences: Array,
  },
};
</script>

<style scoped></style>
