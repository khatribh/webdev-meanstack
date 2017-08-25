(function(){
    angular
        .module("WebAppMaker")
        .factory('PageService', PageService);

    function PageService(){
        var pages=[
                { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
                { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
                { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
            ];
        var api= {
            "findPageByWebsiteId" : findPageByWebsiteId,
             "createPage" : createPage,
            "findPageById" : findPageById,
            "updatePage" : updatePage,
            "deletePage" : deletePage

        }
        return api;
        function findPageByWebsiteId(websiteId){
           // console.log('Service'+userId);
            var pageArr=[];
            for(var p in pages){
                var page=pages[p];
                if(page.websiteId===websiteId){
                    //console.log(web);
                    pageArr.push(page);
                }
            }
            return pageArr;
        }
        function createPage(websiteId, page){
            var length = pages.length;
            var pageObj = {
                _id: '',
                name: '',
                websiteId: '',
                description: ''
            };
            if(page.name!=null && page.description!=null){
                pageObj['_id']=length;
                pageObj['name']=page.name;
                pageObj['websiteId']=websiteId;
                pageObj['description']=page.description;
                pages.push(pageObj);

            }
            return pageObj;
        }
        function findPageById(pageId){
            for(var p in pages){
                var page =pages[p];
                if(page._id === pageId){
                    return page;
                }

            }
            return null;

        }
        function updatePage(pageId, page){
            for(var p in pages){
                var pageObj =pages[p];
                if(pageObj._id === pageId && pageObj ===page){
                    //console.log(websiteObj);
                    pages['name']=page.name;
                    pages['description']=page.description;
                }


            }
            return page;



        }
        function deletePage(pageId){
            //console.log('In Delete');
            for(var p in pages){
                var pageObj =pages[p];
                //console.log('WebsiteId'+websiteId);
                //console.log('WebsiteId'+websiteObj._id);
                if(pageObj._id===pageId){
                    //console.log('website id'+websiteObj._id);
                    var index = pages.indexOf(pageObj);
                   // console.log('Index'+index);
                    pages.splice(index,1);

                }

            }
            return pages;

        }

    }

})()