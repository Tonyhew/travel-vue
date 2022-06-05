<template>
  <div class="wrapper">
    <div class="recommend-title">周末去哪儿</div>

    <div class="recommend-list">
      <div class="recommend-item border-bottom" v-for="weekend of weekendList" :key="weekend.id">
        <div class="item-img">
          <img
            :src="weekend.imgUrl"
            alt=""
          />
        </div>
        <div class="item-info">
          <p class="item-title">{{ weekend.title }}</p>
          <p class="item-desc">{{ weekend.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .recommend-title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .recommend-item
    overflow: hidden
    .item-img
      overflow: hidden
      height: 0
      padding-bottom: 33.9%
      img
        width: 100%
    .item-info
      padding: .1rem
      .item-title
        font-size: .32rem
        line-height: .54rem
        ellipsis()
      .item-desc
        line-height: .44rem
        color: #ccc
        ellipsis()
</style>
