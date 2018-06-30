angular.module('video-player')
.component('videoList', {
    bindings: {
      videos: '<',
      onClick: '<'
    },
    template: `
    <ul class="video-list">
      <video-list-entry video="video" selectvideo="$ctrl.onClick" ng-repeat="video in $ctrl.videos track by $index"></video-list-entry>
    </ul>
    `
});
