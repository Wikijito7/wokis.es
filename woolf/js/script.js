var wordmark = document.querySelector('.noti');

var canvas = wordmark.querySelector('.rainbow-name');
var ctx = canvas.getContext('2d');
var trailCount = 100;
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

var nameImage = new Image();
nameImage.onload = onImageLoad;
nameImage.src = "https://cdn.discordapp.com/attachments/277744145110532096/779749185888190474/uwusinfondo.PNG";

function onImageLoad() {
  setColorCanvas( 'peachy', '#ffc0cb' );
  setColorCanvas( 'otherpink', '#ff748c' );
  setColorCanvas( 'another-one', '#ff74a3' );
  setColorCanvas( 'yes', '#f62681' );
  animate();
}

var colorCanvases = {};

function setColorCanvas( name, color ) {
  var colorCanvas = document.createElement('canvas');
  colorCanvas.width = nameImage.width;
  colorCanvas.height = nameImage.height;
  var colorCtx = colorCanvas.getContext('2d');
  colorCtx.drawImage( nameImage, 0, 0 );
  colorCtx.globalCompositeOperation = 'source-in';
  colorCtx.fillStyle = color;
  colorCtx.fillRect( 0, 0, nameImage.width, nameImage.height );
  colorCanvases[ name ] = colorCanvas;
}


var t = 0;
var rainbow = [];

(function() {
  for ( var i=0; i < trailCount; i++ ) {
    rainbow.push(null);
  }
})();

var colorCycle = [ 'peachy', 'otherpink', 'another-one', 'yes' ];

function animate() {
  update();
  render();
  requestAnimationFrame( animate );
}

function update() {
  t++;
  var colorCycleIndex = Math.floor( t / 8 ) % 4;
  var nextColor =  colorCycle[ colorCycleIndex ];
  rainbow.pop();
  rainbow.pop();
  rainbow.pop();
  rainbow.unshift( nextColor );
  rainbow.unshift( nextColor );
  rainbow.unshift( nextColor );
}

function render() {
  ctx.clearRect( 0, 0, canvasWidth, canvasHeight );

  // iterate backwards through rainbow
  for ( var i = rainbow.length-1; i >= 0; i-- ) {
    var color = rainbow[i];
    if ( color ) {
      ctx.drawImage( colorCanvases[ color ], i+1, i+1 );
    }
  }
}
