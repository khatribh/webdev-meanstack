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
            "findWebsitesByUser" : findWebsitesByUser

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

    }

})()