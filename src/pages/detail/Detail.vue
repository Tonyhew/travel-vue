<template>
  <div>
    <detail-banner></detail-banner>
    <div v-show="!this.showGallery">
      <detail-header></detail-header>
      <div class="content"></div>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import { mapState } from 'vuex'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader
  },
  computed: {
    ...mapState({
      showGallery: 'showGallery'
    })
  }
}
</script>

<style lang="stylus" scoped>
.content
  height 50rem
</style>
