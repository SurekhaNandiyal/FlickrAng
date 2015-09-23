var myFlickrApp = angular.module('flickrControllers', []);

myFlickrApp.factory('flickrPhotos', function ($resource) {
    return $resource('http://api.flickr.com/services/feeds/photos_public.gne', { format: 'json', jsoncallback: 'JSON_CALLBACK' }, { 'load': { 'method': 'JSONP' } });
});

myFlickrApp.controller('flickrPublicPhotosController', function ($scope, flickrPhotos) {
    console.log("here");
    $scope.public_photos = flickrPhotos.load();
    console.log($scope.public_photos);

    $scope.searchTag = function() {
        console.log("there");
        $scope.public_photos = flickrPhotos.load({ tags: $scope.searchQuery });
    }
});
