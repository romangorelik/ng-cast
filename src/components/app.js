angular.module('video-player')

.controller('appCtrl', function($sce) {
  this.currentVideo = window.exampleVideoData[0];
  this.videos = window.exampleVideoData;
  this.selectVideo = (video) => {
    console.log('clicked!!')
    this.currentVideo = video
  }
  this.searchResults = () => {}
  this.trustSce = () => {
    
  }
  console.log(this.videos)
})

.component('app', {
  controller: 'appCtrl',
  template: `
  <div id="app container" ng-controller="appCtrl as vm">

    <nav class="navbar">
      <div class="col-md-6 col-md-offset-3">
        <search></search>
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
