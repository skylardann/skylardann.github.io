$(document).ready(function() {

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

      $(".leftbottom").css("width","150px");

    }

    else if (scrolledPosition >= 353 && scrolledPosition < 1246) {

      $("#infotab").html("My Skills");

      $(".leftbottom").css("width","150px");
    }


    else if (scrolledPosition >= 1343 && scrolledPosition < 2396) {

      $("#infotab").html("My Projects");
          $(".leftbottom").css("width","250px");

    }

  });




});
