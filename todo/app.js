module.exports = function(app){
    var connectionString = 'mongodb://127.0.0.1:27017/local';

    var mongoose = require("mongoose");
    mongoose.connect(connectionString);

    var todoSchema = mongoose.Schema({
        title: String,
        note: String
    }, {collection: 'TodoDB'});

    var todoModel = mongoose.model('todoModel', todoSchema);

    app.get('/lectures/findAllTodos', findAllTodos);
    app.post('/lectures/createTodo', createTodo);
    app.get('/lectures/findTodoById/:todoId', selectTodo);
    app.put('/lectures/updateTodo/:todoId', updateTodo);
    app.delete('/lectures/deleteTodo/:todoId', deleteTodo);

    function findAllTodos(req, res){
        todoModel
            .find()
            .then(function(todos){
                res.json(todos);
            }, function(err) {
                res.sendStatus(404).send(err);
            });
    }

    function createTodo(req, res) {
        var todo = req.body;
        todoModel
            .create(todo)
            .then(function(todos){
                res.json(todos);
            }, function(err) {
                res.sendStatus(404).send(err);
            });
    }

    function selectTodo(req, res) {
        var todoId = req.params.todoId;
        todoModel
            .findOne({_id: todoId})
            .then(function(todo){
                res.json(todo);
            }, function(err) {
                res.sendStatus(404).send(err);
            });
    }

    function updateTodo(req, res) {
        var todoId = req.params.todoId;
        var todo = req.body;
        todoModel
            .update({_id: todoId}, {$set: {
                title: todo.title,
                note: todo.note
            }})
            .then(function(todo){
                res.json(todo);
            }, function(err) {
                res.sendStatus(404).send(err);
            });
    }

    function deleteTodo(req, res) {
        var todoId = req.params.todoId;
        todoModel
            .remove({_id: todoId})
            .then(function(status){
                res.json(status);
            }, function(err) {
                res.sendStatus(404).send(err);
            });
    }
};