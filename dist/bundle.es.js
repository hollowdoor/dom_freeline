import css from 'dom-css';

function createCoordinates(line, coords){
    if ( coords === void 0 ) coords = {};


    //console.log(coords)
    /*['x1', 'y1', 'x2', 'y2'].forEach(key=>{
        if(Number.isNaN(coords[key])){
            coords[key] = 0;
        }
    });*/

    //const setDOMCoords = (x, y, length, angle) =>{
    function setDOMCoords(x, y, length, angle){
        line.element.style.width = length + 'px';
        line.element.style.transform = 'rotate(' + angle + 'rad)';
        line.element.style.top = y + 'px';
        line.element.style.left = x + 'px';
    }

    function setLineCoords(){

        var x1 = coords.x1;
        var y1 = coords.y1;
        var x2 = coords.x2;
        var y2 = coords.y2;

        var a = x1 - x2,
            b = y1 - y2,
            c = Math.sqrt(a * a + b * b);

        var sx = (x1 + x2) / 2,
            sy = (y1 + y2) / 2;

        var x = sx - c / 2,
            y = sy;

        var alpha = Math.PI - Math.atan2(-b, a);

        return setDOMCoords(x, y, c, alpha);
    }

    setLineCoords();

    return Object.create(null, {
        x1: {
            get: function get(){
                return coords.x1;
            },
            set: function set(_x1){
                coords.x1 = parseInt(_x1);
                setLineCoords();
            }
        },
        x2: {
            get: function get(){
                return coords.x2;
            },
            set: function set(_x2){
                coords.x2 = parseInt(_x2);
                setLineCoords();
            }
        },
        y1: {
            get: function get(){
                return coords.y1;
            },
            set: function set(_y1){
                coords.y1 = parseInt(_y1);
                setLineCoords();
            }
        },
        y2: {
            get: function get(){
                return coords.y2;
            },
            set: function set(_y2){
                coords.y2 = parseInt(_y2);
                setLineCoords();
            }
        }
    });

}

function setCss(line, styles){
    if(styles.hasOwnProperty('width')){
        line.width = styles.width;
        //this.element.style.height = styles.width + 'px';
        delete styles.width;
    }

    if(styles.hasOwnProperty('height')){
        delete styles.height;
    }

    css(line.element, styles);
}

var DOMFreeLine = function DOMFreeLine(element, ref){
    if ( ref === void 0 ) ref = {};
    var x1 = ref.x1; if ( x1 === void 0 ) x1 = 0;
    var y1 = ref.y1; if ( y1 === void 0 ) y1 = 0;
    var x2 = ref.x2; if ( x2 === void 0 ) x2 = 0;
    var y2 = ref.y2; if ( y2 === void 0 ) y2 = 0;
    var width = ref.width; if ( width === void 0 ) width = 1;

    this.element = element;

    this.element.style.backgroundColor = 'black';
    this.element.style.height = width + 'px';
    this.element.style.position = 'absolute';

    this._coords = createCoordinates(this, {
        x1: x1, y1: y1, x2: x2, y2: y2
    });
};

var prototypeAccessors = { width: {},x1: {},x2: {},y1: {},y2: {} };
DOMFreeLine.prototype.clone = function clone (coords){
        if ( coords === void 0 ) coords = {};

    return new (this.constructor)(
        this.element.cloneNode(true),
        Object.assign({
            x1: this.x1,
            y1: this.y1,
            x2: this.x2,
            y2: this.y2,
            width: this.width
        }, coords)
    );
};
DOMFreeLine.prototype.css = function css$$1 (styles){
    setCss(this, styles);
    return this;
};
prototypeAccessors.width.set = function (w){
    this.element.style.height = w + 'px';
    this._width = w;
};
prototypeAccessors.width.get = function (){
    return this._width;
};
prototypeAccessors.x1.set = function (x1){
    this._coords.x1 = x1;
};
prototypeAccessors.x2.set = function (x2){
    this._coords.x2 = x2;
};
prototypeAccessors.y1.set = function (y1){
    this._coords.y1 = y1;
};
prototypeAccessors.y2.set = function (y2){
    this._coords.y2 = y2;
};
prototypeAccessors.x1.get = function (){
    return this._coords.x1;
};
prototypeAccessors.x2.get = function (){
    return this._coords.x2;
};
prototypeAccessors.y1.get = function (){
    return this._coords.y1;
};
prototypeAccessors.y2.get = function (){
    return this._coords.y2;
};

Object.defineProperties( DOMFreeLine.prototype, prototypeAccessors );

function freeLine(element, options){
    return new DOMFreeLine(element, options);
}

export default freeLine;
//# sourceMappingURL=bundle.es.js.map
