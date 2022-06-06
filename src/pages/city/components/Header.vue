<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont back-icon">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    position: relative
    height: $headerHeight
    line-height: $headerHeight
    overflow: hidden
    background: $bgColor
    text-align: center
    color: #fff
    font-size: .32rem
    .back-icon
      position: absolute
      width: .64rem
      left: 0
      top: 0
      font-size: .4rem
      color: #fff
</style>
