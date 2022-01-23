// JQUERY
$(document).ready(function() {

  // Creates a sticky scroll bar and also removes the mobile nav if scrolled
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

    // Adds the tilt.js effect on the "tablet"
    $(".tablet").tilt( {
        glare: true,
        maxGlare: 0.3,
        perspective: 8000
    });

    // Removes the tilt.js effect when viewing on mobile
    $("html").ready(function() {
      if($(window).width() <= 768) {
        $("#tablet").addClass("hide-tilt");
        console.log("added class");
      } else {
        $("#tablet").removeClass("hide-tilt");
        console.log("removed class");
      }
    });

    $(window).resize(function() {
      if($(window).width() <= 768) {
        $("#tablet").addClass("hide-tilt");
      } else {
        $("#tablet").removeClass("hide-tilt");
      }
    });

});
// END OF JQUERY

// NORMAL JAVASCRIPT
// Opens the mobile menu
function responsiveNav() {
    var x = document.getElementById("mobile-nav-container");
    x.classList.toggle("hide-container");
    
    if (x.className === "mobile-nav-container") {
      x.className += " responsive";
    } else {
      x.className = "mobile-nav-container hide-container";    
    }
  }

  // Opens the contact form
function openForm() {
  var form = document.getElementById("form-popup");
  form.classList.toggle("hide-form");
    
  if (form.className != "form-popup") {
    form.className = "form-popup hide-form";    
  }
}

// Closes the contact form
function closeForm() {
  var form = document.getElementById("form-popup");

  if (form.className === "form-popup") {
  form.className += " hide-form";
  }  else {
      form.className = "form-popup";
  }  
}  

// Allows me to use Swup library for some nice transitions
const swup = new Swup()

// END OF NORMAL JAVASCRIPT