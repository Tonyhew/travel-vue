<template>
  <div class="wrapper">
    <div class="recommend-title">热销推荐</div>

    <div class="recommend-list">
      <div class="recommend-item border-bottom" v-for="recommend of recommendList" :key="recommend.id">
        <div class="item-img">
          <img
            :src="recommend.imgUrl"
            alt=""
          />
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
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl:
              'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_140x140_73fda71d.jpg',
          title: '大连圣亚海洋世界',
          desc: '浪漫大连首站，浪漫的海洋主题乐园'
        },
        {
          id: '0002',
          imgUrl:
              'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_140x140_73fda71d.jpg',
          title: '大连圣亚海洋世界',
          desc: '浪漫大连首站，浪漫的海洋主题乐园'
        },
        {
          id: '0003',
          imgUrl:
              'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_140x140_73fda71d.jpg',
          title: '大连圣亚海洋世界',
          desc: '浪漫大连首站，浪漫的海洋主题乐园'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .recommend-title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .recommend-list
    .recommend-item
      height: 1.9rem
      overflow: hidden
      display: flex
      .item-img
        img
          width: 1.7rem
          height: 1.7rem
          padding: .1rem
      .item-info
        padding: .1rem
        flex: 1
        .item-title
          font-size: .32rem
          line-height: .54rem
          ellipsis()
        .item-desc
          line-height: .44rem
          color: #ccc
          ellipsis()
        .item-btn
          line-height: .44rem
          margin-top: .16rem
          background: #ff9300
          padding: 0 .2rem
          border-radius: .06rem
          color: #fff
</style>
