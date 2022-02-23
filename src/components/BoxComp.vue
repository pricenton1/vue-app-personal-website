<template>
  <div class="box my-4">
    <article class="media">
      <div class="media-left">
        <figure class="image is-64x64">
          <img :src="item.icon" alt="Image" />
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <h6 class="title is-6">{{ item.title }}</h6>
          <p class="has-text-justified">
            {{ item.desc }}
          </p>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            <a :href="item.link">
              <span class="icon"
                ><font-awesome-icon :icon="['fab', 'github']" /></span>
              <span>Source Code</span>
            </a>
          </div>
        </nav>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "BoxComp",
  props: {
    item: Object,
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 300px;
}
</style>
