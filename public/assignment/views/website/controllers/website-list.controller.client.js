(function(){
    angular
        .module("WebAppMaker")
        .controller('websiteController', websiteController);

    function websiteController($routeParams, WebsiteService, $location){
        var vm= this;

        vm.userId = $routeParams.uid;

        console.log(vm.userId);


        function init() {
            vm.websitesList = WebsiteService.findWebsitesByUser(vm.userId);
            console.log(vm.websites)
        }
        init();



    }
})();