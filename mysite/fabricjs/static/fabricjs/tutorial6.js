
$(document).ready(function () {

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

    // JQuery code to be added in here.
    $("#exportPNG").click(function () {
        $("#canvas").get(0).toBlob(function (blob) {
            saveAs(blob, "canvas.png");
        });
    });

});