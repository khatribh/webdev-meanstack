(function(){
    angular
        .module("WebAppMaker")
        .controller('widgetListController', widgetListController);

    function widgetListController($sce,$routeParams,WidgetService,$location){
        var vm= this;
        vm.doYouTrustUrl=doYouTrustUrl;
        vm.getTrustedHTML=getTrustedHTML;
        vm.widgetEditNav=widgetEditNav;
        vm.userId=$routeParams.uid;
        vm.websiteId=$routeParams.wid;
        vm.pageId =$routeParams.pid;




        function init() {
            vm.widgetList = WidgetService.findWidgetsByPageId(vm.pageId);
            //console.log(vm.websites)
        }
        init();
        function doYouTrustUrl(url){
           var baseUrl ="https://www.youtube.com/embed/";
           var urlParts=url.split('/');
           var id=urlParts[urlParts.length-1];
           baseUrl+=id;
           return $sce.trustAsResourceUrl(baseUrl);

        }
        function getTrustedHTML(text){
            return $sce.trustAsHtml(text);
        }
        // function newPageNav(){
        //     $location.url('/user/'+vm.userId+'/website/'+vm.websiteId+'/page/new');
        // }
        // function editPageNav(pageId){
        //     $location.url('/user/'+vm.userId+'/website/'+vm.websiteId+'/page/'+pageId);
        // }
        function widgetEditNav(widgetId){
            $location.url('/user/'+vm.userId+'/website/'+vm.websiteId+'/page/'+vm.pageId+'/widget/'+widgetId);
        }


    }
})();