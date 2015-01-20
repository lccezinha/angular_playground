var app = angular.module('store', []);

app.controller('StoreController', function() {
  this.product = gem;
});

var gem = {
  name: 'Ticaracatica',
  price: 2.95,
  description: 'Blabla'
}
