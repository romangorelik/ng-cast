angular.module('video-player')
.controller('searchCtrl', function() {
   this.query = '' 
})
.component('search', {
  controller: 'searchCtrl',
  bindings: {
    search: '<'
  },
  template: `
    <div class="search-bar form-inline" ng-controller="searchCtrl as vm">
      <input class="form-control" type="text" ng-model="vm.query"/>
      <button class="btn" ng-click="$ctrl.search(vm.query)">
        <span class="glyphicon glyphicon-search"></span>
      </button>
    </div>
 `
});
