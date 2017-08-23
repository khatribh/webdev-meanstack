(function(){
    angular
        .module("WebAppMaker")
        .controller('registerController', registerController);

    function registerController(UserService,$location){
        var vm= this;
        vm.register = register;

        function register(user){
            console.log(user);
            var registerUser = UserService.createUser(user);
            console.log(registerUser);
            if(registerUser!= null){
                $location.url('/profile/'+ registerUser._id);
            }
            else{
                vm.error = 'Registration Failed';
            }
        }
    }
})();