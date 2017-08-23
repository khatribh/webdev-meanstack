(function(){
   angular
       .module("WebAppMaker")
       .factory('UserService',userService);

    function userService(){
       var users = [
           {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder", email: "alice@wonderland.com" },
           {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley", email: "bob@marley.com" },
           {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia", email: "charly@garcia.com" },
           {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi", email: "jose@annunzi.com" }
       ];

       var api= {
           "findUserByCredentials" : findUserByCredentials,
           "findUserById" : findUserById,
           "createUser" : createUser,
           "updateUser" : updateUser
       }
       return api;

       function findUserByCredentials(username,password){
            for(var u in users){
                var user =users[u];
                if(user.username === username &&
                  user.password === password){
                    return user;
                }

            }
            return null;
       }
        function findUserById(uid){
            for(var u in users){
                var user =users[u];
                if(user._id === uid){
                    return user;
                }

            }
            return null;
        }
        function createUser(user){
            var length=users.length;
            var userObj = {
                _id: '',
                username: '',
                password: ''
            };

            if(user.password === user.verifypassword){
                userObj['_id'] = length;
                userObj['username'] = user.username;
                userObj['password'] = user.password;
                users.push(userObj);
            }
            return userObj;

        }
        function updateUser(userId, user){
            var obj = findUserById(userId);
            if(obj!= user && obj === user){
                users['email']=user.email;
                users['username']=user.username;
                users['firstName']=user.firstName;
                users['lastName']=user.lastName;
            }
            return user;
        }
    }
})()