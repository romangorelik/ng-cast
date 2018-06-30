angular.module('video-player')
.service('youTube', function($http){
  this.result = (q, callback) => {
     $http.get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        key: window.YOUTUBE_API_KEY,
        part: 'snippet', 
        q: q,
        type: 'video',
        videoEmbeddable: 'true', 
      }
    }) 
    .then(result => {
      callback(result.data.items)
    })
    .catch(err => console.log(err))
  }
});
