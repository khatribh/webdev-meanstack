angular
    .module('TodoList',[])
        .controller('TodoController',TodoController)

function TodoController($scope, $http){
    $scope.todoList = [];

    function init() {
        $http.get('/lectures/findAllTodos')
            .then(function(response){
                $scope.todoList=response.data;
                console.log($scope.todoList);
                if($scope.todoList.length < 1) {
                    $scope.notasks = 'No Todo Tasks Found.';
                }
            });
    }
    init();

    $scope.createTodo = createTodo;
    $scope.deleteTodo = deleteTodo;
    $scope.selectTodo = selectTodo;
    $scope.updateTodo = updateTodo;
    $scope.selectedIndex = -1;

    function updateTodo(todo){
        $http.put('/lectures/updateTodo/'+todo._id, todo)
            .then(function(response){
                init();
                $scope.todo = '';
            });
    };

    function selectTodo(todo){
        $http.get('/lectures/findTodoById/'+todo._id)
            .then(function(response){
                $scope.todo = response.data;
            });
    };
    function deleteTodo(todo){
        $http.delete('/lectures/deleteTodo/'+todo._id)
            .then(function(response){
                init();
            });
    };

    function createTodo(todo){
        $http.post('/lectures/createTodo', todo)
            .then(function(response){
                init();
                $scope.todo = '';
            });
    };
}