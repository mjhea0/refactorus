$(document).ready(function() {
  var imageUrl = $('body').find('img').attr('src');
  var imgTag = ["<img src='", imageUrl, "'>"].join('');
  for (var i=1;i<1;i++) {$('#images').append(imgTag);}
});
