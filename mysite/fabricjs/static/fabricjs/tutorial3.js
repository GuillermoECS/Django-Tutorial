//Initialize Fabric.js with our canvas using "id"
var canvas = new fabric.Canvas('canvas');
//Add image to canvas
fabric.Image.fromURL('/static/fabricjs/images/logo_solvo.png', function (img) {
    img.scaleToWidth(400);
    img.scaleToHeight(400);
    canvas.add(img);
});


