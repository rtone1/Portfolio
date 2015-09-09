// NAME SPACING
var app = app || {};
// VARIABLES
var reader = new FileReader();
var dataToUpload = {};
var summary, type, link, content;
var screenH = $(window).height();

    // FUNCTIONS
    app.introScreen = function(ScreenH){
        var intropage = $('.intro_page');
          intropage.css({ height: ScreenH });
    }; // END OF INTRO PAGE FIT TO SCREEN FUNCTION

    app.animateIntroUp = function(topP,bottP,speed){
        var animateIntro = $('.intro_page');
          animateIntro.animate(({ top: topP,bottom: bottP }), speed);
    }; // END TO ANIMATE INTRO PAGE UP FUNCTION

    app.parallax = function(posit){
        var scrolled = $(document).scrollTop();
        var cityimage = $('#cityview_intro').height();
        console.log(scrolled);
        $(window).scroll(function() {
          // $('.wave1').css('top', - scrolled * 2) + 'px';
          // $('.wave2').css('top', - scrolled * 3) + 'px';
          // $('.wave3').css('top', - scrolled * 4) + 'px';
          // $('.wave4').css('top', - scrolled * 5) + 'px';
          // if (scrolled > 70){$('.wave1').css('top', '-138px');  }
          // if (scrolled > 115) {$('.wave2').css('top', '-345px');}
          // if (scrolled > 137) {$('.wave3').css('top', '-549px');}
          // if (scrolled > 151) {$('.wave4').css('top', '-753px');}
          });
    }; // END OF PARALLAX EFFECTS FUNCTION

    app.delayScroll = function (target, pos ) {
        var windw = $(window);

          $(window).scroll(function(e){
              if (windw.scrollTop() > pos) {
                  target.css({ position: 'absolute',top: pos });
              } else {
                  target.css({ position: 'fixed',top: 0 });
              }
          })
    }; // END OF DELAY SCROLL FUNCTION



$(document).ready(function(){

  // CALL FUNCTIONS
        app.parallax();
        app.delayScroll($('#cityview_intro'), 200);
        app.introScreen(screenH);
  // DOCUMENT EVENTS
  (function(){
    $( window ).resize(function() {
      var intropage = $('.intro_page');
        intropage.css({ height: $(window).height()});
    }); // END OF RESIZE INTRO PAGE TO FIT SCREEN

    $('.arrowDown').on('click', function(){
        app.animateIntroUp('-900px','900px',2000);
        $('.content').show();
        $('.arrow').css({animation: 'stop'});
    }); // END INTRO PAGE UP ANIMATION AND SHOW MAIN CONTENT

    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 1000);
          return false;
    }); // END OF SMOOTH SCROLL EVENT

    $('#cityview_intro').mousemove(function(evt){
        var x = Math.floor(evt.clientX / 10);
        var y = evt.clientY;
    }); // END OF MOUSE COORDS EVENT

  })();

}); // END OF DOCUMENT READY



//   $('.me').hide();
//   $('.contact').hide();
// // responsive nav ===================
//     $('.hamIcon').click(function(){
//       $( '.navigation ' ).slideToggle(100);
//     });
//
//     $('li').click(function(){
//       $( '.removeul' ).hide();
//     });
//
//     $(window).resize(function(){
//       if ($(window).width() > 750) {
//         $('ul').removeAttr('style');
//         $('.navigation').removeClass('removeul');
//       } else {
//         $('.navigation').addClass('removeul');
//       }
//     });
//     if ($(window).width() < 750 ){
//       $('.navigation').addClass('removeul');
//     }
// // add shadow to nav and scroll effects================
//     $(window).scroll(function() {
//
//       parallax();
//       var scroll = $(document).scrollTop();
//       if (scroll >= 60) {
//           $('header').addClass('shadow');
//       } else {
//           $('header').removeClass('shadow');
//
//       }
//
//       // if (scroll > 100){
//       //   $('.aboutME').fadeOut('slow');
//       // } else {
//       //   $('.aboutME').fadeIn('slow');
//       // }
//
//       if (scroll > 1700){
//         parallaxME();
//         $('.me').fadeIn(500);
//         $('.contact').fadeIn(500);
//         if (scroll > 2052){
//           $('.contact').removeAttr('style');
//           $('.me').removeAttr('style');
//         }
//       } else {
//         $('.me').fadeOut('slow');
//         $('.contact').fadeOut('slow');
//       }
//
//     });
// // parallax scroll ==================================
//      function parallax(){
//        var scrolled = $(document).scrollTop() - 115;
//        $('#container3').css('top', - scrolled / 2) + 'px';
//      }
//
//      function parallaxME(){
//           var scrolledY = $(document).scrollTop() - 1950;
//           var scrolledY2 = $(document).scrollTop() - 2050;
//           $('.me').css('right', + scrolledY) +'px';
//           $('.contact').css('left', + scrolledY2) +'px';
//       };
// // smoth scroll ================================================================

//
// // file reader function ========================================================
//     $('#file').on('focusout', function() {
//       reader.onload = function (event) {
//         try {
//             dataToUpload.file = event.target.result;
//             //console.log(event.target.result);
//         } catch (ex) {
//             throw new Error("Error Error");
//         }
//       }
//       var file = document.getElementById('file');
//       reader.readAsDataURL(file.files[0]);
//
//     });
//
//     var imageData = dataToUpload.file;
//
// // posting work with ajax call ===============================================
//     $('#workForm').submit( function (event) {
//
//       summary = $('.category').val();
//       type = $('.title').val();
//       link = $('.link').val();
//       content = $('.description').val();
//       image = $('#file').val();
//       token = $( "#new_hand" ).val();
//
//       submitData();
//
//     });
//
//     function submitData(){
//       var imageData = dataToUpload.file;
//       $.ajax({
//         method: 'post',
//         url: '/api/creations',
//         dataType: 'json',
//         data: { creation: {category: summary, title: type, linkgithub: link, description: content, image: imageData }, authenticity_token: token },
//         success: function(data){
//           console.log("data added successfully!");
//
//         }
//       });
//     };
//
// // my simple slideshow =====================================
//
//   var slides = $('.devslide').find('.developwork');
//   var count = 0;
//
//   $('.developwork').first().addClass("active");
//
//   $('#nextslide').on('click',function(){
//       $(slides[count]).removeClass('active');
//       count = (count + 1) % slides.length;
//       $(slides[count]).addClass("active");
//   });
//
//   $('#prevslide').on('click',function(){
//     $(slides[count]).removeClass("active");
//      count = (count - 1);
//      if(count < 0){
//       count = slides.length - 1;
//     }
//     $(slides[count]).addClass("active");
//   });
//
//   var slides2 = $('.graphslide').find('.graphicswork');
//   var count2 = 0;
//
//   $('.graphicswork').first().addClass("active");
//
//   $('#nextgraph').on('click', function(){
//     $(slides2[count2]).removeClass('active');
//     count2 = (count2 + 1) % slides2.length;
//     $(slides2[count2]).addClass("active");
//   });
//
//   $('#prevgraph').on('click', function(){
//     $(slides2[count2]).removeClass("active");
//      count2 = (count2 - 1);
//      if(count2 < 0){
//       count2 = slides2.length - 1;
//     }
//     $(slides2[count2]).addClass("active");
//   });
