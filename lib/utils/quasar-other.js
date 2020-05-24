const other = [
  {
    name: 'LocalStorage.get.item',
    replacedWith: 'LocalStorage.getItem'
  },
  {
    name: 'SessionStorage.get.item',
    replacedWith: 'SessionStorage.getItem'
  },
  {
    name: '$q.localStorage.get.item',
    replacedWith: '$q.localStorage.getItem'
  },
  {
    name: '$q.sessionStorage.get.item',
    replacedWith: '$q.sessionStorage.getItem'
  }
]

module.exports = {
  other
}
