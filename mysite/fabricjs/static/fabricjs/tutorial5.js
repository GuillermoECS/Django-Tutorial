//Initialize Fabric.js with our canvas using "id"
var canvas = new fabric.Canvas('canvas');
var image = ''; //Image
//Add image to canvas
fabric.Image.fromURL('/static/fabricjs/images/logo_solvo.png', function (img) {
    img.scaleToWidth(100);
    img.scaleToHeight(100);
    canvas.add(img);
    image = img;

    //Event Handler by using "on" (Similar to Jquery)
    // Event selected, it fire on a click in image
    image.on('selected',function(){
        // User has to deselect that object and select again in order to fire the event twice
        console.log('Selected!');
    })
    // Event scaling, it fire a lot of times when you scale the image
    image.on('scaling',function(){
        console.log('Scaling!');
    })
    // Event scaling, it fire once when you scale or move the image
    image.on('modified',function(){
        console.log('Modified!');
    })
});

