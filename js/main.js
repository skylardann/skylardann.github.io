$(document).ready(function() {

  console.log('i am ready');

  $("#logo").addClass("logo");

  $("#dropShadow").addClass("dropShadow");

  $("#photoslanding").addClass("photoslanding");

  $("#about").addClass("about");

  $("#headline").addClass("headline");



  $(window).on("scroll", function() {

    var scrolledPosition = $(window).scrollTop();

    console.log(scrolledPosition);

    if (scrolledPosition >= 0 && scrolledPosition < 446) {

      $("#infotab").html("Welcome to my site ...");



      $(".leftbottom").animate({
        width: "250px"
      }, 100);

    }

    else if (scrolledPosition >= 353 && scrolledPosition < 1246) {

      $("#infotab").html("My Skills");

      $(".leftbottom").animate({
        width: "100px"
      }, 100);

    }


    else if (scrolledPosition >= 1343 && scrolledPosition < 4396) {

      $("#infotab").html("Projects");

      $(".leftbottom").animate({
        width: "100px"
      }, 100);

    }


  });


});
