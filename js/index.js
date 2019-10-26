import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

let data4 = require('../assets/4x4.json');
let data32 = require('../assets/32x32.json');

function processHexColors(data) {
  return data.map(arr => arr.map(color => "#"+color))
}

function processRGBAColors(data) {
  return data.map(arr => arr.map(color => `rgba(${color})`))
}


var canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let select = document.querySelector('select');


function drawLogo() {
  let img = new Image();
  img.addEventListener("load", function() {
    ctx.drawImage(img,0,0);
  });
  img.src = "dist/" + require('../assets/image.png');
  canvas.setAttribute('width',256);
  canvas.setAttribute('height',256);
  
}

function switchImage(event) {
    if(event.target.value === "256x256") {
      drawLogo();
    }
    if(event.target.value === "4x4") {
      drawPixels(processHexColors(data4));
    }
    if(event.target.value === "32x32") {
      drawPixels(processRGBAColors(data32));
    }
}

function drawPixels(data){
  canvas.setAttribute('width',data[0].length);
  canvas.setAttribute('height',data.length);
  for(let row = 0; row < data.length; row++) {
    for(let col = 0; col < data[0].length; col++) {
        ctx.fillStyle = data[row][col]; 
        ctx.fillRect(col, row, 1, 1);
    }
  }
}

select.addEventListener('change', switchImage)


