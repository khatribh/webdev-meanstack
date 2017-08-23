(function(){
    angular
        .module("WebAppMaker")
        .controller('loginController', loginController)

    function loginController(UserService,$location){
       var vm= this;
       vm.login = login;

       function login(user){
           //console.log(user);
           var loginUser = UserService.findUserByCredentials(user.username,user.password);
           if(loginUser!= null){
                $location.url('/user/'+ loginUser._id);
           }
           else{
                vm.error = 'User Not Found';
           }
       }
    }
})();