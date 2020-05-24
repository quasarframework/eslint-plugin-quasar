const directives = [
  {
    name: 'BackToTop',
    tag: 'back-to-top',
    replacedWith: '',
    message: 'BackToTop was dropped in favor of QPageScroller component'
  },
  {
    name: 'ClosePopup',
    tag: 'close-popup',
    version: '1.0.0'
  },
  {
    name: 'CloseOverlay',
    tag: 'close-overlay',
    replacedWith: 'close-popup'
  },
  {
    name: 'GoBack',
    tag: 'go-back',
    version: '1.0.0'
  },
  {
    name: 'Intersection',
    tag: 'intersection',
    version: '1.7.0' // TODO: need correct version
  },
  {
    name: 'Mutation',
    tag: 'mutation',
    version: '1.7.0' // TODO: need correct version
  },
  {
    name: 'Ripple',
    tag: 'ripple',
    version: '1.0.0'
  },
  {
    name: 'Scroll',
    tag: 'scroll',
    version: '1.0.0'
  },
  {
    name: 'ScrollFire',
    tag: 'scroll-fire',
    version: '1.0.0'
  },
  {
    name: 'TouchHold',
    tag: 'touch-hold',
    version: '1.0.0'
  },
  {
    name: 'TouchPan',
    tag: 'touch-pan',
    version: '1.0.0'
  },
  {
    name: 'TouchRepeat',
    tag: 'touch-repeat',
    version: '1.0.0'
  },
  {
    name: 'TouchSwipe',
    tag: 'touch-swipe',
    version: '1.0.0'
  }
]

module.exports = {
  directives
}
