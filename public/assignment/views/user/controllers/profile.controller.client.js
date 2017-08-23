(function(){
    angular
        .module("WebAppMaker")
        .controller('profileController', profileController)

    function profileController($routeParams, UserService,$location){
        var vm= this;
        vm.update =update;

        vm.website = website;

       var userId = $routeParams ['uid'];

       //console.log(userId);
        function init() {
            vm.user = UserService.findUserById(userId);
        }
        init();

       //console.log(vm.user);

       function update(){

           var obj = UserService.updateUser(userId,vm.user);
           console.log(obj);
           if(obj!= null){
               vm.message = 'User Updated Successfully';
           }

       }
        function website(){
            console.log(userId);


            $location.url('/user/'+ userId+'/website');
            //     else{
            //         vm.error = 'User Not Found';
            //     }j
        }



    }
})();