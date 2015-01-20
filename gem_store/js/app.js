var app = angular.module('store', []);

app.controller('StoreController', function() {
  console.log(gems)
  this.products = gems;
});

var gems = [
  {
    name: 'Ticaracaticass',
    price: 2.95,
    description: 'Blabla',
    canPurchase: true,
    soldOut: false,
    images: [
      "images/ruby.png",
      "images/ruby-2.jpeg"
    ]
  },
  {
    name: 'Bombinhas de biriba',
    price: 1.95,
    description: 'Blablazzzzzzzzz',
    canPurchase: true,
    soldOut: false,
    images: [ ]
  }
]
