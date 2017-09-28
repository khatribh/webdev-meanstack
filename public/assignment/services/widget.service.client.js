(function(){
    angular
        .module("WebAppMaker")
        .factory('WidgetService',WidgetService);

    function WidgetService(){
        var widgets=[
            { "_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO"},
            { "_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
            { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
                "url": "http://lorempixel.com/400/200/"},
            { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
            { "_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
            { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
                "url": "https://youtu.be/AM2Ivdi9c4E" },
            { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}

        ];
        var api= {
            "findWidgetsByPageId" : findWidgetsByPageId,
            "findWidgetById" : findWidgetById


        }
        return api;
        function findWidgetsByPageId(pageId){
           // console.log('Service'+userId);
            var widgetArr=[];
            for(var w in widgets){
                var widget=widgets[w];
                if(widget.pageId===pageId){

                    widgetArr.push(widget);
                }
            }
            return widgetArr;
        }
        // function createWebsite(userId, website){
        //     var length = websites.length;
        //     var websiteObj = {
        //         _id: '',
        //         name: '',
        //         developerId: '',
        //         description: ''
        //     };
        //     if(website.name!=null && website.description!=null){
        //         websiteObj['_id']=length;
        //         websiteObj['name']=website.name;
        //         websiteObj['developerId']=userId;
        //         websiteObj['description']=website.description;
        //         websites.push(websiteObj);
        //
        //     }
        //     return websiteObj;
        // }
        function findWidgetById(widgetId){
            for(var w in widgets){
                var widget =widgets[w];
                if(widget._id === widgetId){
                    return widget;
                }

            }
            return null;

        }
        // function updateWebsite(websiteId, website){
        //     for(var w in websites){
        //         var websiteObj =websites[w];
        //         if(websiteObj._id === websiteId && websiteObj ===website){
        //             console.log(websiteObj);
        //             websites['name']=website.name;
        //             websites['description']=website.description;
        //         }
        //
        //
        //     }
        //     return website;
        //
        //
        //
        // }
        // function deleteWebsite(websiteId){
        //     console.log('In Delete');
        //     for(var w in websites){
        //         var websiteObj =websites[w];
        //         //console.log('WebsiteId'+websiteId);
        //         console.log('WebsiteId'+websiteObj._id);
        //         if(websiteObj._id===websiteId){
        //             console.log('website id'+websiteObj._id);
        //             var index = websites.indexOf(websiteObj);
        //             console.log('Index'+index);
        //             websites.splice(index,1);
        //
        //         }
        //
        //     }
        //     return websites;
        //
        // }

    }

})()