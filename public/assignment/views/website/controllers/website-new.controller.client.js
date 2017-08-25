(function(){
    angular
        .module("WebAppMaker")
        .controller('websiteNewController',websiteNewController);

    function websiteNewController($routeParams,WebsiteService){
        var vm=this;
        vm.createWebsite =createWebsite;
        var userId = $routeParams.uid;
        console.log('New Controller'+userId);

        function createWebsite(website){
            var website = WebsiteService.createWebsite(userId,website);
            if(website!=null){
                vm.message = 'Website Created Successfully';

            }
        }
    }
})()