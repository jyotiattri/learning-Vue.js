var app = new Vue({
    el: '#app',
    data: {
      product: 'Socks',
      image: './image/vmSocks-green-onWhite.jpg',
      altText: 'A pair of Socks',
      link: 'https://www.vuemastery.com/courses/intro-to-vue-js/attribute-binding',
      inStock: false,
      details: ["80% Ployster", "20% Cotton", "Gender Neutral"],
      varients:[
        {
          varientId: 2234,
          varientColor: 'green',
          varientImage: "./image/vmSocks-green-onWhite.jpg"
        },
        {
          varientId: 2235,
          varientColor: 'blue',
          varientImage: "./image/vmSocks-blue-onWhite.jpg"
        }

      ],
        cart: 0,
        num: 1011

    },  
      methods: {
        addToCart() {
          this.cart +=1
        },
      deleteFromCart() {
        this.cart -=1
      },
      updateProduct(varientImage) {
        this.image = varientImage
      }
    }

    }
  )