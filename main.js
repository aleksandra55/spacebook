
var posts = [];

var uniqueId = 0;


var addPost = function(text, id) {
  var newPost = {
    text: text,
    id: id
    };

  posts.push(newPost); 
  uniqueId++;
  console.log(uniqueId)
}
 


var addtoHtml = function() {
  $('.posts').find('.post').remove();
 for (var i = 0; i < posts.length; i++) {
    $('.posts').append("<p class='post' data-id='"+ posts[i].id +"'><a href='#' class='remove'>remove</a>" + posts[i].text + "</p>")
  }

};
$('.posts').on('click', 'p', function(){
       $(this).remove();
       for (var i = 0; i < posts.length; i++) {
         posts.splice(posts[i].id, 1);
       };
      
});
  


$('button').on('click', function() {
  var somePost = $('#post-name').val();
  addPost(somePost, uniqueId);//adds to array
  addtoHtml();//adds to html
});





 

