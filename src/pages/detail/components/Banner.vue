<template>
  <div>

    <div
      class="banner"
      @click="handleOpenGallery"
    >
      <img
        class="banner-img"
        src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg"
      />
      <div class="banner-info">
        <div class="banner-title">
          大连圣亚海洋世界(AAAA景区)
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe860;</span>
          39
        </div>
      </div>
    </div>

    <common-gallery
      :imgs="imgs"
      @closeGallery="handleCloseGallery(false)"
      v-show="this.showGallery"
    ></common-gallery>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'DetailBanner',
  components: {
    CommonGallery
  },
  data () {
    return {
      imgs: [
        'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg',
        'http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png'
      ]
    }
  },
  computed: {
    ...mapState({
      showGallery: 'showGallery'
    })
  },
  methods: {
    handleCloseGallery (isShow) {
      this.handleShowGallery(isShow)
    },
    handleOpenGallery (isShow) {
      this.handleShowGallery(isShow)
    },
    ...mapMutations(['handleShowGallery'])
  }
}
</script>

<style lang="stylus" scoped>
.banner
  position relative
  overflow hidden
  height 0
  padding-bottom 55%
  .banner-img
    width 100%
  .banner-info
    display flex
    position absolute
    line-height 0.6rem
    left 0
    right 0
    bottom 0
    color #fff
    background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
    .banner-title
      flex 1
      font-size 0.32rem
      padding 0 0.2rem
    .banner-number
      height 0.32rem
      line-height 0.32rem
      margin 0.14rem 0.2rem
      padding 0 0.4rem
      font-size 0.24rem
      border-radius 0.2rem
      background rgba(0, 0, 0, 0.8)
      .banner-icon
        font-size 0.24rem
</style>
