//Initialize Fabric.js with our canvas using "id"
var canvas = new fabric.Canvas('canvas');
var image = ''; //Image
//Add image to canvas
fabric.Image.fromURL('/static/fabricjs/images/logo_solvo.png', function (img) {
    img.scaleToWidth(100);
    img.scaleToHeight(100);
    canvas.add(img);
    image = img;

});

//Move image right
function animateRight() {
    // Move 100 right from the actual position
    image.animate('left', '+=100', {
        onChange: canvas.renderAll.bind(canvas),
        duration: 500
    });
}

//Change multiple attributes
function animateMultipleAttributes() {
    // Move 100 right from the actual position
    image.animate('left', '+=100', {
        onChange: canvas.renderAll.bind(canvas),
        duration: 500
    });
    image.animate('angle', '+=9', {
        onChange: canvas.renderAll.bind(canvas),
        duration: 500
    });
}

//Animation easing effect 
function animationEasingEffect() {
    image.animate('left', '+=100', {
        onChange: canvas.renderAll.bind(canvas),
        duration: 1000,
        easing: fabric.util.ease.easeOutBounce
    });
    image.animate('angle', '+=5', {
        onChange: canvas.renderAll.bind(canvas),
        duration: 1000
    });
}

document.getElementById("animateRight").addEventListener("click", animateRight);
document.getElementById("animateMult").addEventListener("click", animateMultipleAttributes);
document.getElementById("animatEasiEfect").addEventListener("click", animationEasingEffect);

