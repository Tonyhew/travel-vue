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
  data () {
    return {
      weekendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/9f/f585152825459.jpg_r_640x214_5d46e4cc.jpg',
        title: '大连圣亚海洋世界',
        desc: '浪漫大连首站，浪漫的海洋主题乐园'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/9f/f585152825459.jpg_r_640x214_5d46e4cc.jpg',
        title: '大连圣亚海洋世界',
        desc: '浪漫大连首站，浪漫的海洋主题乐园'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/9f/f585152825459.jpg_r_640x214_5d46e4cc.jpg',
        title: '大连圣亚海洋世界',
        desc: '浪漫大连首站，浪漫的海洋主题乐园'
      }]
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
