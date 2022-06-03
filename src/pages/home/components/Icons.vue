<template>
  <div class="wrapper">
    <swiper>
      <swiper-slide v-for="(icon, index) of pages" :key="index">
        <div class="icons" v-for="item of icon" :key="item.id">
          <div class="icon-img">
            <img :src="item.imgUrl" :alt="item.desc" />
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
          desc: '景点门票'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png',
          desc: '滑雪季'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png',
          desc: '泡温泉'
        },
        {
          id: '0004',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png',
          desc: '动植园'
        },
        {
          id: '0005',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png',
          desc: '滑雪季'
        },
        {
          id: '0006',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png',
          desc: '泡温泉'
        },
        {
          id: '0007',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png',
          desc: '动植园'
        },
        {
          id: '0008',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png',
          desc: '一日游'
        },
        {
          id: '0009',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png',
          desc: '一日游'
        }
      ]
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
    height: 0
    padding-bottom: 50%
  .wrapper /deep/ .swiper-slide
    display: flex
    flex-wrap: wrap

  .wrapper
    .icons
      display: flex
      overflow: hidden
      flex-direction: column
      flex-wrap: wrap
      width: 25%
      .icon-img
        margin: 0 auto
        box-sizing: border-box
        padding: .1rem
        width: 70%
        img
          display: block
          margin: 0 auto
          width: 100%
      .icon-desc
        width: 100%
        height: .44rem
        line-height: .44rem
        text-align: center
        color: $darkTextColor
        ellipsis()
</style>
