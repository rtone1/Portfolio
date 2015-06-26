var reader = new FileReader();
var dataToUpload = {};
var summary;
var type;
var link;
var content;

$(document).ready(function(){

  $('.me').hide();
  $('.contact').hide();
// responsive nav ===================
    $('.hamIcon').click(function(){
      $( '.navigation ' ).slideToggle(200);
    });

    $('li').click(function(){
      $( '.removeul' ).hide();
    });



    $(window).resize(function(){
      if ($(window).width() > 750) {
        $('ul').removeAttr('style');
        $('.navigation').removeClass('removeul');
      }else {
        $('.navigation').addClass('removeul');
      }

    });
// add shadow to nav and scroll effects================
    $(window).scroll(function() {

      parallax();

      var scroll = $(document).scrollTop();
      if (scroll >= 60) {
          $('header').addClass('shadow');
      } else {
          $('header').removeClass('shadow');

      }

      // if (scroll > 100){
      //   $('.aboutME').fadeOut('slow');
      // } else {
      //   $('.aboutME').fadeIn('slow');
      // }

      if (scroll > 1700){
        parallaxME();
        $('.me').fadeIn(500);
        $('.contact').fadeIn(500);
        if (scroll > 2052){
          $('.contact').removeAttr('style');
          $('.me').removeAttr('style');
        }
      } else {
        $('.me').fadeOut('slow');
        $('.contact').fadeOut('slow');
      }

    });
// parallax scroll ==================================
     function parallax(){
       var scrolled = $(document).scrollTop() - 115;
       $('#container3').css('top', - scrolled / 2) + 'px';
     }


     function parallaxME(){

          var scrolledY = $(document).scrollTop() - 1950;
          var scrolledY2 = $(document).scrollTop() - 2050;
          $('.me').css('right', + scrolledY) +'px';
          $('.contact').css('left', + scrolledY2) +'px';

      };
// smoth scroll ================================================================
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 1000);
    return false;
});

// d3 data display =============================================================
var div1=d3.select(document.getElementById('div1'));
var div2=d3.select(document.getElementById('div2'));

function onClick1() {
    deselect();
    div1.attr("class","selectedRadial");
}

function onClick2() {
    deselect();
    div2.attr("class","selectedRadial");
}

// function labelFunction(val,min,max) {
//
// }

function deselect() {
    div1.attr("class","radial");
    div2.attr("class","radial");
}

var design = ['w','e'];

function grabData(array){
  array = design;
  var information = $('#txt').val();
  array.push(information);
 // console.log(information);
}

function start() {

  var info = design.length;
  //console.log(info);
  var code = [];
  var info2 = code.length;

    var rp1 = radialProgress(document.getElementById('div1'))
            .label("CODE WORK")
            .onClick(onClick1)
            .diameter(220)
            .value(60)
            .render();

    var rp1 = radialProgress(document.getElementById('div2'))
            .label("DESIGN WORK")
            .onClick(onClick2)
            .diameter(220)
            .value(40)
            .render();

}
start();

// $('#txt').focusout(grabData);
// $('#enter').click(function(){
//   $('#txt').val('');
//   start();
// });

// file reader function ========================================================
    $('#file').on('focusout', function() {
      reader.onload = function (event) {
        try {
            dataToUpload.file = event.target.result;
            console.log(event.target.result);
        } catch (ex) {
            throw new Error("Error Error");
        }
      }

      var file = document.getElementById('file');
      reader.readAsDataURL(file.files[0]);

    });

    var imageData = dataToUpload.file;

// posting work with ajax call ===============================================
    $('#workForm').submit( function (event) {

      summary = $('.category').val();
      type = $('.title').val();
      link = $('.link').val();
      content = $('.description').val();
      image = $('#file').val();
      token = $( "#new_hand" ).val();

      submitData();

    });


    function submitData(){
      var imageData = dataToUpload.file;
      $.ajax({
        method: 'post',
        url: '/api/creations',
        dataType: 'json',
        data: { creation: {category: summary, title: type, linkgithub: link, description: content, image: imageData }, authenticity_token: token },
        success: function(data){
          console.log("data added successfully!");

        }
      });
    };

}); // end of document.ready
