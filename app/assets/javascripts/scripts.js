$(window).load(function(e){
    $('.loader_ctn').fadeOut(500);
    $('div.content_wrapper').css({display: 'block'});
});

(function(){

    var app = angular.module('portfolioApp', []);

    app.controller('PortfolioController', ['$scope', function($scope){

        // FUNCTION TO ANIMATE CLOUDS WHEN USER HOVERS
        // $scope.letThemMove = function($event){
        //     var x = $event.clientX;
        //     var moveX = x / 100;
        //     $('.cloud_foreFront').css({left: -moveX, transition: .2 + "s"});
        //     $('.cloud_backGround').css({left: moveX, transition: .2 + "s"});
        // };

    }]); // END OF MAIN PORTFOLIO CONTROLLER

    app.directive("scroll", function ($window) {
        return function(scope, element, attrs) {
            angular.element($window).bind("scroll", function() {
              if (this.pageYOffset > 0) {
                  scope.changeClass = true;
              } else {
                  scope.changeClass = false;
              }
                scope.$apply();
            });
        };
    });




    var greetings = ['hola','ciao','hello'];
    var countGreet = 0;


    function animeGreet(){
        var txt = greetings[countGreet];
        $('span.greet_anime').addClass('animeGreet');
        $('span.greet_anime').empty();
        $('span.greet_anime').append(txt);
        countGreet++;
        if (countGreet == greetings.length){ countGreet = 0; }
    }
    // setInterval(animeGreet,5000);





})(); // END OF SELF CALL CLOSURE

//=============================================================================//



// var reader = new FileReader();
// var dataToUpload = {};
// var summary;
// var type;
// var link;
// var content;

// // FUNCTIONS
// function flashAlertEmail(){
//
// };



// function alertEmptyfield(){
//     var textfield = $('.username').val();
//       if (textfield == false){
//         $('.username').attr('placeholder', 'name required');
//         $('.nameAlert').addClass('alert');
//       } else {
//         return true;
//       }
// };

// $(document).ready(function(){
//
//   $('.contactForm').on('submit', function(evt){
//       var emailfield = $('.emailcheck').val();
//       var varified = /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$/;
//       if (varified.test(emailfield) && alertEmptyfield() == true){
//         $(this).unbind(evt);
//       } else {
//         evt.preventDefault();
//         $('.emailcheck').attr('placeholder', 'valid email required');
//         $('.emailAlert').text('Email must contain @ .').addClass('alert');
//         alertEmptyfield();
//       }
//   });
//
//
//   $('.me').hide();
//   $('.contact').hide();
// // responsive nav ===================
//     $('.hamIcon').click(function(){
//       $('.navigation').css({height: $(window).height() + 'px'});
//       $( '.navigation ' ).slideToggle(100);
//       $('.hamIcon').toggleClass('xmark');
//     });
//
//     $('li').click(function(){
//       $( '.removeul' ).hide();
//       $('.hamIcon').removeClass('xmark');
//       $('.hamIcon').addClass('hamIcon');
//     });
//
//     $(window).resize(function(){
//       if ($(window).width() > 750) {
//         $('ul').removeAttr('style');
//         $('.navigation').removeClass('removeul');
//         $('.hamIcon').removeClass('xmark');
//       } else {
//         $('.navigation').addClass('removeul');
//       }
//     });
//     if ($(window).width() < 750 ){
//       $('.navigation').addClass('removeul');
//     }
//

