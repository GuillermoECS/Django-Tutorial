// Default to true for browsers, false for node, it enables objectCaching at object level.
fabric.Object.prototype.objectCaching = true;
// Enabled to avoid blurry effects for big scaling
fabric.Object.prototype.noScaleCache = true;

//Initialize Fabric.js with our canvas using "id"
var canvas = new fabric.Canvas('canvas');

//File SVG: https://upload.wikimedia.org/wikipedia/commons/f/fd/Ghostscript_Tiger.svg
function upload(e) {
    var fileType = e.target.files[0].type;
    var url = URL.createObjectURL(e.target.files[0]);

    if (fileType === 'image/png') { //check if png
        fabric.Image.fromURL(url, function (png) {
            /*png.set({
                width: 180,
                height: 180
            });*/
            png.scale(0.4);
            // canvas.add(png);
            // Load multiple PNG
            for (var i = 1; i < 4; i++) {
                for (var j = 1; j < 6; j++) {
                    png.clone(function (i, j) {
                        return function (clone) {
                            clone.set({
                                left: i * 200 - 100,
                                top: j * 200 - 100
                            });
                            canvas.add(clone);
                            //animate(clone);
                        };
                    }(i, j));
                }
            }
        });
    } else if (fileType === 'image/svg+xml') { //check if svg
        fabric.loadSVGFromURL(url, function (objects, options) {
            var svg = fabric.util.groupSVGElements(objects, options);
            /*svg.scaleToWidth(180);
            svg.scaleToHeight(180);*/
            // canvas.add(svg);
            // Load multiple SVG
            for (var i = 1; i < 4; i++) {
                for (var j = 1; j < 6; j++) {
                    svg.clone(function (i, j) {
                        return function (clone) {
                            clone.set({
                                left: i * 200 - 100,
                                top: j * 200 - 100
                            });
                            canvas.add(clone);
                            //animate(clone);
                        };
                    }(i, j));
                }
            }
        });
    }
}