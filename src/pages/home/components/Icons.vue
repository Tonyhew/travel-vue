<template>
  <div class="wrapper">
    <swiper :options="swiperOptions">
      <swiper-slide
        v-for="(icon, index) of pages"
        :key="index"
      >
        <div
          class="icons"
          v-for="item of icon"
          :key="item.id"
        >
          <div class="icon-img">
            <img
              :src="item.imgUrl"
              :alt="item.desc"
            />
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
      <div
        class="swiper-pagination icon-pagination"
        slot="pagination"
      ></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: Array
  },
  data () {
    return {
      swiperOptions: {
        loop: false,
        pagination: '.icon-pagination'
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.wrapper /deep/ .swiper-container
  overflow hidden
  height 0
  padding-bottom 50%
.wrapper /deep/ .swiper-slide
  display flex
  flex-wrap wrap
.icon-pagination
  bottom 0
.wrapper
  margin-top 0.1rem
  .icons
    display flex
    overflow hidden
    flex-direction column
    flex-wrap wrap
    width 25%
    .icon-img
      margin 0 auto
      box-sizing border-box
      padding 0.1rem
      width 70%
      img
        display block
        margin 0 auto
        width 100%
    .icon-desc
      width 100%
      height 0.44rem
      line-height 0.44rem
      text-align center
      color $darkTextColor
      ellipsis()
</style>