// // add shadow to nav and scroll effects================
//     $(window).scroll(function() {
//       parallax();
//       var scroll = $(document).scrollTop();
//       if (scroll >= 60) {
//           $('header').addClass('shadow');
//       } else {
//           $('header').removeClass('shadow');
//       }
//       if (scroll > 1690){
//         parallaxME();
//         $('.me').fadeIn(500);
//         $('.contact').fadeIn(500);
//         if (scroll > 2000){
//           $('.me').removeAttr('style');
//         }
//         if (scroll > 2040){
//           $('.contact').removeAttr('style');
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
//     // $('a').click(function(){
//     //     $('html, body').animate({
//     //         scrollTop: $( $(this).attr('href') ).offset().top
//     //     }, 1000);
//     //     return false;
//     // });
//     //
//     // $('.navlink').click(function(){
//     //     $('.linkActive').removeClass('linkActive');
//     //     $(this).addClass('linkActive');
//     // });
//
//     // Cache selectors
//     var lastId,
//         topMenu = $("nav"),
//         topMenuHeight = topMenu.outerHeight() + 4,
//         // All list items
//         menuItems = topMenu.find("a"),
//         // Anchors corresponding to menu items
//         scrollItems = menuItems.map(function(){
//           var item = $($(this).attr("href"));
//           if (item.length) { return item; }
//         });
//
//     // Bind click handler to menu items
//     // so we can get a fancy scroll animation
//     menuItems.click(function(e){
//       var href = $(this).attr("href"),
//           offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
//       $('html, body').stop().animate({
//           scrollTop: offsetTop
//       }, 500);
//       e.preventDefault();
//     });
//
//     // Bind to scroll
//     $(window).scroll(function(){
//        // Get container scroll position
//        var fromTop = $(this).scrollTop()+topMenuHeight;
//
//        // Get id of current scroll item
//        var cur = scrollItems.map(function(){
//          if ($(this).offset().top < fromTop)
//            return this;
//        });
//        // Get the id of the current element
//        cur = cur[cur.length-1];
//        var id = cur && cur.length ? cur[0].id : "";
//
//        if (lastId !== id) {
//            lastId = id;
//            // Set/remove active class
//            menuItems
//              .find('.navlink').removeClass("linkActive")
//              .end().filter("[href=#"+id+"]").find('.navlink').addClass("linkActive");
//        }
//     });
//
//
//
// // d3 data display =============================================================
// var div1=d3.select(document.getElementById('div1'));
// var div2=d3.select(document.getElementById('div2'));
//
// function onClick1() {
//     deselect();
//     div1.attr("class","selectedRadial");
// }
//
// function onClick2() {
//     deselect();
//     div2.attr("class","selectedRadial");
// }
//
// function deselect() {
//     div1.attr("class","radial");
//     div2.attr("class","radial");
// }
//
// var design = ['w','e'];
//
// function grabData(array){
//   array = design;
//   var information = $('#txt').val();
//   array.push(information);
//  // console.log(information);
// }
//
// function start() {
//
//   var info = design.length;
//   //console.log(info);
//   var code = [];
//   var info2 = code.length;
//
//     var rp1 = radialProgress(document.getElementById('div1'))
//             .label("CODE WORK")
//             .onClick(onClick1)
//             .diameter(220)
//             .value(60)
//             .render();
//
//     var rp1 = radialProgress(document.getElementById('div2'))
//             .label("DESIGN WORK")
//             .onClick(onClick2)
//             .diameter(220)
//             .value(40)
//             .render();
//
// }
// start();
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
//         }
//       });
//     };
//
// // my simple slideshow =====================================
//
//   var slides = $('.devslide').find('.developwork');
//   var count = 0;
//
//   $(slides[count]).show();
//   $('#nextslide').on('click',function(){
//         $(slides[count]).fadeOut();
//         count = (count + 1) % slides.length;
//         $(slides[count]).fadeIn();
//   });
//
//   $('#prevslide').on('click',function(){
//         $(slides[count]).fadeOut();
//         count = (count - 1);
//         if(count < 0){
//          count = slides.length - 1;
//         }
//         $(slides[count]).fadeIn();
//   });
//
//
//   var slides2 = $('.graphslide').find('.graphicswork');
//   var count2 = 0;
//
//   $(slides2[count2]).show();
//   $('#nextgraph').on('click', function(){
//     $(slides2[count2]).fadeOut();
//     count2 = (count2 + 1) % slides2.length;
//     $(slides2[count2]).fadeIn();
//   });
//
//   $('#prevgraph').on('click', function(){
//     $(slides2[count2]).fadeOut();
//     count2 = (count2 - 1);
//     if(count2 < 0){
//      count2 = slides2.length - 1;
//     }
//     $(slides2[count2]).fadeIn();
//   });
//
//   $('.profile-display').show();
//
//
//   // Email and Banners common js
//
//
// }); // end of document.ready
