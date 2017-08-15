angular
    .module('TodoList',[])
        .controller('TodoController',TodoController)

function TodoController($scope, $http){
    $scope.todoList = [];

    $http.get('/lectures/todo')
        .then(function(response){
            console.log(response);
            $scope.todoList=response.data;
        });

    $scope.createTodo = createTodo;
    $scope.deleteTodo = deleteTodo;
    $scope.selectTodo = selectTodo;
    $scope.updateTodo = updateTodo;
    $scope.selectedIndex = -1;

    function updateTodo(todo){
        $scope.todoList[$scope.selectedIndex].title = todo.title;
        $scope.todoList[$scope.selectedIndex].note = todo.note;
    };

    function selectTodo(todo){
        $scope.selectedIndex = $scope.todoList.indexOf(todo);
        $scope.todo = {};
        $scope.todo.title = todo.title;
        $scope.todo.note = todo.note;
    };
    function deleteTodo(todo){
        var index = $scope.todoList.indexOf(todo);
        console.log(index);
        $scope.todoList.splice(index, 1);
    };

    function createTodo(todo){
        var newTodo = {
            title : todo.title,
            note : todo.note
        };
        $scope.todoList.push(newTodo);
    };
}