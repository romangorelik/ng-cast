angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<'
  },
  template: `
      <li class="video-list-entry media">
      <div class="media-left">
        <img class="media-object" src="https://i.ytimg.com/vi/1w8Z0UOXVaY/default.jpg" />
      </div>
      <div class="media-body">
        <div class="video-list-entry-title">{{vm.video.snippet.title}}</div>
        <div class="video-list-entry-detail">{{vm.video.snippet.description}}</div>
      </div>
    </li>
  `
});
