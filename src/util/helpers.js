export default {
  prefix: 'bx--',
  str2kebab (str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
  },
  str2Element (str) {
    return str.replace(/([a-z])([A-Z])/g, '$1__$2').toLowerCase()
  },
  getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
}
