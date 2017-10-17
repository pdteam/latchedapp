$(window).on("load",function(){ "use strict";
    $(".loader").fadeOut(800);
});
// loader start
// loader end
jQuery(function ($) {
    "use strict";

    //scroll sections on clicking Links
    $(".scroll").on('click', function (event) {
        event.preventDefault();
        $('html,body').animate({scrollTop: $(this.hash).offset().top}, 1000);
    });
    //scroll nav colors
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 70) { // Set position from top to add class
            $('.navbar').addClass("shrink");
            $('.green .navbar-brand> img').attr('src', 'img/logo.png');
            $("#index5 #menu_bars").addClass('active2');

        }
        else {
            $('.navbar').removeClass("shrink");
            $('.green .navbar-brand> img').attr('src', 'img/logo.png');
            $("#index5 #menu_bars").removeClass('active2');
        }


    });
    // Push Menus
    var $menuLeft = $(".pushmenu-left");
    var $menuRight = $(".pushmenu-right");
    var $toggleleft = $("#menu_bars.left");
    var $toggleright = $("#menu_bars.right");
    $toggleright.on("click", function() {
        $(this).toggleClass("active");
        $(".pushmenu-push").toggleClass("pushmenu-push-toleft");
        $menuRight.toggleClass("pushmenu-open");
        $("body").toggleClass("pushmenu-push-toLeft");
        $(".navbar").toggleClass("navbar-right");
        return false;
    });
    

    /* ================================== cover sliders start ============================ */

     

    /* ================================== cover sliders end ============================ */

    /* map end*/

    if ($('#g-map').hasClass('green')){
        Map("markeryellow.png");
    }
    // navbar styling
    $(function(){
      var $window = $(window).on('resize', function(){
            var height = $('.navbar-header').height();
            $('.navbar-nav').height(height);


        }).trigger('resize'); //on page load

    });

 
    // progress bars
    $('.progress .progress-bar').css("width",
        function() {
            return $(this).attr("aria-valuenow") + "%";
     });


    // gradient layout
    function checkGradeient() {
        //gradient animations
        var colors = new Array(
            [62,35,255],
            [60,255,60],
            [255,35,98],
            [45,175,230],
            [255,0,255],
            [255,128,0]);

        var step = 0;
//color table indices for:
// current color left
// next color left
// current color right

// next color right
        var colorIndices = [0,1,2,3];


        setInterval(updateGradient,10);
    }

    if($('body').hasClass("gradientLayout")){
        checkGradeient()
    }


});