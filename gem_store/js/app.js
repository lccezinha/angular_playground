var app = angular.module('store', []);

app.controller('StoreController', function() {
  console.log(gems)
  this.product = gems;
});

var gems = [
  {
    name: 'Ticaracaticass',
    price: 2.95,
    description: 'Blabla',
    canPurchase: false
  },
  {
    name: 'Bombinhas de biriba',
    price: 1.95,
    description: 'Blablazzzzzzzzz',
    canPurchase: true
  }
]
