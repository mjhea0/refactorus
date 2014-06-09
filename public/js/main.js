jQuery.fn.center = function () {
  this.css("position","absolute");
  this.css("top", ( $(window).height() - this.height() ) / 2+$(window).scrollTop() + "px");
  this.css("left", ( $(window).width() - this.width() ) / 2+$(window).scrollLeft() + "px");
  return this;
}

$(document).ready(function() {
  // on image click
  $(".profile-images").on('click', function(){
    console.log("run along")
    var profile = $(this).attr('id');
    $("#background").css({"opacity" : "0.7"}).fadeIn("slow");
    $("#large").html(
      '<div class="github-card" data-github="'+profile+'" data-width="400" data-height="150"></div>'+
      '<script src="http://lab.lepture.com/github-cards/widget.js"></script>'
      ).center().fadeIn("slow");
    // on background click
    $("#background").click(function(){
      $("#background").fadeOut("slow");
      $("#large").fadeOut("slow");
    });
    return false;
  });

});

