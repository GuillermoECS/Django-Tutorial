// Default to true for browsers, false for node, it enables objectCaching at object level.
fabric.Object.prototype.objectCaching = true;
// Enabled to avoid blurry effects for big scaling
fabric.Object.prototype.noScaleCache = true;

//Initialize Fabric.js with our static canvas using "id"
var canvas = new fabric.Canvas('canvas', {
    preserveObjectStacking: true, //active object never place on top
});

//Size settings
//canvas.setHeight(4);
//canvas.setWidth(800);
//canvas.renderAll();

//Selection settings
canvas.selectionColor = 'rgba(0,255,0,0.3)';
canvas.selectionBorderColor = '#fe7f00';
canvas.selectionLineWidth = 2;

//Canvas background color
canvas.backgroundColor = 'rgba(0,0,255,0.3)';

//Rectangle Shape
//Properties in JSON format
var rect = new fabric.Rect({
    left: 100, //Izquierda
    top: 150,  //Arriba
    fill: 'red', //Color de la figura
    width: 200, //Ancho
    height: 200 //Largo
});

//Modify settings of a selectable object
rect.set({
    transparentCorners: false,
    cornerColor: '#00ff93',
    cornerStrokeColor: '#fe7f00',
    borderColor: 'black',
    cornerSize: 12,
    padding: 10,
    cornerStyle: 'circle',
    borderDashArray: [8, 8]
});

canvas.add(rect);

//Control zoom and panning
canvas.on('mouse:wheel', function (opt) {
    var delta = opt.e.deltaY;
    var pointer = canvas.getPointer(opt.e);
    var zoom = canvas.getZoom();
    zoom = zoom + delta / 200;
    if (zoom > 20) zoom = 20;
    if (zoom < 0.01) zoom = 0.01;
    canvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
    opt.e.preventDefault();
    opt.e.stopPropagation();
});
