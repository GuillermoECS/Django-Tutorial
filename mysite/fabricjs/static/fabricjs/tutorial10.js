// Default to true for browsers, false for node, it enables objectCaching at object level.
fabric.Object.prototype.objectCaching = true;
// Enabled to avoid blurry effects for big scaling
fabric.Object.prototype.noScaleCache = true;

//Initialize Fabric.js with our static canvas using "id"
//Canvas without interactivity
var canvas = new fabric.Canvas('canvas', {
    preserveObjectStacking: true, //active object never place on top
});
//Canvas in Json
var canvasJSON = '';

//Group #1
//Rectangle Shape
//Properties in JSON format
var rect = new fabric.Rect({
    left: 190, //Izquierda
    top: 70,  //Arriba
    fill: 'green', //Color de la figura
    width: 600, //Ancho
    height: 300, //Largo
    originX: 'center',
    originY: 'center'
});
rect.set({ left: rect.left + 10 });

var text = new fabric.Text('hello world', {
    fontSize: 40,
    left: 300,
    top: 50,
    originX: 'center',
    originY: 'center'
});

var group = new fabric.Group([rect, text], {
    left: 180,
    top: 70
});

//Add group
canvas.add(group);

// Group #2
var circle = new fabric.Circle({
    radius: 100,
    fill: '#eef',
    scaleY: 0.5,
    originX: 'center',
    originY: 'center'
});

var text = new fabric.Text('hello world', {
    fontSize: 30,
    originX: 'center',
    originY: 'center'
});

var group1 = new fabric.Group([circle, text], {
    left: 220,
    top: 180,
    angle: -10
});

canvas.add(group1);

//Update group #2
group1.item(0).fill = "red";

//Bring to front some object
canvas.bringToFront(group1);

//Add rectangle at 100px off the center of a group AND update group's dimensions
group.add(new fabric.Rect({
    left: group.get('left') - 80,
    top: group.get('top') - 60,
    fill: 'yellow', //Color de la figura
    width: 250, //Ancho
    height: 10, //Largo
    originX: 'center',
    originY: 'center'
}));

//Subclassing
//Rectangle with label
var LabeledRect = fabric.util.createClass(fabric.Rect, {

    type: 'labeledRect',

    initialize: function (options) {
        options || (options = {});

        this.callSuper('initialize', options);
        this.set('label', options.label || '');
    },

    toObject: function () {
        return fabric.util.object.extend(this.callSuper('toObject'), {
            label: this.get('label')
        });
    },

    _render: function (ctx) {
        this.callSuper('_render', ctx);

        ctx.font = '20px Helvetica';
        ctx.fillStyle = '#333';
        ctx.fillText(this.label, -this.width / 2, -this.height / 2 + 20);
    }
});

//S
var labeledRect = new LabeledRect({
    width: 130,
    height: 50,
    left: 530,
    top: 250,
    label: 'Subclassing',
    fill: '#faa'
});

//It doesnt work with deserialization
//canvas.add(labeledRect);




//Serialization
function serialization() {
    alert("Serializating");
    // Canvas Object to JSON
    // Less complex path object
    // canvasJSON=JSON.stringify(canvas);

    // More complex path object
    canvasJSON = JSON.stringify(canvas.toDatalessJSON());

    // remove all objects and re-render
    canvas.clear().renderAll();
    //console.log(canvasJSON);
}
//Deserialization
function deSerialization() {
    alert("DeSerializating");
    //console.log(canvasJSON);
    canvas.loadFromJSON(canvasJSON);
}

//Actions in buttons
document.getElementById("serialization").addEventListener("click", serialization);
document.getElementById("deSerialization").addEventListener("click", deSerialization);