// Default to true for browsers, false for node, it enables objectCaching at object level.
fabric.Object.prototype.objectCaching = true;
// Enabled to avoid blurry effects for big scaling
fabric.Object.prototype.noScaleCache = true;

//Initialize Fabric.js with our static canvas using "id"
//Canvas without interactivity
var canvas = new fabric.StaticCanvas('canvas');

//Title Text
var shadowText = new fabric.Text("I'm a text with shadow", {
    shadow: 'rgba(0,0,0,0.3) 5px 5px 5px',
    fontSize: 80,
    fontWeight: 'bold',
    textAlign: 'center',
    left: 80
});

//Multiline text
var multilineText = 'This is\na multiline\ntext\naligned left!';
var alignedRightText = new fabric.Text(multilineText, {
    textAlign: 'left',
    left: 80,
    top: 150
});

canvas.add(shadowText);
canvas.add(alignedRightText);

//Circle with gradient
var circle = new fabric.Circle({
    left: 500,
    top: 120,
    radius: 150
});

//Left-to-right red-blue gradient
circle.setGradient('fill', {
    x1: 0,
    y1: 0,
    x2: circle.width,
    y2: 0,
    colorStops: {
        0: "red",
        1: "blue"
    }
});

canvas.add(circle);

//Canvas events , only works with interactive canvas on
circle.on('selected', function() {
    console.log('selected a circle');
});