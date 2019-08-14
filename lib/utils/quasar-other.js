const other = [
  {
    name: 'LocalStorage.get.item',
    replaceWith: 'LocalStorage.getItem'
  },
  {
    name: 'SessionStorage.get.item',
    replaceWith: 'SessionStorage.getItem'
  },
  {
    name: 'this.$q.localStorage.get.item',
    replaceWith: 'this.$q.localStorage.getItem'
  },
  {
    name: 'this.$q.sessionStorage.get.item',
    replaceWith: 'this.$q.sessionStorage.getItem'
  }
]

module.exports = {
  other
}
