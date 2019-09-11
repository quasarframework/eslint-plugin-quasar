const directives = [
  {
    name: 'BackToTop',
    tag: 'back-to-top',
    replacedWith: '',
    message: 'BackToTop was dropped in favor of QPageScroller component'
  },
  {
    name: 'ClosePopup',
    tag: 'close-popup'
  },
  {
    name: 'CloseOverlay',
    tag: 'close-overlay',
    replacedWith: 'close-popup'
  },
  {
    name: 'GoBack',
    tag: 'go-back'
  },
  {
    name: 'Ripple',
    tag: 'ripple'
  },
  {
    name: 'Scroll',
    tag: 'scroll'
  },
  {
    name: 'ScrollFire',
    tag: 'scroll-fire'
  },
  {
    name: 'TouchHold',
    tag: 'touch-hold'
  },
  {
    name: 'TouchPan',
    tag: 'touch-pan'
  },
  {
    name: 'TouchRepeat',
    tag: 'touch-repeat'
  },
  {
    name: 'TouchSwipe',
    tag: 'touch-swipe'
  }
]

module.exports = {
  directives
}
