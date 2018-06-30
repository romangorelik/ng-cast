angular.module('video-player')

.controller('appCtrl', function() {
  this.currentVideo = window.exampleVideoData[0];
  this.videos = window.exampleVideoData;
  this.selectVideo = (video) => {
    this.currentVideo = video
  }
  this.searchResults = (text) => {
    console.log('clicked!!', text)
  //   youTube(text)
  //   .then((response) => {
  //     console.log('SUCCESS: ', response)
  //  })
  //  .catch((err) => {
  //     console.log('ERROR: ', err)
  //  });
  }
})

.component('app', {
  controller: 'appCtrl',
  template: `
  <div id="app container" ng-controller="appCtrl as vm">
    <nav class="navbar">
      <div class="col-md-6 col-md-offset-3">
        <search search="vm.searchResults"></search>
      </div>
    </nav>
    <div class="row">
      <div class="col-md-7">
        <video-player video="vm.currentVideo"></video-player>
      </div>
      <div class="col-md-5">
        <video-list videos="vm.videos" on-Click="vm.selectVideo"></video-list>
      </div>
    <div>
  </div>
  `
});
