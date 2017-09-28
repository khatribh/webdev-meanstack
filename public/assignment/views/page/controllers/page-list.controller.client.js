(function(){
    angular
        .module("WebAppMaker")
        .controller('pageListController', pageListController);

    function pageListController($routeParams, PageService,$location){
        var vm= this;
        vm.newPageNav=newPageNav;
        vm.editPageNav=editPageNav;
        vm.widgetListNav=widgetListNav;

        vm.userId =$routeParams.uid;
        vm.websiteId = $routeParams.wid;




        function init() {
            vm.pageList = PageService.findPageByWebsiteId(vm.websiteId);
            //console.log(vm.websites)
        }
        init();
        function newPageNav(){
            $location.url('/user/'+vm.userId+'/website/'+vm.websiteId+'/page/new');
        }
        function editPageNav(pageId){
            $location.url('/user/'+vm.userId+'/website/'+vm.websiteId+'/page/'+pageId);
        }
        function widgetListNav(pageId){
            $location.url('/user/'+vm.userId+'/website/'+vm.websiteId+'/page/'+pageId+'/widget');
        }


    }
})();