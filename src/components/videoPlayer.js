angular.module('video-player')

.controller('videoplayerCtrl', function() {
  // this.currentVideo = window.exampleVideoData[0];
  // this.videos = window.exampleVideoData;
  // this.selectVideo = (video) => {
  //   console.log('clicked!!')
  //   this.currentVideo = video
  // }
  // this.searchResults = () => {}
  // console.log(this.videos)
})

.component('videoPlayer', {
  bindings: {
    video: '<'
  },
  template: `
    <div class="video-player">
    <div class="embed-responsive embed-responsive-16by9">
      <iframe class="embed-responsive-item" ng-src={{}} allowFullScreen></iframe>
    </div>
    <div class="video-player-details">
      <h3>{{$ctrl.video.snippet.title}}</h3>
      <div>{{$ctrl.video.snippet.description}}</div>
    </div>
  </div>
  `
});
