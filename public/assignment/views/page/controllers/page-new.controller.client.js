(function(){
    angular
        .module("WebAppMaker")
        .controller('pageNewController',pageNewController);

    function pageNewController($routeParams,PageService){
        var vm=this;
        vm.createPage =createPage;
        var websiteId = $routeParams.wid;
        //console.log('New Controller'+userId);

        function createPage(page){
            var page = PageService.createPage(websiteId,page);
            if(page!=null){
                vm.message = 'Page Created Successfully';

            }
        }
    }
})()