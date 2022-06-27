let defaultCity = '北京'
let defaultShowGallery = false

try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity,
  showGallery: defaultShowGallery
}
