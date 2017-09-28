(function(){
    angular
        .module("WebAppMaker")
        .controller('widgetEditController', widgetEditController);

    function widgetEditController($sce,$routeParams,WidgetService,$location) {
        var vm = this;

        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        vm.pageId = $routeParams.pid;
        vm.widgetId=$routeParams.wgid;


        function init() {
            vm.widgetList = WidgetService.findWidgetById(vm.widgetId);
            //console.log(vm.websites)
        }

        init();

    }
})();