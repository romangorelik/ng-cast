angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<',
    selectvideo: '<'
  },
  template: `
      <li class="video-list-entry media">
      <div class="media-left">
        <img class="media-object" src={{$ctrl.video.snippet.thumbnails.default.url}} />
      </div>
      <div class="media-body">
        <div class="video-list-entry-title" ng-click='$ctrl.selectvideo($ctrl.video)'>{{$ctrl.video.snippet.title}}</div>
        <div class="video-list-entry-detail">{{$ctrl.video.snippet.description}}</div>
      </div>
    </li>
  `
});
