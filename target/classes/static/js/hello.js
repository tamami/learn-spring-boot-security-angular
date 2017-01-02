/**
 * Created by tamami on 02/01/17.
 */
angular.module('hello',[]).controller('home', function($http) {
   var self = this;
   $http.get('/resource/').then(function(response) {
       self.greeting = response.data;
   })
});
