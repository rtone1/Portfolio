// CANVAS RAIN ANIMATION // (--SNOW SOON TO COME--)
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

  // Constructor for a Drops object
  function Drop(x, y, color){
    this.x = x;
    this.y = y;
    this.yVel = Math.random() / 2 ;
    this.color = color;

    this.draw = function(){
        ctx.beginPath();
        ctx.fillStyle= color;
        ctx.moveTo(this.x-3,this.y);
        ctx.lineTo(this.x,this.y-5);
        ctx.lineTo(this.x+3,this.y);
        ctx.arc(this.x,this.y,3,0, Math.PI);
        ctx.closePath();
        ctx.fill();
    }

    this.update = function(){
      if (this.y > canvas.height){
        this.y = -100;
      }
      this.y += this.yVel;
    }

  };

// Build a bunch of squares //
var drops = [];
var color = 'rgba(208,231,245,1)';
for (var i = 0; i < 200; i++){
  var x = Math.floor(Math.random() * canvas.width);
  var y = Math.floor(Math.random() * canvas.width);
  var newDrop = new Drop(x, y, color);
  drops.push(newDrop);
}
// Build a bunch of squares //

  function drawDrops(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < drops.length; i++){
      drops[i].update();
      drops[i].draw();
    }
  };

  // FUNCTION TO DISPLAY DROPS EFFECT
  function addWeather(){
    $('.cityImage').addClass('blur');
    $('.cloudsFront').addClass('blur');
    $('.cloudsBack').addClass('blur');
    $('#container1').css({backgroundColor: '#CACBD2'});
    setInterval(drawDrops,15);
  };
