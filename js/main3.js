$(document).ready(function() {

  console.log('i am ready');

  $("#logo").addClass("logo");

  $("#dropShadow").addClass("dropShadow");

  $("#photoslanding").addClass("photoslanding");

  $("#about").addClass("about");

  $("#headline").addClass("headline");

$("nav a").on("clicked", function () {

    $("nav a").removeClass("active");
    $(this).addClass("active");

});


  $(window).on("scroll", function() {

    var scrolledPosition = $(window).scrollTop();
    var width = $('.leftbottom').css('width');
    // console.log(width);

    if (scrolledPosition >= 0 && scrolledPosition < 1246 && width !== '285px') {

      $("#infotab").html("Welcome to my site ...");



      $(".leftbottom").animate({
        width: "285px"
      }, 100);

    }


  });


});
