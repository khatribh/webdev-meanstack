angular
    .module('BlogApp',[])
    .controller('BlogController', BlogController)

function BlogController($scope,$http){
    $scope.blogPost = [];

    $http.get('/lectures/blog')
        .then(function(response){
            console.log(response);
            $scope.blogPost=response.data;
        });
    $scope.createBlog = createBlog;
    $scope.deleteBlog = deleteBlog;
    $scope.selectBlog = selectBlog;
    $scope.updateBlog = updateBlog;
    $scope.selectedIndex = -1;

    function updateBlog(post){
        $scope.blogPost[$scope.selectedIndex].title = post.title;
        $scope.blogPost[$scope.selectedIndex].content = post.content;
    };

    function selectBlog(post){
        $scope.selectedIndex = $scope.blogPost.indexOf(post);
        $scope.post = {};
        $scope.post.title = post.title;
        $scope.post.content = post.content;
    };
    function deleteBlog(post){
        var index = $scope.blogPost.indexOf(post);
        console.log(index);
        $scope.blogPost.splice(index, 1);
    };

    function createBlog(post){
        var newBlog = {
            title : post.title,
            content : post.content
        };
        $scope.blogPost.push(newBlog);
    };
}