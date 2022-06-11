<template>
  <div class="swiper">
    <swiper
      :options="swiperOptions"
      v-if="showBanner"
    >
      <swiper-slide
        v-for="item of banner"
        :key="item.id"
      >
        <img
          class="swiper-img"
          :src="item.imgUrl"
        />
      </swiper-slide>
      <div
        class="swiper-pagination"
        slot="pagination"
      ></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    banner: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showBanner () {
      return this.banner.length
    }
  }
}
</script>

<style lang="stylus" scoped>
.swiper /deep/ .swiper-pagination-bullet-active
  background #fff
.swiper
  width 100%
  overflow hidden
  height 0
  padding-bottom 31.25%
  background #eee
  .swiper-img
    width 100%
</style>
