export default {
  changeCity (state, city) {
    state.city = city
    localStorage.city = city
  },
  handleShowGallery (state, showGallery) {
    state.showGallery = showGallery
  }
}
