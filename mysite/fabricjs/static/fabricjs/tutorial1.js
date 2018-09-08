//Initialize Fabric.js with our canvas using "id"
var canvas = new fabric.Canvas('canva');
//Rectangle Shape
//Properties in JSON format
var rect = new fabric.Rect({
    left: 100, //Izquierda
    top: 150,  //Arriba
    fill: 'red', //Color de la figura
    width: 200, //Ancho
    height: 200 //Largo
});
canvas.add(rect);

//Move rectangle 10 px right
function moveRight() {
    rect.set({ left: rect.left + 10}); 
    canvas.renderAll(); //Re-render the canvas
}

document.getElementById("buttonRight").addEventListener("click", moveRight);
