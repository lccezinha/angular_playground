var app = angular.module('custom-directives', [])

app.directive('productNameAndPrice', function(){
  return {
    restrict: 'E',
    templateUrl: 'directives/product-name-and-price.html'
  };
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
