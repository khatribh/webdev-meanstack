(function(){
    angular
        .module("WebAppMaker")
        .controller('websiteListController', websiteListController);

    function websiteListController($routeParams, WebsiteService, $location){
        var vm= this;
        vm.newWebsiteNav =newWebsiteNav;
        vm.editWebsiteNav = editWebsiteNav;

        vm.userId = $routeParams.uid;


        console.log(vm.userId);


        function init() {
            vm.websitesList = WebsiteService.findWebsitesByUser(vm.userId);
            //console.log(vm.websites)
        }
        init();

        function newWebsiteNav(){
            $location.url('/user/'+vm.userId+'/website/new');
        }
        function editWebsiteNav(websiteId){
            $location.url('/user/'+vm.userId+'/website/'+websiteId);
        }

    }
})();