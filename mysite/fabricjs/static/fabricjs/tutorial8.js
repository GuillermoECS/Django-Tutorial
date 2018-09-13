// Default to true for browsers, false for node, it enables objectCaching at object level.
fabric.Object.prototype.objectCaching = true;
// Enabled to avoid blurry effects for big scaling
fabric.Object.prototype.noScaleCache = true;

//Initialize Fabric.js with our static canvas using "id"
//Canvas without interactivity
var canvas = new fabric.StaticCanvas('canvas');

//Path
var path = new fabric.Path('M 0 0 L 300 100 L 200 300 z');
path.set({ fill: 'red', stroke: 'green', opacity: 0.8 });
canvas.add(path);

//Modify path settings
path.set({ left: 20, top: 50 });
//Update Canvas
canvas.renderAll();

//Circe
var circle = new fabric.Circle({
    radius: 80, fill: 'green', left: 650, top: 100
});

//Triangle
var triangle = new fabric.Triangle({
    width: 200, height: 300, fill: 'blue', left: 500, top: 100
});

//Add Circle and Triangle in Canvas
canvas.add(circle, triangle);  