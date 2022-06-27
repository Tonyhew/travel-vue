<template>
  <div>
    <router-link
      to="/"
      class="header-abs"
      v-show="isAbs"
    >
      <div class="iconfont header-backIcon">&#xe624;</div>
    </router-link>

    <div
      class="header-fixed"
      v-show="!isAbs"
      :style="opacityStyles"
    >
      景点详情
      <router-link to="/">
        <div class="iconfont back-icon">&#xe624;</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      isAbs: true, // 导航显示
      opacityStyles: {
        opacity: 0
      }
    }
  },
  methods: {
    /**
     * @describe 不同导航显示控制,当上划至 40px 时,显示另一种 header 组件
     */
    handleShowAbs () {
      let top = document.documentElement.scrollTop || document.scrollTop
      if (top > 40) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyles = {
          opacity
        }
        this.isAbs = false
      } else {
        this.isAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleShowAbs)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleShowAbs)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header-abs
  position absolute
  top 0.2rem
  left 0.2rem
  width 0.8rem
  height 0.8rem
  line-height 0.8rem
  text-align center
  border-radius 0.4rem
  background rgba(0, 0, 0, 0.8)
  .header-backIcon
    color #fff
    font-size 0.4rem
.header-fixed
  position fixed
  top 0
  left 0
  right 0
  height $headerHeight
  line-height $headerHeight
  background $bgColor
  text-align center
  color #fff
  font-size 0.32rem
  .back-icon
    position absolute
    width 0.64rem
    left 0
    top 0
    font-size 0.4rem
    color #fff
</style>
