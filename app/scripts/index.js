var $ = require('jquery');
var models = require('./models');
var views = require('./views');

$(function(){
  var view = new PostView();

  $(document).on('posts:fetched', function(event, posts){
    view.showPosts(posts);
  });

  Post.fetch();


///stuff i've added

function SubmitButtonHandler(){
  $('#submit-button').on('click', function(event, data){
    $(document).trigger('create:post', {title: "new post", body: 'new body'});
    return data;
});

}
  //$(document).on('create: post', function(event, data){
  //  view.showPosts(data);

});


function hello(){
  return 'hello world';
}

module.exports = {"hello": hello};
