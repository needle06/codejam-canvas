import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

var canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let select = document.querySelector('select');
var img = document.getElementById("img");
console.log(select.length)

function drawLogo() {
  ctx.clearRect(0,0,256,256)
  canvas.setAttribute('width',256);
  canvas.setAttribute('height',256);
  ctx.drawImage(img,0,0);
}

function switchImage(event) {
  for(let i = 1; i < select.length; i++) {
    if(event.target.value === "256x256") {
      drawLogo();
    }
    if(event.target.value === "4x4") {
      drawPixels();
    }
  }

}
select.addEventListener('change', switchImage)

let data = [
  ["#00BCD4", "#FFEB3B","#FFEB3B","#00BCD4"],
  ["#FFEB3B", "#FFC107","#FFC107","#FFEB3B"],
  ["#FFEB3B", "#FFC107","#FFC107","#FFEB3B"],
  ["#00BCD4", "#FFEB3B","#FFEB3B","#00BCD4"]
]

// for (let i =0; i<data.length; i++) {
//   data[i].map(color => "#"+color)
// }
// let pixelsColor = data.forEach(arr => {
//   return arr.map(color => "#"+color)
//  })

console.log(data[0].map(el=>"#"+el))
console.log(data)

// let myImageData = ctx.createImageData(width, height);

function drawPixels(){
  ctx.clearRect(0,0,4,4)
  canvas.setAttribute('width',4);
  canvas.setAttribute('height',4);
  for(let row = 0; row < data.length; row++) {
    for(let col = 0; col < data[0].length; col++) {
        ctx.fillStyle = data[row][col]; // Set the color to the one specified
        ctx.fillRect(col, row, 4, 4); // Actually draw the rectangle
    }
}
}