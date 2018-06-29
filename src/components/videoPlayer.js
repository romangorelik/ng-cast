angular.module('video-player')

.controller('videoplayerCtrl', function() {
  // this.currentVideo = window.exampleVideoData[0];
  // this.videos = window.exampleVideoData;
  // this.selectVideo = (video) => {
  //   console.log('clicked!!')
  //   this.currentVideo = video
  // }
  // this.searchResults = (video) => {}
  // console.log(this.videos)

})

.component('videoPlayer', {
  controller: 'videoplayerCtrl',
  bindings: {
    video: '<'
  },
  template: `
    <div class="video-player" ng-controller="videoplayerCtrl">
    <div class="embed-responsive embed-responsive-16by9">
      <iframe class="embed-responsive-item" ng-src={{}} allowFullScreen></iframe>
    </div>
    <div class="video-player-details">
      <h3 ng-click="$ctrl.searchResults()">{{$ctrl.video.snippet.title}}</h3>
      <div>{{$ctrl.video.snippet.description}}</div>
    </div>
  </div>
  `
});
