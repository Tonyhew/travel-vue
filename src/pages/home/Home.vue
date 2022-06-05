<template>
  <div>
    <home-header></home-header>
    <home-banner></home-banner>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeBanner from './components/Banner'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeBanner,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
}
</script>

<style lang="stylus" scoped></style>
