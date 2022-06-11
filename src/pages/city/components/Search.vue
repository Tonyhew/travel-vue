<template>
  <div class="search">
    <div>
      <input
        v-model="keywords"
        class="search-input"
        type="text"
        placeholder="输入城市名或拼音"
      />
    </div>

    <div
      class="search-content"
      ref="search"
      v-show="keywords"
    >
      <div>
        <p
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handleChangeCity(item.name)"
        >{{ item.name }}</p>
        <p
          class="search-item border-bottom"
          v-show="hasNoData"
        >没有查找到数据</p>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'

export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keywords: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search, {
      click: true
    })
  },
  methods: {
    handleChangeCity (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    keywords () {
      if (this.timer) {
        clearTimeout(this.timer)
      }

      if (!this.keywords) {
        this.list = []
        return
      }

      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keywords) > -1 ||
              value.name.indexOf(this.keywords) > -1
            ) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
  height 0.72rem
  background $bgColor
  padding 0 0.1rem
  .search-input
    box-sizing border-box
    padding 0 0.1rem
    width 100%
    height 0.62rem
    line-height 0.62rem
    text-align center
    border-radius 0.06rem
    color #666
  .search-content
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    background #eee
    z-index 1
    .search-item
      line-height 0.62rem
      padding-left 0.2rem
      background #fff
      color #666
</style>
