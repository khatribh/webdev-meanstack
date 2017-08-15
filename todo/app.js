module.exports = function(app){
    app.get('/hello',sayHello);
    app.get('/lectures/todo', readAllTodos);

    var todoList =[
        { title: 'Todo 1', note: 'My Todo 1'},
        { title: 'Todo 2', note: 'My Todo 2'}

    ];
    function readAllTodos(req, res){
        res.json(todoList);

    }

    function sayHello(req,res){
        res.send('Hello World');
    }


};