const components = [
  {
    name: 'QActionSheet',
    tag: 'q-action-sheet',
    replacedWith: 'BottomSheet'
  },
  {
    name: 'QAjaxBar',
    tag: 'q-ajax-bar',
    version: '1.0.0',
    path: 'ajax-bar'
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
    name: 'QAvatar',
    tag: 'q-avatar',
    version: '1.0.0'
  },
  {
    name: 'QBadge',
    tag: 'q-badge',
    version: '1.0.0'
  },
  {
    name: 'QBanner',
    tag: 'q-banner',
    legacy: {
      props: ['actions', 'avatar', 'color', 'detail', 'icon', 'message', 'text-color', 'type']
    },
    version: '1.0.0'
  },
  {
    name: 'QBar',
    tag: 'q-bar',
    version: '1.0.0'
  },
  {
    name: 'QBreadcrumbs',
    tag: 'q-breadcrumbs',
    legacy: {
      props: ['color']
    },
    version: '1.0.0'
  },
  {
    name: 'QBreadcrumbsEl',
    tag: 'q-breadcrumbs-el',
    legacy: {
      props: ['color', 'event']
    },
    version: '1.0.0'
  },
  {
    name: 'QBtn',
    tag: 'q-btn',
    legacy: {
      props: ['no-ripple', 'repeat-timeout', 'wait-for-ripple']
    },
    version: '1.0.0'
  },
  {
    name: 'QBtnDropdown',
    tag: 'q-btn-dropdown',
    legacy: {
      props: ['dark-percentage', 'no-ripple', 'percentage', 'popover-anchor', 'popover-self', 'repeat-timeout', 'wait-for-ripple']
    },
    version: '1.0.0'
  },
  {
    name: 'QBtnGroup',
    tag: 'q-btn-group',
    version: '1.0.0'
  },
  {
    name: 'QBtnToggle',
    tag: 'q-btn-toggle',
    legacy: {
      props: ['no-ripple', 'wait-for-ripple']
    },
    version: '1.0.0'
  },
  {
    name: 'QCard',
    tag: 'q-card',
    legacy: {
      props: ['color', 'inline', 'text-color']
    },
    version: '1.0.0'
  },
  {
    name: 'QCardActions',
    tag: 'q-card-actions',
    version: '1.0.0'
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
    name: 'QCardSection',
    tag: 'q-card-section',
    version: '1.0.0'
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
    },
    version: '1.0.0'
  },
  {
    name: 'QCarouselControl',
    tag: 'q-carousel-constrol',
    version: '1.0.0'
  },
  {
    name: 'QCarouselSlide',
    tag: 'q-carousel-slide',
    version: '1.0.0'
  },
  {
    name: 'QChatMessage',
    tag: 'q-chat-message',
    version: '1.0.0'
  },
  {
    name: 'QCheckbox',
    tag: 'q-checkbox',
    legacy: {
      props: ['checked-icon', 'indeterminate-icon', 'no-focus', 'readonly', 'unchecked-icon']
    },
    version: '1.0.0'
  },
  {
    name: 'QChip',
    tag: 'q-chip',
    legacy: {
      props: ['avatar', 'closable', 'detail', 'floating', 'pointing', 'small', 'tag'],
      events: ['hide']
    },
    version: '1.0.0'
  },
  {
    name: 'QChipsInput',
    tag: 'q-chips-input',
    replacedWith: 'QSelect'
  },
  {
    name: 'QCircularProgress',
    tag: 'q-circular-progress',
    version: '1.0.0'
  },
  {
    name: 'QCollapsible',
    tag: 'q-collapsible',
    replacedWith: 'QExpansionItem'
  },
  {
    name: 'QColor',
    tag: 'q-color',
    version: '1.0.0'
  },
  {
    name: 'QColorPicker',
    tag: 'q-color-picker',
    replacedWith: 'QColor'
  },
  {
    name: 'QContextMenu',
    tag: 'q-context-menu',
    replacedWith: 'QMenu'
  },
  {
    name: 'QDate',
    tag: 'q-date',
    version: '1.0.0'
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
          replacedWith: 'persistent'
        }
      },
      events: ['ok', 'cancel', 'hide', 'show'],
      props: ['cancel', 'color', 'ok', 'message', 'options', 'prevent-close', 'prompt', 'stack-buttons', 'title'],
      slots: ['body', 'buttons', 'message', 'title']
    },
    version: '1.0.0'
  },
  {
    name: 'QDrawer',
    tag: 'q-drawer',
    legacy: {
      props: ['no-hide-on-route-change'],
      methods: ['on-layout']
    },
    version: '1.0.0'
  },
  {
    name: 'QEditor',
    tag: 'q-editor',
    version: '1.0.0'
  },
  {
    name: 'QExpansionItem',
    tag: 'q-expansion-item',
    version: '1.0.0'
  },
  {
    name: 'QFab',
    tag: 'q-fab',
    version: '1.0.0'
  },
  {
    name: 'QField',
    tag: 'q-field',
    // needs special handling?
    version: '1.0.0'
  },
  {
    name: 'QFile',
    tag: 'q-file',
    version: '1.8.0'
  },
  {
    name: 'QFooter',
    tag: 'q-footer',
    version: '1.0.0'
  },
  {
    name: 'QForm',
    tag: 'q-form',
    version: '1.0.0'
  },
  {
    name: 'QHeader',
    tag: 'q-header',
    version: '1.0.0'
  },
  {
    name: 'QIcon',
    tag: 'q-icon',
    version: '1.0.0'
  },
  {
    name: 'QImg',
    tag: 'q-img',
    version: '1.0.0'
  },
  {
    name: 'QInfiniteScroll',
    tag: 'q-infinite-scroll',
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
    },
    version: '1.0.0'
  },
  {
    name: 'QInnerLoading',
    tag: 'q-inner-loading',
    legacy: {
      props: ['visible']
    },
    version: '1.0.0'
  },
  {
    name: 'QInput',
    tag: 'q-input',
    legacy: {
      props: ['after', 'align', 'before', 'clear-value', 'decimals', 'float-label', 'hide-underline', 'initial-show-password', 'inverted', 'inverted-light', 'lower-case', 'max-height', 'no-parent-field', 'no-pass-toggle', 'numeric-keyboard-toggle', 'step', 'upper-case', 'warning'],
      methods: ['clear', 'select', 'togglePass']
    },
    version: '1.0.0'
  },
  {
    name: 'QIntersection',
    tag: 'q-intersection',
    version: '1.5.0' // TODO: need correct version
  },
  {
    name: 'QItem',
    tag: 'q-item',
    legacy: {
      props: ['event', 'highlight', 'inset-separator', 'link', 'multiline', 'separator', 'sparse']
    },
    version: '1.0.0'
  },
  {
    name: 'QItemLabel',
    tag: 'q-item-label',
    version: '1.0.0'
  },
  {
    name: 'QItemMain',
    tag: 'q-item-main',
    replacedWith: 'QItemLabel'
  },
  {
    name: 'QItemSection',
    tag: 'q-item-section',
    version: '1.0.0'
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
    name: 'QItemTile',
    tag: 'q-item-tile',
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
    },
    version: '1.0.0'
  },
  {
    name: 'QLayout',
    tag: 'q-layout',
    version: '1.0.0'
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
    },
    version: '1.0.0'
  },
  {
    name: 'QList',
    tag: 'q-list',
    legacy: {
      props: ['highlight', 'inset-separator', 'link', 'no-border', 'sparse', 'striped', 'striped-odd']
    },
    version: '1.0.0'
  },
  {
    name: 'QListHeader',
    tag: 'q-list-header',
    replacedWith: 'QItemLabel'
  },
  {
    name: 'QMarkupTable',
    tag: 'q-markup-table',
    version: '1.0.0'
  },
  {
    name: 'QMenu',
    tag: 'q-menu',
    legacy: {
      props: ['anchor-click', 'disabled', 'keep-on-screen']
    },
    version: '1.0.0'
  },
  {
    name: 'QModal',
    tag: 'q-modal',
    replacedWith: 'QMenu, QDialog or QPopupProxy'
  },
  {
    name: 'QModalLayout',
    tag: 'q-modal-layout',
    replacedWith: 'QMenu',
    message: 'QModalLayout: use QDialog with a QLayout (and its `container` prop)'
  },
  {
    name: 'QNoSsr',
    tag: 'q-no-ssr',
    version: '1.0.0'
  },
  {
    name: 'QOptionGroup',
    tag: 'q-option-group',
    legacy: {
      props: ['no-parent-group', 'readonly']
    },
    version: '1.0.0'
  },
  {
    name: 'QPage',
    tag: 'q-page',
    version: '1.0.0'
  },
  {
    name: 'QPageContainer',
    tag: 'q-page-container',
    version: '1.0.0'
  },
  {
    name: 'QPageScroller',
    tag: 'q-page-scroller',
    version: '1.0.0'
  },
  {
    name: 'QPageSticky',
    tag: 'q-page-sticky',
    version: '1.0.0'
  },
  {
    name: 'QPagination',
    tag: 'q-pagination',
    version: '1.0.0'
  },
  {
    name: 'QParallax',
    tag: 'q-parallax',
    legacy: {
      slots: ['loading']
    },
    version: '1.0.0'
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
    },
    version: '1.0.0'
  },
  {
    name: 'QPopupProxy',
    tag: 'q-popup-proxy',
    "pass-through": [
      'QMenu',
      'QDialog'
    ],
    version: '1.0.0'
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
      version: '1.0.0'
    }
  },
  {
    name: 'QRadio',
    tag: 'q-radio',
    legacy: {
      props: ['checked-icon', 'no-focus', 'readonly', 'unchecked-icon']
    },
    version: '1.0.0'
  },
  {
    name: 'QRange',
    tag: 'q-range',
    legacy: {
      props: ['decimals', 'error', 'fill-handle-always', 'square', 'warning']
    },
    version: '1.0.0'
  },
  {
    name: 'QRating',
    tag: 'q-rating',
    version: '1.0.0'
  },
  {
    name: 'QResizeObservable',
    tag: 'q-resize-observable',
    replacedWith: 'QResizeObserver'
  },
  {
    name: 'QResizeObserver',
    tag: 'q-resize-observer',
    version: '1.0.0'
  },
  {
    name: 'QResponsive',
    tag: 'q-responsive',
    version: '1.9.0' // TODO: need correct version
  },
  {
    name: 'QRouteTab',
    tag: 'q-route-tab',
    legacy: {
      props: ['color', 'count', 'hidden', 'hide'],
      methods: ['select']
    },
    version: '1.0.0'
  },
  {
    name: 'QScrollArea',
    tag: 'q-scroll-area',
    version: '1.0.0'
  },
  {
    name: 'QScrollObservable',
    tag: 'q-scroll-observable',
    replacedWith: 'QScrollObserver'
  },
  {
    name: 'QScrollObserver',
    tag: 'q-scroll-observer',
    version: '1.0.0'
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
    },
    version: '1.0.0'
  },
  {
    name: 'QSeparator',
    tag: 'q-separator',
    version: '1.0.0'
  },
  {
    name: 'QSkeleton',
    tag: 'q-skeleton',
    version: '1.9.0' // TODO: need correct version
  },
  {
    name: 'QSlideItem',
    tag: 'q-slide-item',
    version: '1.0.0'
  },
  {
    name: 'QSlider',
    tag: 'q-slider',
    legacy: {
      props: ['decimals', 'error', 'fill-handle-always', 'square', 'warning']
    },
    version: '1.0.0'
  },
  {
    name: 'QSlideTransition',
    tag: 'q-slide-transition',
    version: '1.0.0'
  },
  {
    name: 'QSpace',
    tag: 'q-space',
    version: '1.0.0'
  },
  {
    name: 'QSpinner',
    tag: 'q-spinner',
    version: '1.0.0'
  },
  {
    name: 'QSpinnerAudio',
    tag: 'q-spinner-audio',
    version: '1.0.0'
  },
  {
    name: 'QSpinnerBall',
    tag: 'q-spinner-ball',
    version: '1.0.0'
  },
  {
    name: 'QSpinnerBars',
    tag: 'q-spinner-bars',
    version: '1.0.0'
  },
  {
    name: 'QSpinnerComment',
    tag: 'q-spinner-comment',
    version: '1.0.0'
  },
  {
    name: 'QSpinnerCube',
    tag: 'q-spinner-cube',
    version: '1.0.0'
  },
  {
    name: 'QSpinnerDots',
    tag: 'q-spinner-dots',
    version: '1.0.0'
  },
  {
    name: 'QSpinnerFacebook',
    tag: 'q-spinner-facebook',
    version: '1.0.0'
  },
  {
    name: 'QSpinnerGears',
    tag: 'q-spinner-gears',
    version: '1.0.0'
  },
  {
    name: 'QSpinnerGrid',
    tag: 'q-spinner-grid',
    version: '1.0.0'
  },
  {
    name: 'QSpinnerHearts',
    tag: 'q-spinner-hearts',
    version: '1.0.0'
  },
  {
    name: 'QSpinnerHourglass',
    tag: 'q-spinner-hourglass',
    version: '1.0.0'
  },
  {
    name: 'QSpinnerInfinity',
    tag: 'q-spinner-infinity',
    version: '1.0.0'
  },
  {
    name: 'QSpinnerIos',
    tag: 'q-spinner-ios',
    version: '1.0.0'
  },
  {
    name: 'QSpinnerMat',
    tag: 'q-spinner-mat',
    replacedWith: 'QSpinner'
  },
  {
    name: 'QSpinnerOval',
    tag: 'q-spinner-oval',
    version: '1.0.0'
  },
  {
    name: 'QSpinnerPie',
    tag: 'q-spinner-pie',
    version: '1.0.0'
  },
  {
    name: 'QSpinnerPuff',
    tag: 'q-spinner-puff',
    version: '1.0.0'
  },
  {
    name: 'QSpinnerRadio',
    tag: 'q-spinner-radio',
    version: '1.0.0'
  },
  {
    name: 'QSpinnerRings',
    tag: 'q-spinner-rings',
    version: '1.0.0'
  },
  {
    name: 'QSpinnerTail',
    tag: 'q-spinner-tail',
    version: '1.0.0'
  },
  {
    name: 'QSpitter',
    tag: 'q-spitter',
    version: '1.0.0'
  },
  {
    name: 'QStep',
    tag: 'q-step',
    legacy: {
      props: ['default', 'order', 'subtitle']
    },
    version: '1.0.0'
  },
  {
    name: 'QStepper',
    tag: 'q-stepper',
    legacy: {
      props: ['color', 'contractable', 'no-header-navigation']
    },
    version: '1.0.0'
  },
  {
    name: 'QStepperNavigation',
    tag: 'q-stepper-navigation',
    version: '1.0.0'
  },
  {
    name: 'QTab',
    tag: 'q-tab',
    legacy: {
      methods: ['select'],
      props: ['color', 'count', 'default', 'hidden', 'hide'],
      slots: ['title']
    },
    version: '1.0.0'
  },
  {
    name: 'QTable',
    tag: 'q-table',
    legacy: {
      props: ['selected-rows-label', 'pagination-label'],
      events: ['fullscreen', 'request']
    },
    version: '1.0.0'
  },
  {
    name: 'QTableColumns',
    tag: 'q-table-columns',
    replacedWith: 'QSelect',
    message: 'QTableColumns: use a QSelect in QTable \'top\' slot (see QTable docs example: \'Visible columns\')'
  },
  {
    name: 'QTabPanel',
    tag: 'q-tab-panel',
    version: '1.0.0'
  },
  {
    name: 'QTabPanels',
    tag: 'q-tab-panels',
    version: '1.0.0'
  },
  {
    name: 'QTabs',
    tag: 'q-tabs',
    version: '1.0.0'
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
    name: 'QTd',
    tag: 'q-td',
    version: '1.0.0'
  },
  {
    name: 'QTh',
    tag: 'q-th',
    version: '1.0.0'
  },
  {
    name: 'QTimeline',
    tag: 'q-timeline',
    legacy: {
      props: ['no-hover', 'responsive']
    },
    version: '1.0.0'
  },
  {
    name: 'QTimelineEntry',
    tag: 'q-timeline-entry',
    legacy: {
      props: ['subtitle', 'title']
    },
    version: '1.0.0'
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
    },
    version: '1.0.0'
  },
  {
    name: 'QToolbar',
    tag: 'q-toolbar',
    legacy: {
      props: ['color', 'glossy', 'inverted', 'shrink', 'text-color'],
      slots: ['subtitle']
    },
    version: '1.0.0'
  },
  {
    name: 'QToolbarTitle',
    tag: 'q-toolbar-title',
    version: '1.0.0'
  },
  {
    name: 'QTooltip',
    tag: 'q-tooltip',
    legacy: {
      props: ['disabled']
    },
    version: '1.0.0'
  },
  {
    name: 'QTr',
    tag: 'q-tr',
    version: '1.0.0'
  },
  {
    name: 'QTree',
    tag: 'q-tree',
    version: '1.0.0'
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
    },
    version: '1.0.0'
  },
  {
    name: 'QUploaderAddTrigger',
    tag: 'q-uploader-add-trigger',
    version: '1.0.0'
  },
  {
    name: 'QUploaderBase',
    tag: 'q-uploader-base',
    version: '1.9.0' // TODO: need correct version
  },
  {
    name: 'QVideo',
    tag: 'q-video',
    version: '1.0.0'
  },
  {
    name: 'QVirtualScoll',
    tag: 'q-virtual-scroll',
    version: '1.1.0'
  },
  {
    name: 'QWindowResizeObservable',
    tag: 'q-window-resize-observable',
    replacedWith: '',
    message: 'QWindowResizeObservable: directly use `this.$q.screen.width` and `this.$q.screen.height` (or create a watcher on them)'
  }
]

module.exports = {
  components
}
