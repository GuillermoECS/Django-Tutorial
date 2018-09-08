//Initialize Fabric.js with our canvas using "id"
var canvas = new fabric.Canvas('canva');
//Rectangle Shape
//Properties in JSON format
var rect = new fabric.Rect({
    left: 150, //Izquierda
    top: 150,  //Arriba
    fill: 'blue', //Color de la figura
    width: 200, //Ancho
    height: 200, //Largo
    angle: 45, //Rotar 45 grados
    opacity: 0.5,
    selectable: true //NO seleccionable
    // Each object has it own properties
});
canvas.add(rect);

//Move rectangle 10 px right
function moveRight() {
    rect.set({ left: rect.left + 10 });
    canvas.renderAll(); //Re-render the canvas
    //Get some Object properties
    console.log("Left: " + rect.get('left'));
    console.log("Top: " + rect.top);
    console.log("Angle: " + rect.angle);
}

document.getElementById("buttonRight").addEventListener("click", moveRight);
