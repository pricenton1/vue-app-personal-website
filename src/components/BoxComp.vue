<template>
  <div>
    <vue-skeleton-loader
      v-if="show == false"
      class="mx-auto"
      type="rect"
      :width="300"
      :height="200"
      animation="fade"
      :rounded="true"
    />

    <div class="box my-4" v-else>
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img :src="item.icon" alt="Image" />
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <h6 class="title is-6">{{ item.title }}</h6>
            <p class="has-text-left">
              <!-- {{ item.desc }}... -->
              {{limitText}} ...
            </p>
          </div>
          <nav class="level is-mobile">
            <div class="level-left">
              <a :href="item.link">
                <span class="icon"
                  ><font-awesome-icon :icon="['fab', 'github']"
                /></span>
                <span>Source Code</span>
              </a>
            </div>
          </nav>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "BoxComp",
  props: {
    item: Object,
  },
  data() {
    return {
      show: false,
      limitText:""
    };
  },
  methods:{
    limitDesc(){
      this.limitText = this.item.desc.substring(0,70)
    }
  },  
  created() {
    setTimeout(() => {
      this.limitDesc();
      this.show = true;
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 300px;
  height: 200px;
}
</style>
