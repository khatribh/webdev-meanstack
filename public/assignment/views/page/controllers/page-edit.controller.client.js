(function(){
    angular
        .module("WebAppMaker")
        .controller('pageEditController', pageEditController);

    function pageEditController($routeParams,PageService){
        var vm=this;
        vm.updatePage= updatePage;
        vm.deletePage = deletePage;
        vm.pageId = $routeParams.pid;


        //console.log('Edit'+vm.websiteId);

        function init() {
            vm.page = PageService.findPageById(vm.pageId);
            //console.log(vm.websites)
        }
        init();

        function updatePage(){
            //console.log('RT'+website);
            var obj = PageService.updatePage(vm.pageId,vm.page);

            if(obj!=null){
                vm.message = 'Page Details Updated Successfully';
            }
        }
        function deletePage(){
            //console.log('RT');
            var obj = PageService.deletePage(vm.pageId);
            //console.log('website list'+obj);
            if(obj!=null){
                vm.messageDelete = 'Page Deleted Successfully';
            }
        }
    }
})()