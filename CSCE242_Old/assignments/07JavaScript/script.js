


// click listener
document.addEventListener('click', function(event) {
    console.log("clicked");
  if (event.target.id === 'Geometry') {
    const canvas = document.createElement('canvas');
    canvas.width = 200;
    canvas.height = 200;
    const ctx = canvas.getContext('2d');
    console.log("clicked Geo");

    
    // draw red triangle
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(100, 20);
    ctx.lineTo(20, 180);
    ctx.lineTo(180, 180);
    ctx.closePath();
    ctx.fill();
    
    event.target.innerHTML = '';
    event.target.appendChild(canvas);
  }
  
  // Add frame around elm with id frame
  if (event.target.id === 'Frame') {
    event.target.style.border = '3px solid black';
    event.target.style.padding = '10px';

    console.log("clicked frame");

  }
});

document.addEventListener('DOMContentLoaded', () => {
const selectElement = document.querySelector(".date-input");
const result = document.querySelector(".result");
selectElement.addEventListener("change", (event) => {
    console.log("date changed");
  result.textContent = `You changed date to ${event.target.value}`;
});

});
