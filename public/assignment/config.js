(function() {
    angular
        .module("WebAppMaker")
        .config(Config);
    function Config($routeProvider) {
        $routeProvider
            .when("/login", {
                templateUrl: "views/user/templates/login.view.client.html",
                controller: 'loginController',
                controllerAs: 'model'
            })
            .when("/user/:uid", {
                templateUrl: "views/user/templates/profile.view.client.html",
                controller : 'profileController',
                controllerAs : 'model'
            })
            .when("/register", {
                templateUrl: "views/user/templates/register.view.client.html",
                controller : 'registerController',
                controllerAs : 'model'
            })
            .when("/user/:uid/website", {
                templateUrl: "views/website/templates/website-list.view.client.html",
                controller : 'websiteController',
                controllerAs : 'model'
            })
            .when("/", {
                templateUrl: "views/user/templates/login.view.client.html",
                controller: 'loginController',
                controllerAs: 'model'
            })
            .otherwise({
                templateUrl: "views/user/templates/login.view.client.html",
                controller: 'loginController',
                controllerAs: 'model'
            })

    }
})();
