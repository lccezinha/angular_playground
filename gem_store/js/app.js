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
    canPurchase: false,
    soldOut: true
  },
  {
    name: 'Bombinhas de biriba',
    price: 1.95,
    description: 'Blablazzzzzzzzz',
    canPurchase: true,
    soldOut: false
  }
]
