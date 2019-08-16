const components = [
  {
    name: 'QActionSheet',
    tag: 'q-action-sheet',
    replacedWith: 'BottomSheet'
  },
  {
    name: 'QAlert',
    tag: 'q-alert',
    replacedWith: 'QBanner'
  },
  {
    name: 'QAutocomplete',
    tag: 'q-autocomplete',
    replacedWith: 'QSelect'
  },
  {
    name: 'QBanner',
    tag: 'q-banner',
    legacy: {
      props: ['actions', 'avatar', 'color', 'detail', 'icon', 'message', 'text-color', 'type']
    }
  },
  {
    name: 'QBreadcrumbs',
    tag: 'q-breadcrumbs',
    legacy: {
      props: ['color']
    }
  },
  {
    name: 'QBreadcrumbsEl',
    tag: 'q-breadcrumbs-el',
    legacy: {
      props: ['color', 'event']
    }
  },
  {
    name: 'QBtn',
    tag: 'q-btn',
    legacy: {
      props: ['no-ripple', 'repeat-timeout', 'wait-for-ripple']
    }
  },
  {
    name: 'QBtnDropdown',
    tag: 'q-btn-dropdown',
    legacy: {
      props: ['dark-percentage', 'no-ripple', 'percentage', 'popover-anchor', 'popover-self', 'repeat-timeout', 'wait-for-ripple']
    }
  },
  {
    name: 'QBtnToggle',
    tag: 'q-btn-toggle',
    legacy: {
      props: ['no-ripple', 'wait-for-ripple']
    }
  },
  {
    name: 'QCard',
    tag: 'q-card',
    legacy: {
      props: ['color', 'inline', 'text-color']
    }
  },
  {
    name: 'QCardTitle',
    tag: 'q-card-title',
    replacedWith: 'QCardSection'
  },
  {
    name: 'QCardMain',
    tag: 'q-card-main',
    replacedWith: 'QCardSection'
  },
  {
    name: 'QCardMedia',
    tag: 'q-card-media',
    replacedWith: 'QCardSection'
  },
  {
    name: 'QCardSeparator',
    tag: 'q-card-separator',
    replacedWith: 'QSeparator'
  },
  {
    name: 'QCarousel',
    tag: 'q-carousel',
    legacy: {
      propChanges: {
        thumbnails: {
          previousType: 'Array',
          currentType: 'Boolean'
        }
      },
      methodChanges: {
        goToSlide: {
        replacedWith: 'goTo'
        }
      },
      events: ['slide', 'slide-trigger'],
      props: ['animation', 'color', 'easing', 'handle-arrow-keys', 'no-swipe', 'quick-nav', 'quick-nav-icon', 'quick-nav-position', 'swipe-easing', 'thumbnails-horizontal', 'thumbnails-icon'],
      slots: ['control-button', 'control-full', 'control-nav', 'control-progress', 'quick-nav']
    }
  },
  {
    name: 'QCheckbox',
    tag: 'q-checkbox',
    legacy: {
      props: ['checked-icon', 'indeterminate-icon', 'no-focus', 'readonly', 'unchecked-icon']
    }
  },
  {
    name: 'QChip',
    tag: 'q-chip',
    legacy: {
      props: ['avatar', 'closable', 'detail', 'floating', 'pointing', 'small', 'tag'],
      events: ['hide']
    }
  },
  {
    name: 'QChipsInput',
    tag: 'q-chips-input',
    replacedWith: 'QSelect'
  },
  {
    name: 'QCollapsible',
    tag: 'q-collapsible',
    replacedWith: 'QExpansionItem'
  },
  {
    name: 'QColor',
    tag: 'q-color',
    replacedWith: 'QColorPicker'
  },
  {
    name: 'QContextMenu',
    tag: 'q-context-menu',
    replacedWith: 'QMenu'
  },
  {
    name: 'QDatePicker',
    tag: 'q-date-picker',
    replacedWith: 'QDate'
  },
  {
    name: 'QDatetime',
    tag: 'q-datetime',
    replacedWith: ['QDate', 'QTime']
  },
  {
    name: 'QDialog',
    tag: 'q-dialog',
    legacy: {
      propChanges: {
        'prevent-close': {
          replacedWith: 'prevent-close'
        }
      },
      events: ['ok', 'cancel', 'hide', 'show'],
      props: ['cancel', 'color', 'ok', 'message', 'options', 'prevent-close', 'prompt', 'stack-buttons', 'title'],
      slots: ['body', 'buttons', 'message', 'title']
    }
  },
  {
    name: 'QDrawer',
    tag: 'q-drawer',
    legacy: {
      props: ['no-hide-on-route-change'],
      methods: ['on-layout']
    }
  },
  {
    name: 'QFab',
    tag: 'q-fab',
    legacy: {
      events: ['hide', 'show']
    }
  },
  {
    name: 'QField',
    tag: 'q-field',
    // needs special handling?
  },
  {
    name: 'QIcon',
    tag: 'q-icon'
  },
  {
    name: 'QInfiniteScroll',
    tag: 'q-infinit-scroll',
    legacy: {
      props: ['handler', 'inline'],
      methods: ['loadMore'],
      methodChanges: {
        loadMore: {
          replacedWith: 'trigger'
        }
      },
      slots: ['message'],
      slotChanges: {
        message: {
          replacedWith: 'loading'
        }
      }
    }
  },
  {
    name: 'QInnerLoading',
    tag: 'q-inner-loading',
    legacy: {
      props: ['visible']
    }
  },
  {
    name: 'QInput',
    tag: 'q-input',
    legacy: {
      props: ['after', 'align', 'before', 'clear-value', 'decimals', 'float-label', 'hide-underline', 'initial-show-password', 'inverted', 'inverted-light', 'lower-case', 'max-height', 'no-parent-field', 'no-pass-toggle', 'numeric-keyboard-toggle', 'step', 'upper-case', 'warning'],
      methods: ['clear', 'select', 'togglePass']
    }
  },
  {
    name: 'QItem',
    tag: 'q-item',
    legacy: {
      props: ['event', 'highlight', 'inset-separator', 'link', 'multiline', 'separator', 'sparse']
    }
  },
  {
    name: 'QItemMain',
    tag: 'q-item-main',
    replacedWith: 'QItemLabel'
  },
  {
    name: 'QItemSeparator',
    tag: 'q-item-separator',
    replacedWith: 'QSeparator'
  },
  {
    name: 'QItemSide',
    tag: 'q-item-side',
    replacedWith: 'QItemSection'
  },
  {
    name: 'QJumbotron',
    tag: 'q-jumbotron',
    replacedWith: 'QCard'
  },
  {
    name: 'QKnob',
    tag: 'q-knob',
    legacy: {
      props: ['decimals', 'line-width']
    }
  },
  {
    name: 'QLayout',
    tag: 'q-layout'
    // resize() => resize(arg)
    // scroll() => scroll(arg)
    // scroll-height() => scroll-height(arg)
  },
  {
    name: 'QLayoutDrawer',
    tag: 'q-layout-drawer',
    replacedWith: 'QDrawer'
  },
  {
    name: 'QLayoutHeader',
    tag: 'q-layout-header',
    replacedWith: 'QHeader'
  },
  {
    name: 'QLayoutFooter',
    tag: 'q-layout-footer',
    replacedWith: 'QFooter'
  },
  {
    name: 'QLinearProgress',
    tag: 'q-linear-progress',
    legacy: {
      props: ['animate', 'height', 'keep-on-percentage']
    }
  },
  {
    name: 'QList',
    tag: 'q-list',
    legacy: {
      props: ['highlight', 'inset-separator', 'link', 'no-border', 'sparse', 'striped', 'striped-odd']
    }
  },
  {
    name: 'QListHeader',
    tag: 'q-list-header',
    replacedWith: 'QItemLabel'
  },
  {
    name: 'QMenu',
    tag: 'q-menu',
    legacy: {
      props: ['anchor-click', 'disabled', 'keep-on-screen']
    }
  },
  {
    name: 'QModal',
    tag: 'q-modal',
    replacedWith: 'QMenu'
  },
  {
    name: 'QModalLayout',
    tag: 'q-modal-layout',
    replacedWith: 'QMenu',
    message: 'QModalLayout: use QDialog with a QLayout (and its `container` prop)'
  },
  {
    name: 'QOptionGroup',
    tag: 'q-option-group',
    legacy: {
      props: ['no-parent-group', 'readonly']
    }
  },
  {
    name: 'QPagination',
    tag: 'q-pagination'
  },
  {
    name: 'QParallax',
    tag: 'q-parallax',
    legacy: {
      slots: ['loading']
    }
  },
  {
    name: 'QPopover',
    tag: 'q-popover',
    replacedWith: 'QMenu'
  },
  {
    name: 'QPopupEdit',
    tag: 'q-popup-edit',
    legacy: {
      props: ['keep-on-screen', 'validate']
    }
  },
  {
    name: 'QProgress',
    tag: 'q-progress',
    replacedWith: 'QLinearProgress'
  },
  {
    name: 'QPullToRefresh',
    tag: 'q-pull-to-refresh',
    legacy: {
      props: ['handler', 'distance', 'inline', 'pull-message', 'release-message', 'refresh-icon', 'refresh-message'],
      propChanges: {
        handler: {
          replacedWith: 'refresh'
        }
      },
    }
  },
  {
    name: 'QRadio',
    tag: 'q-radio',
    legacy: {
      props: ['checked-icon', 'no-focus', 'readonly', 'unchecked-icon']
    }
  },
  {
    name: 'QRange',
    tag: 'q-range',
    legacy: {
      props: ['decimals', 'error', 'fill-handle-always', 'square', 'warning']
    }
  },
  {
    name: 'QResizeObservable',
    tag: 'q-resize-observable',
    replacedWith: 'QResizeObserver'
  },
  {
    name: 'QRouteTab',
    tag: 'q-route-tab',
    legacy: {
      props: ['color', 'count', 'hidden', 'hide'],
      methods: ['select']
    }
  },
  {
    name: 'QScrollObservable',
    tag: 'q-scroll-observable',
    replacedWith: 'QScrollObserver'
  },
  {
    name: 'QSearch',
    tag: 'q-search',
    replacedWith: 'QInput'
  },
  {
    name: 'QSelect',
    tag: 'q-select',
    legacy: {
      props: ['after', 'before', 'chips', 'chip-bg-color', 'chips-color', 'clear-value', 'filter', 'filter-placeholder', 'float-label', 'hide-underline', 'inverted', 'inverted-light', 'no-parent-field', 'popup-cover', 'popup-max-height', 'radio', 'separator', 'toggle', 'warning']
    }
  },
  {
    name: 'QSlider',
    tag: 'q-slider',
    legacy: {
      props: ['decimals', 'error', 'fill-handle-always', 'square', 'warning']
    }
  },
  {
    name: 'QSpinnerMat',
    tag: 'q-spinner-mat',
    replacedWith: 'QSpinner'
  },
  {
    name: 'QStep',
    tag: 'q-step',
    legacy: {
      props: ['default', 'order', 'subtitle']
    }
  },
  {
    name: 'QStepper',
    tag: 'q-stepper',
    legacy: {
      props: ['color', 'contractable', 'no-header-navigation']
    }
  },
  {
    name: 'QTab',
    tag: 'q-tab',
    legacy: {
      methods: ['select'],
      props: ['color', 'count', 'default', 'hidden', 'hide'],
      slots: ['title']
    }
  },
  {
    name: 'QTable',
    tag: 'q-table',
    legacy: {
      props: ['selected-rows-label', 'pagination-label'],
      events: ['fullscreen', 'request']
    }
  },
  {
    name: 'QTableColumns',
    tag: 'q-table-columns',
    replacedWith: 'QSelect',
    message: 'QTableColumns: use a QSelect with columns as options (see docs for example)'
  },
  {
    name: 'QTabPane',
    tag: 'q-tab-pane',
    replacedWith: 'QTabPanel',
    message: 'QTabPane: use QTabPanels and QTabPanel (outside of a QTabs)'
  },
  {
    name: 'QTabs',
    tag: 'q-tabs',
    legacy: {
      methods: ['go', 'next', 'previous', 'selectTab'],
      events: ['select'],
      props: ['animated', 'color', 'glossy', 'inverted', 'panes-container-class', 'position', 'swipeable', 'text-color', 'two-line', 'underline-color', 'no-pane-border'],
      slots: ['title'],
      propChanges: {
        'underline-color': {
          replacedWith: 'indicator-color'
        }
      }
    }
  },
  {
    name: 'QTimeline',
    tag: 'q-timeline',
    legacy: {
      props: ['no-hover', 'responsive']
    }
  },
  {
    name: 'QTimelineEntry',
    tag: 'q-timeline-entry',
    legacy: {
      props: ['subtitle', 'title']
    }
  },
  {
    name: 'QTimePicker',
    tag: 'q-time-picker',
    replacedWith: 'QTime'
  },
  {
    name: 'QToggle',
    tag: 'q-toggle',
    legacy: {
      props: ['no-focus', 'readonly']
    }
  },
  {
    name: 'QToolbar',
    tag: 'q-toolbar',
    legacy: {
      props: ['color', 'glossy', 'inverted', 'shrink', 'text-color'],
      slots: ['subtitle']
    }
  },
  {
    name: 'QTooltip',
    tag: 'q-tooltip',
    legacy: {
      props: ['disabled']
    }
  },
  {
    name: 'QTree',
    tag: 'q-tree'
  },
  {
    name: 'QUploader',
    tag: 'q-uploader',
    legacy: {
      props: ['additional-fields', 'after', 'align', 'auto-expand', 'before', 'clear-value', 'clearable', 'error', 'expand-style', 'extensions', 'float-label', 'hide-underline', 'hide-upload-button', 'hide-upload-progress', 'inverted', 'inverted-light', 'name', 'no-content-type', 'no-parent-field', 'placeholder', 'prefix', 'stack-label', 'suffix', 'upload-factory', 'url-factory', 'warning'],
      propChanges: {
        'hide-upload-button': {
          replacedWith: 'hide-upload-btn'
        }
      },
      events: ['fail', 'remove:abort', 'remove:cancel', 'remove:done'],
      eventChanges: {
        fail: {
          replacedWith: 'failed'
        }
      },
      // @uploaded(file, xhr)	=> @uploaded({ files, xhr })
      methods: ['add', 'pick'],
      methodChanges: {
        add: {
          replacedWith: 'addFiles'
        },
        pick: {
          replacedWith: 'pickFiles'
        }
      }
    }
  },
  {
    name: 'QWindowResizeObservable',
    tag: 'q-window-resize-observable',
    replacedWith: '',
    message: 'QWindowResizeObservable: directly use `this.$q.screen.width` and `this.$q.screen.height` (or create a watcher on them)'
  },
]

module.exports = {
  components
}
