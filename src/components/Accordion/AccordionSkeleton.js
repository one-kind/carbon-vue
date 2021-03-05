
const buildSkeleton = (h, defaultClass, classSkeleton) => {
  return [ h('li', {
    class: `${defaultClass}__item ${defaultClass}__item--active`,
    attrs: {
      role: 'presentation'
    }
  }, [
    h('button', {
      class: `${defaultClass}__heading`,
      attrs: {
        type: 'button'
      }
    }, [
      h('Icon', {
        class: `${defaultClass}__arrow`,
        name: 'chevron--right',
        attrs: {
          icon: 'ChevronRight',
          description: "Expand/Collapse"
        }
      }, [
        h('title', {}, 'Provide a description that will be used as the title'),
        h('path', {
          attrs: {
            d: 'M5.569 5.994L0 .726.687 0l6.336 5.994-6.335 6.002L0 11.27z'
          }
        }, [])
      ]),
      h('p', {
        class: `bx--skeleton__text ${defaultClass}__title`,
        attrs: {
          style: 'width: 100%'
        }
      }, [])
    ]),
    h('div', {
      class: `${defaultClass}__content`
    }, [
      h('p', {
        class: `${classSkeleton}__text`,
        style: { width: '90%' }
      }, []),
      h('p', {
        class: `${classSkeleton}__text`,
        style: { width: '80%' }
      }, []),
      h('p', {
        class: `${classSkeleton}__text`,
        style: { width: '95%' }
      }, [])
    ])
  ]),
  h('li', {
    class: `${defaultClass}__item`,
    attrs: {
      role: 'presentation'
    }
  }, [
    h('button', {
      class: `${defaultClass}__heading`,
      attrs: {
        type: 'button'
      }
    }, [
      h('Icon', {
        class: `${defaultClass}__arrow`,
        name: 'chevron--right',
        attrs: {
          icon: 'ChevronRight',
          description: "Expand/Collapse"
        }
      }, [
        h('title', {}, 'Provide a description that will be used as the title'),
        h('path', {
          attrs: {
            d: 'M5.569 5.994L0 .726.687 0l6.336 5.994-6.335 6.002L0 11.27z'
          }
        }, [])
      ]),
      h('p', {
        class: `bx--skeleton__text ${defaultClass}-title`,
        attrs: {
          style: 'width: 100%'
        }
      }, [])
    ]),
    h('div', {
      class: `${defaultClass}__content`
    }, [
      h('p', {
        class: `${classSkeleton}__text`,
        style: { width: '90%' }
      }, []),
      h('p', {
        class: `${classSkeleton}__text`,
        style: { width: '80%' }
      }, []),
      h('p', {
        class: `${classSkeleton}__text`,
        style: { width: '95%' }
      }, [])
    ])
  ]),
  h('li', {
    class: `${defaultClass}__item`,
    attrs: {
      role: 'presentation'
    }
  }, [
    h('button', {
      class: `${defaultClass}__heading`,
      attrs: {
        type: 'button'
      }
    }, [
      h('Icon', {
        class: `${defaultClass}__arrow`,
        name: 'chevron--right',
        attrs: {
          icon: 'ChevronRight',
          description: "Expand/Collapse"
        }
      }, [
        h('title', {}, 'Provide a description that will be used as the title'),
        h('path', {
          attrs: {
            d: 'M5.569 5.994L0 .726.687 0l6.336 5.994-6.335 6.002L0 11.27z'
          }
        }, [])
      ]),
      h('p', {
        class: `bx--skeleton__text ${defaultClass}-title`,
        attrs: {
          style: 'width: 100%'
        }
      }, [])
    ]),
    h('div', {
      class: `${defaultClass}__content`
    }, [
      h('p', {
        class: `${classSkeleton}__text`,
        style: { width: '90%' }
      }, []),
      h('p', {
        class: `${classSkeleton}__text`,
        style: { width: '80%' }
      }, []),
      h('p', {
        class: `${classSkeleton}__text`,
        style: { width: '95%' }
      }, [])
    ])
  ]) ]
}

export default buildSkeleton
