module.exports = {
  context: {
    title: 'Bluzka ONLSANSA SINGLET WVN',
    sku: 'SKU: CEL-31145',
    gallery: {
      class: 'gallery--dots'
    },
    stockButton: {
      class: 'button--link modal-trigger product-view__stock',
      text: 'In stock',
      attributes: 'type="button" data-modal-trigger="shipping-latency-product"'
    },
    shippingLatencyModal: {
      modal: {
        id: 'shipping-latency-product',
        attributes: 'aria-labbeledny="shipping-latency-title-product"'
      },
      buttonClose: {
        tag: 'button',
        text: '',
        class: 'button--rotate-icon modal__close-button',
        icon: {
          id: 'close',
          title: 'Close',
          class: 'button__icon modal__close-button-icon'
        },
        attributes: 'type="button" aria-label="click to close the modal"'
      },
      modalTop: true,
      heading: {
        tag: 'h2',
        class: 'heading heading--third-level',
        attributes: 'id="shipping-latency-title-product"',
        text: 'Shipping Latency Modal'
      },
      modalMiddle: true,
      modalDescription: {
        attributes: '',
        class: 'margin-bottom-xs',
        tag: 'p',
        text: 'This is a shipping latency modal. Inside we have some text from shippig latency module.'
      }
    },
    colorSwatch: {
      class: 'margin-bottom-m'
    },
    sizeOption: {
      class: 'product-view__select-option required',
      label: {
        text: 'Size'
      },
      field: {
        id: 'size',
        name: 'size',
        class: 'select--native',
        attributes: 'required'
      },
      options: [
        {
          value: '',
          text: 'Choose your size'
        },
        {
          value: 'xs',
          text: 'XS'
        },
        {
          value: 's',
          text: 'S'
        },
        {
          value: 'm',
          text: 'M'
        },
        {
          value: 'l',
          text: 'L'
        },
        {
          value: 'xl',
          text: 'XL'
        }
      ]
    },
    qtyLabel: 'Quantity',
    addToCartBtn: {
      tag: 'button',
      text: 'Add to cart',
      class: 'button--add-to-icon product-view__add-to-cart',
      iconAfter: {
        id: 'shopping-cart',
        title: 'Add to Cart',
        class: 'button__icon'
      },
      attributes: 'id="submit-add-to-cart-main" type="submit" aria-label="Add to cart"'
    },
    heartBtn: {
      tag: 'button',
      text: '',
      class: 'button--icon-light product-view__button',
      icon: {
        id: 'heart',
        title: 'Arrow left',
        class: 'button__icon'
      },
      attributes: 'type="button" aria-label="Add product to wishlist"'
    },
    compareBtn: {
      tag: 'button',
      text: '',
      class: 'button--icon-light product-view__button',
      icon: {
        id: 'compare',
        title: 'Add to compare list',
        class: 'button__icon'
      },
      attributes: 'type="button" aria-label="Compare product"'
    },
    briefInfoModal1: {
      modal: {
        id: 'modal-info-1',
        attributes: 'aria-labbeledny="modal-info-1-title"'
      },
      buttonClose: {
        tag: 'button',
        text: '',
        class: 'button--rotate-icon modal__close-button',
        icon: {
          id: 'close',
          title: 'Close',
          class: 'button__icon modal__close-button-icon'
        },
        attributes: 'type="button" aria-label="click to close the modal"'
      },
      modalTop: true,
      heading: {
        tag: 'h2',
        class: 'heading heading--third-level',
        attributes: 'id="modal-info-1-title"',
        text: 'Free shipping - Brief Info Modal 1'
      },
      modalMiddle: true,
      modalDescription: {
        attributes: '',
        class: 'margin-bottom-xs',
        tag: 'p',
        text: 'This is info modal on product page. We can use here some fixed text (the same on every product page) or if we want to put here some product specific text we should use attribute value for this modal content.'
      }
    },
    briefInfoModal2: {
      modal: {
        id: 'modal-info-2',
        attributes: 'aria-labbeledny="modal-info-2-title"'
      },
      buttonClose: {
        tag: 'button',
        text: '',
        class: 'button--rotate-icon modal__close-button',
        icon: {
          id: 'close',
          title: 'Close',
          class: 'button__icon modal__close-button-icon'
        },
        attributes: 'type="button" aria-label="click to close the modal"'
      },
      modalTop: true,
      heading: {
        tag: 'h2',
        class: 'heading heading--third-level',
        attributes: 'id="modal-info-2-title"',
        text: 'Return Policy - Brief Info Modal 2'
      },
      modalMiddle: true,
      modalDescription: {
        attributes: '',
        class: 'margin-bottom-xs',
        tag: 'p',
        text: 'This is info modal on product page. We can use here some fixed text (the same on every product page) or if we want to put here some product specific text we should use attribute value for this modal content.'
      }
    },
    tab: {
      script: true,
      attributes: 'id="product-tabs"',
      class: 'product-view__tab',
      icon: {
        class: 'tab__icon',
        iconId: 'angle-down',
        iconTitle: 'Arrow down'
      },
      tabs: [
        {
          tabId: 'tab-1',
          title: 'Description',
          titleId: 'tab-title-1',
          content: 'Etiam orci ex, tristique at tempor quis, bibendum vel diam. Nullam vel mollis leo. Etiam facilisis mattis tortor, a ullamcorper nulla congue sed. Morbi non odio neque. In ut leo a elit consectetur fermentum aliquet non eros. In elementum vitae nulla sed semper. Nulla lacinia fermentum quam eu scelerisque. Sed et bibendum augue. Etiam sagittis enim eu ex aliquet ornare. Donec congue facilisis neque.'
        },
        {
          active: true,
          tabId: 'tab-2',
          title: 'Specifications',
          titleId: 'tab-title-2',
          class: {
            content: 'product-view__table'
          },
          contentElement: 'table--scope-row'
        },
        {
          tabId: 'tab-3',
          title: 'What\'s in the box',
          titleId: 'tab-title-3',
          content: 'Etiam orci ex, tristique at tempor quis, bibendum vel diam. Nullam vel mollis leo. Etiam facilisis mattis tortor, a ullamcorper nulla congue sed. Morbi non odio neque. In ut leo a elit consectetur fermentum aliquet non eros. In elementum vitae nulla sed semper. Nulla lacinia fermentum quam eu scelerisque. Sed et bibendum augue. Etiam sagittis enim eu ex aliquet ornare. Donec congue facilisis neque.'
        },
        {
          tabId: 'tab-4',
          titleId: 'tab-title-4',
          title: 'Reviews (34)',
          contentElement: 'product-review'
        }
      ]
    },
    review: {
      reviewsQty: '32 Reviews',
      rating: {
        class: 'rating--secondary'
      }
    }
  },
  variants: [
    {
      name: 'bundle',
      context: {
        price: {
          regularPrice: '92.00'
        },
        priceUnit: '/ bundle',
        summaryTitle: 'Summary:',
        summaries: [
          {
            title: 'Sprite Stasis Ball:',
            item: '1 x Sprite Stasis Ball 55 cm'
          },
          {
            title: 'Sprite Yoga Strap:',
            item: '1 x Sprite Yoga Strap 6 foot'
          },
          {
            title: 'Sprite Foam Roller:',
            item: '1 x Sprite Foam Roller'
          }
        ]
      }
    },
    {
      name: 'grouped',
      context: {
        productsTable: {
          class: 'product-view__grouped-table',
          captionText: 'Grouped product items',
          mainTags: [
            {
              mainTag: 'thead',
              rowTags: [
                {
                  rowTag: 'tr',
                  rowTagAttributes: 'role="row"',
                  childTags: [
                    {
                      childTag: 'th',
                      content: 'Product Name',
                      childTagAttributes: 'scope="col" role="columnheader"'
                    },
                    {
                      childTag: 'th',
                      childTagClasses: 'product-view__grouped-col-qty',
                      content: 'Qty',
                      childTagAttributes: 'scope="col" role="columnheader"'
                    }
                  ]
                }
              ]
            },
            {
              mainTag: 'tbody',
              rowTags: [
                {
                  rowTag: 'tr',
                  rowTagAttributes: 'role="row"',
                  childTags: [
                    {
                      childTag: 'td',
                      childTagAttributes: 'data-th="Product Name:" role="gridcell"',
                      content: '<span class="product-view__grouped-product-name">Sprite Yoga Strap 6 foot</span><span>$14.00</span>'
                    },
                    {
                      childTag: 'td',
                      childTagAttributes: 'data-th="Qty:" role="gridcell"',
                      contentComponent: 'input',
                      contentContext: {
                        class: 'product-view__grouped-qty',
                        label: {
                          text: 'Qty',
                          hidden: true
                        },
                        field: {
                          id: 'field-id-1',
                          name: 'field-name-1',
                          type: 'number',
                          attributes: 'min="0" value="0"'
                        }
                      }
                    }
                  ]
                },
                {
                  rowTag: 'tr',
                  rowTagAttributes: 'role="row"',
                  childTags: [
                    {
                      childTag: 'td',
                      childTagAttributes: 'data-th="Product Name:" role="gridcell"',
                      content: '<span class="product-view__grouped-product-name">Sprite Yoga Strap 8 foot</span><span>$17.00</span>'
                    },
                    {
                      childTag: 'td',
                      childTagAttributes: 'data-th="Qty:" role="gridcell"',
                      contentComponent: 'input',
                      contentContext: {
                        class: 'product-view__grouped-qty',
                        label: {
                          text: 'Qty',
                          hidden: true
                        },
                        field: {
                          id: 'field-id-2',
                          name: 'field-name-2',
                          type: 'number',
                          attributes: 'min="0" value="0"'
                        }
                      }
                    }
                  ]
                },
                {
                  rowTag: 'tr',
                  rowTagAttributes: 'role="row"',
                  childTags: [
                    {
                      childTag: 'td',
                      childTagAttributes: 'data-th="Product Name:" role="gridcell"',
                      content: '<span class="product-view__grouped-product-name">Sprite Yoga Strap 10 foot</span><span>$21.00</span>'
                    },
                    {
                      childTag: 'td',
                      childTagAttributes: 'data-th="Qty:" role="gridcell"',
                      contentComponent: 'input',
                      contentContext: {
                        class: 'product-view__grouped-qty',
                        label: {
                          text: 'Qty',
                          hidden: true
                        },
                        field: {
                          id: 'field-id-3',
                          name: 'field-name-3',
                          type: 'number',
                          attributes: 'min="0" value="0"'
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      }
    }
  ]
};