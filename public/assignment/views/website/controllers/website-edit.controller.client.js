(function(){
    angular
        .module("WebAppMaker")
        .controller('websiteEditController', websiteEditController);

    function websiteEditController($routeParams,WebsiteService){
        var vm=this;
        vm.updateWebsite= updateWebsite;
        vm.deleteWebsite = deleteWebsite;
        vm.websiteId = $routeParams.wid;


        console.log('Edit'+vm.websiteId);

        function init() {
            vm.website = WebsiteService.findWebsiteById(vm.websiteId);
            //console.log(vm.websites)
        }
        init();

        function updateWebsite(){
            //console.log('RT'+website);
            var obj = WebsiteService.updateWebsite(vm.websiteId,vm.website);

            if(obj!=null){
                vm.message = 'Website Details Updated Successfully';
            }
        }
        function deleteWebsite(){
            console.log('RT');
            var obj = WebsiteService.deleteWebsite(vm.websiteId);
            console.log('website list'+obj);
            if(obj!=null){
                vm.messageDelete = 'Website Deleted Successfully';
            }
        }
    }
})()