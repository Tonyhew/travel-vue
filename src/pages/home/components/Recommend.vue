<template>
  <div class="wrapper">
    <div class="recommend-title">热销推荐</div>

    <div class="recommend-list">

      <div
        class="recommend-item border-bottom"
        v-for="recommend of recommendList"
        :key="recommend.id"
        @click="handleRouterRedirct(recommend.id)"
      >
        <div class="item-img">
          <img :src="recommend.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ recommend.title }}</p>
          <p class="item-desc">{{ recommend.desc }}</p>
          <button class="item-btn">查看详情</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
  },
  methods: {
    handleRouterRedirct (id) {
      this.$router.push('/detail/' + id)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.recommend-title
  margin-top 0.2rem
  line-height 0.8rem
  background #eee
  text-indent 0.2rem
.recommend-list
  .recommend-item
    height 1.9rem
    overflow hidden
    display flex
    .item-img
      img
        width 1.7rem
        height 1.7rem
        padding 0.1rem
    .item-info
      padding 0.1rem
      flex 1
      .item-title
        font-size 0.32rem
        line-height 0.54rem
        ellipsis()
      .item-desc
        line-height 0.44rem
        color #ccc
        ellipsis()
      .item-btn
        line-height 0.44rem
        margin-top 0.16rem
        background #ff9300
        padding 0 0.2rem
        border-radius 0.06rem
        color #fff
</style>
