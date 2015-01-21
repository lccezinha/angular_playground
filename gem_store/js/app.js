var app = angular.module('store', []);

app.controller('StoreController', function() {
  this.products = gems;
});

app.controller('ReviewController', function() {
  this.review = {};

  this.addReview = function(product){
    this.review.createdOn = Date.now();
    product.reviews.push(this.review);
    this.review = {}
  }
});

app.directive('productDescription', function() {
  return {
    restrict: 'E',
    templateUrl: 'directives/product-description.html'
  };
});

app.directive('productSpecs', function() {
  return {
    restrict: 'A',
    templateUrl: 'directives/product-specs.html'
  };
});

app.directive('productTabs', function() {
  return {
    restrict: 'E',
    templateUrl: 'directives/product-tabs.html',
    controller: function() {
      this.tab = 1;

      this.selectTab = function(setTab) {
        this.tab = setTab;
      };

      this.isSelected = function(checkTab){
        return this.tab === checkTab;
      };
    },
    controllerAs: 'panel'
  };
});

app.directive('productGallery', function(){
  return {
    restrict: 'E',
    templateUrl: 'directives/product-gallery.html',
    controller: function() {
      this.current = 0;

      this.setCurrent = function(imageNumber){
        this.current = imageNumber || 0;
      };
    },
    controllerAs: 'gallery'
  };
});

var gems = [
  {
    name: 'Azurite',
    description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
    shine: 8,
    price: 110.50,
    rarity: 7,
    color: '#CCC',
    faces: 14,
    images: [ ],
    reviews:
    [
      {
        stars: 5,
        body: "I love this gem!",
        author: "joe@example.org",
        createdOn: 1397490980837
      },
      {
        stars: 1,
        body: "This gem sucks.",
        author: "tim@example.org",
        createdOn: 1397490980837
      }
    ]
  },
  {
    name: 'Bloodstone',
    description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
    shine: 9,
    price: 22.90,
    rarity: 6,
    color: '#EEE',
    faces: 12,
    images: [
      "images/ruby.png",
      "images/ruby-2.jpeg"
    ],
    reviews:
    [
      {
        stars: 2,
        body: "I love this gem!",
        author: "joe@example.org",
        createdOn: 1397490980837
      },
      {
        stars: 3,
        body: "This gem sucks.",
        author: "tim@example.org",
        createdOn: 1397490980837
      }
    ]
  },
  {
    name: 'Zircon',
    description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
    shine: 70,
    price: 1100,
    rarity: 2,
    color: '#000',
    faces: 6,
    images: [
      "images/ruby-2.jpeg",
      "images/ruby.png"
    ],
    reviews: []
  }
];
