$(document).ready(function() {

    $(window).scroll(function() {
        if($(window).scrollTop()){
            $("#sticky-id").addClass("white");
        }
        else {
            $("#sticky-id").removeClass("white");
        }
    });

    $(".tablet").tilt( {
        glare: true,
        maxGlare: 0.3,
        perspective: 8000
    });

});

function responsiveNav() {
    var x = document.getElementById("sticky-id");
    if (x.className === "sticky") {
      x.className += " responsive";
    } else {
      x.className = "sticky";
    }
  }