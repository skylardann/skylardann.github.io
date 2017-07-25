$(document).ready(function() {

  $(window).on("scroll", function() {

    var scrolledPosition = $(window).scrollTop();
    var width = $('.leftbottom').css('width');
    // console.log(width);

    if (scrolledPosition >= 0 && scrolledPosition < 446 && width !== '250px') {

      $("#infotab").html("Welcome to my site ...");



      $(".leftbottom").animate({
        width: "250px"
      }, 100);

    }

    else if (scrolledPosition >= 447 && scrolledPosition < 1246 && width !== '200px') {

      $("#infotab").html("My Skills");

      $(".leftbottom").animate({
        width: "200px"
      }, 100);

    }


    else if (scrolledPosition >= 1247 && scrolledPosition < 4396 && width !== '100px') {

      $("#infotab").html("Projects");

      $(".leftbottom").animate({
        width: "100px"
      }, 100);

    }


  });


});
