var app = new Vue({
    el: '#app',
    data: {
      brand: 'Vue Mastery',
      product: 'Socks',
      altText: 'A pair of Socks',
      selectedVariant: 0,
      link: 'https://www.vuemastery.com/courses/intro-to-vue-js/attribute-binding',
     details: ["80% Ployster", "20% Cotton", "Gender Neutral"],
      varients:[
        {
          varientId: 2234,
          varientColor: 'green',
          varientImage: "./image/vmSocks-green-onWhite.jpg",
          varientQuantity: 10
        },
        {
          varientId: 2235,
          varientColor: 'blue',
          varientImage: "./image/vmSocks-blue-onWhite.jpg",
          varientQuantity: 0
        }

      ],
        cart: 0,
        num: 1011,
    },  
      methods: {
        addToCart:function() {
          this.cart +=1
        },
      deleteFromCart: function() {
        this.cart -=1
      },
      updateProduct: function(index) {
        this.selectedVariant = index
        console.log(index)
      }
      },
      computed:{
        title() {
          return this.brand + ' ' + this.product
        },
    image(){
      return this.varients[this.selectedVariant].varientImage
    }, 
    inStock(){
      return this.varients[this.selectedVariant].varientQuantity
    }, 
  }
    }
  )