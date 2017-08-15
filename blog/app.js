module.exports = function(app){
    app.get('/lectures/blog', readAllBlogs);

    var blogPost=[

        {title:'Post 1', content: 'My Post 1'},
        {title:'Post 2', content: 'My Post 2'},
        {title:'Post 3', content: 'My Post 3'},
        {title:'Post 4', content: 'My Post 4'},
        {title:'Post 5', content: 'My Post 5'},



    ];
    function readAllBlogs(req,res){
        res.send(blogPost);
    }
};