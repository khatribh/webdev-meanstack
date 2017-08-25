(function(){
    angular
        .module("WebAppMaker")
        .factory('WebsiteService', websiteService);

    function websiteService(){
        var websites=[
            { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
            { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
            { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
            { "_id": "890", "name": "Go",          "developerId": "123", "description": "Lorem" },
            { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
            { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
            { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }
        ];
        var api= {
            "findWebsitesByUser" : findWebsitesByUser,
            "createWebsite" : createWebsite,
            "findWebsiteById" : findWebsiteById,
            "updateWebsite" : updateWebsite,
            "deleteWebsite" : deleteWebsite

        }
        return api;
        function findWebsitesByUser(userId){
            console.log('Service'+userId);
            var webArr=[];
            for(var w in websites){
                var web=websites[w];
                if(web.developerId===userId){
                    console.log(web);
                    webArr.push(web);
                }
            }
            return webArr;
        }
        function createWebsite(userId, website){
           var length = websites.length;
            var websiteObj = {
                _id: '',
                name: '',
                developerId: '',
                description: ''
            };
            if(website.name!=null && website.description!=null){
                websiteObj['_id']=length;
                websiteObj['name']=website.name;
                websiteObj['developerId']=userId;
                websiteObj['description']=website.description;
                websites.push(websiteObj);

            }
            return websiteObj;
        }
        function findWebsiteById(websiteId){
            for(var w in websites){
                var website =websites[w];
                if(website._id === websiteId){
                    return website;
                }

            }
            return null;

        }
        function updateWebsite(websiteId, website){
            for(var w in websites){
                var websiteObj =websites[w];
                if(websiteObj._id === websiteId && websiteObj ===website){
                    console.log(websiteObj);
                    websites['name']=website.name;
                    websites['description']=website.description;
                }


            }
            return website;



        }
        function deleteWebsite(websiteId){
            console.log('In Delete');
            for(var w in websites){
                var websiteObj =websites[w];
                //console.log('WebsiteId'+websiteId);
                console.log('WebsiteId'+websiteObj._id);
                if(websiteObj._id===websiteId){
                    console.log('website id'+websiteObj._id);
                    var index = websites.indexOf(websiteObj);
                    console.log('Index'+index);
                    websites.splice(index,1);

                }

            }
            return websites;

        }

    }

})()