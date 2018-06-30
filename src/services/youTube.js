angular.module('video-player')
.service('youTube', function($http, search){
  $http({
    method : "GET",
    url : "https://www.googleapis.com/youtube/v3/search",
    key: window.YOUTUBE_API_KEY,
    q: search,
    type: video,
    videoEmbeddable: 'true'
  })
});
