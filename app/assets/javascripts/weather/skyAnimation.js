  //CHANGE CITY BACKGROUND WITH TIME OF DISPLAY
  var str1 = new Date().toString();
  var str2 = str1.slice(15,-14);
  var time = parseInt(str2);
  var sky = $('#container1');


  function changeSky(){
    if (time >= 7){
      sky.css({backgroundColor: '#F1B056'});
    }
    if (time >= 9) {
      sky.css({backgroundColor: '#4DC9F1'});
    }
    if (time >= 17) {
      sky.css({backgroundColor: '#963f50'});
    }
    if (time >= 18) {
      sky.css({backgroundColor: '#1B2131'});

    }
  };
