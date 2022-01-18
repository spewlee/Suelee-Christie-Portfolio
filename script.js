$(document).ready(function() {

    $(".tablet").scroll(function() {
        if($(".tablet").scrollTop()){
            $("#sticky-id").addClass("white");
        }
        else {
            $("#sticky-id").removeClass("white");
        }
    })

    $(".tablet").tilt( {
        glare: true,
        maxGlare: 0.3,
        perspective: 8000
    });








});