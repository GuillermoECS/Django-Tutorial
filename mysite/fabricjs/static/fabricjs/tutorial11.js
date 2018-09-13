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
    left: 480, //Izquierda
    top: 220,  //Arriba
    fill: 'orange', //Color de la figura
    width: 600, //Ancho
    height: 300, //Largo
    originX: 'center',
    originY: 'center'
});

//No borders when is selectable
//rect.hasBorders = false;
//Without control dots
//rect.hasControls = false;

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

//Add overlay image
// canvas.setOverlayImage('https://pre00.deviantart.net/f300/th/pre/f/2016/176/b/9/metal_chain_fence_png_stock_cc1_large_by_annamae22-da7lguz.png', canvas.renderAll.bind(canvas));
