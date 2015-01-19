angular.module('EmailApp')
  .factory('InboxFactory', function InboxFactory($q, $http, $location){
    'use strict';

    var exports = {};

    exports.getMessages = function() {
      return $http.get('json/emails.json').error(function(data){
        console.log('Error: ', data)
      })
    };

    return exports;
  });
