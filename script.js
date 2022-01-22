$(document).ready(function() {

    $(window).scroll(function() {
        if($(window).scrollTop()){
            $("#sticky-id").addClass("white");
            $("#mobile-nav-container").removeClass("responsive");
            $("#mobile-nav-container").addClass("hide-container");
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
    var x = document.getElementById("mobile-nav-container");
    x.classList.toggle("hide-container");
    
    if (x.className === "mobile-nav-container") {
      x.className += " responsive";
    } else {
      x.className = "mobile-nav-container hide-container";    
    }
  }

  function openForm() {
    var form = document.getElementById("form-popup");
    form.classList.toggle("hide-form");
    
    if (form.className != "form-popup") {
      form.className = "form-popup hide-form";    
    }
  }

  function closeForm() {
    var form = document.getElementById("form-popup");

    if (form.className === "form-popup") {
    form.className += " hide-form";
    }  else {
        form.className = "form-popup";
    }  
  }   