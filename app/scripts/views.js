var $ = require('jquery');

function PostView(){
  $('body').append('<ul class="posts">');
}

PostView.prototype.showPosts = function(posts){
  posts.forEach(function(post){
    $('.posts').append('<li><h1>' + post.title + '</h1><p>' + post.body + '</p></li>');
  });
};

global.PostView = PostView;


//stuff i've added
function CreatePost(){
  $('.posts').append('<li class="new post">');
}


CreatePost.prototype.showPost = function(posts){};
