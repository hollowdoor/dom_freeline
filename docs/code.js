(function () {
'use strict';

var div = null;
var prefixes = [ 'Webkit', 'Moz', 'O', 'ms' ];

var index$2 = function prefixStyle (prop) {
  // re-use a dummy div
  if (!div) {
    div = document.createElement('div');
  }

  var style = div.style;

  // prop exists without prefix
  if (prop in style) {
    return prop
  }

  // borderRadius -> BorderRadius
  var titleCase = prop.charAt(0).toUpperCase() + prop.slice(1);

  // find the vendor-prefixed prop
  for (var i = prefixes.length; i >= 0; i--) {
    var name = prefixes[i] + titleCase;
    // e.g. WebkitBorderRadius or webkitBorderRadius
    if (name in style) {
      return name
    }
  }

  return false
};

/**
 * Export.
 */

var index$8 = toNoCase;

/**
 * Test whether a string is camel-case.
 */

var hasSpace = /\s/;
var hasSeparator = /(_|-|\.|:)/;
var hasCamel = /([a-z][A-Z]|[A-Z][a-z])/;

/**
 * Remove any starting case from a `string`, like camel or snake, but keep
 * spaces and punctuation that may be important otherwise.
 *
 * @param {String} string
 * @return {String}
 */

function toNoCase(string) {
  if (hasSpace.test(string)) { return string.toLowerCase() }
  if (hasSeparator.test(string)) { return (unseparate(string) || string).toLowerCase() }
  if (hasCamel.test(string)) { return uncamelize(string).toLowerCase() }
  return string.toLowerCase()
}

/**
 * Separator splitter.
 */

var separatorSplitter = /[\W_]+(.|$)/g;

/**
 * Un-separate a `string`.
 *
 * @param {String} string
 * @return {String}
 */

function unseparate(string) {
  return string.replace(separatorSplitter, function (m, next) {
    return next ? ' ' + next : ''
  })
}

/**
 * Camelcase splitter.
 */

var camelSplitter = /(.)([A-Z]+)/g;

/**
 * Un-camelcase a `string`.
 *
 * @param {String} string
 * @return {String}
 */

function uncamelize(string) {
  return string.replace(camelSplitter, function (m, previous, uppers) {
    return previous + ' ' + uppers.toLowerCase().split('').join(' ')
  })
}

/**
 * Export.
 */

var index$6 = toSpaceCase;

/**
 * Convert a `string` to space case.
 *
 * @param {String} string
 * @return {String}
 */

function toSpaceCase(string) {
  return index$8(string).replace(/[\W_]+(.|$)/g, function (matches, match) {
    return match ? ' ' + match : ''
  }).trim()
}

/**
 * Export.
 */

var index$4 = toCamelCase;

/**
 * Convert a `string` to camel case.
 *
 * @param {String} string
 * @return {String}
 */

function toCamelCase(string) {
  return index$6(string).replace(/\s(\w)/g, function (matches, letter) {
    return letter.toUpperCase()
  })
}

/* The following list is defined in React's core */
var IS_UNITLESS = {
  animationIterationCount: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridColumn: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,

  // SVG-related properties
  fillOpacity: true,
  stopOpacity: true,
  strokeDashoffset: true,
  strokeOpacity: true,
  strokeWidth: true
};

var index$10 = function(name, value) {
  if(typeof value === 'number' && !IS_UNITLESS[ name ]) {
    return value + 'px';
  } else {
    return value;
  }
};

var cache = { 'float': 'cssFloat' };


function style (element, property, value) {
  var camel = cache[property];
  if (typeof camel === 'undefined') {
    camel = detect(property);
  }

  // may be false if CSS prop is unsupported
  if (camel) {
    if (value === undefined) {
      return element.style[camel]
    }

    element.style[camel] = index$10(camel, value);
  }
}

function each (element, properties) {
  for (var k in properties) {
    if (properties.hasOwnProperty(k)) {
      style(element, k, properties[k]);
    }
  }
}

function detect (cssProp) {
  var camel = index$4(cssProp);
  var result = index$2(camel);
  cache[camel] = cache[cssProp] = cache[result] = result;
  return result
}

function set () {
  if (arguments.length === 2) {
    if (typeof arguments[1] === 'string') {
      arguments[0].style.cssText = arguments[1];
    } else {
      each(arguments[0], arguments[1]);
    }
  } else {
    style(arguments[0], arguments[1], arguments[2]);
  }
}

var index = set;
var set_1 = set;

var get = function (element, properties) {
  if (Array.isArray(properties)) {
    return properties.reduce(function (obj, prop) {
      obj[prop] = style(element, prop || '');
      return obj
    }, {})
  } else {
    return style(element, properties || '')
  }
};

index.set = set_1;
index.get = get;

function _interopDefault$1 (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var css = _interopDefault$1(index);

function createCoordinates(line, coords){
    if ( coords === void 0 ) { coords = {}; }


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
    if ( ref === void 0 ) { ref = {}; }
    var x1 = ref.x1; if ( x1 === void 0 ) { x1 = 0; }
    var y1 = ref.y1; if ( y1 === void 0 ) { y1 = 0; }
    var x2 = ref.x2; if ( x2 === void 0 ) { x2 = 0; }
    var y2 = ref.y2; if ( y2 === void 0 ) { y2 = 0; }
    var width = ref.width; if ( width === void 0 ) { width = 1; }

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
        if ( coords === void 0 ) { coords = {}; }

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

var bundle = freeLine;

function createTopElements(){

    var container = create('div');
    var p1 = create('p');
    var inputElement = create('input', {placeholder: 'Element Type'});
    var changeElement = create('button');
    var ol = create('ol');
    var p2 = create('p');

    changeElement.innerHTML = 'Change Element';
    p1.textContent = 'Try different elements.';
    p2.textContent = 'Adjust the sliders to change the line.';
    [p1, inputElement, changeElement, p2, ol]
    .forEach(function (e){ return append(container, e); });

    container.style.margin = '0 25% 0 25%';
    container.style.border = '1px solid black';
    container.style.padding = '7px';

    return {container: container, inputElement: inputElement, changeElement: changeElement, ol: ol};
}
function setup(startup, type){
    var line = startup(type);
    var ref = createTopElements();
    var container = ref.container;
    var inputElement = ref.inputElement;
    var changeElement = ref.changeElement;
    var ol = ref.ol;

    var min = -100;
    var max = 700;

    changeElement.addEventListener('click', function (v){
        line.element.parentNode.removeChild(line.element);
        console.log('Changed Element ',inputElement.value);
        line = startup(inputElement.value);
    });

    ['x1', 'y1', 'x2', 'y2']
    .forEach(function (n){

        var li = create('li');
        var div = create('div');
        var span1 = create('span');
        var span2 = create('span');
        var input1 = create('input', {type: 'text', size:4});
        var input2 = create('input', {type: 'text', size:4});
        var range = create('input', {
            type: 'range',
            id: n + '-range',
            min: min,
            max: max
        });
        var output = create('output');
        attr(output, 'for', n + '-range');
        div.style.fontWeight = 'bold';
        output.value = range.value;

        div.textContent = n;
        span1.textContent = 'min ';
        span2.textContent = ' max ';
        input1.value = min;
        input2.value = max;

        addEvent(range, 'input', function (e){
            output.value = range.value;
        });

        addEvent(input1, 'input', function (e){
            attr(range, 'min', input1.value);
        });

        addEvent(input2, 'input', function (e){
            attr(range, 'max', input2.value);
        });

        addEvent(range, 'input', function (e){
            line[n] = range.value;
        });

        [div, span1, input1, span2, input2, range, output]
        .forEach(function (el){ return append(li, el); });
        append(ol, li);
    });
    append(document.body, container);
}

function addEvent(el, event, listener){
    el.addEventListener(event, listener, false);
}

function attr(el, name, value){
    el.setAttribute(name, value);
}

function append(el, child){
    el.appendChild(child);
}

function create(name, attrs){
    var el = document.createElement(name);
    Object.keys(attrs || {}).forEach(function (key){
        attr(el, key, attrs[key]);
    });
    return el;
}

//const freeLine = require('../');
//http://thenewcode.com/757/Playing-With-The-HTML5-range-Slider-Input
/*const setting = setup();

setting.on('start', v=>{

});*/
setup(function (type){
    var line = bundle(document.createElement(type),
    {x1: 100, y1: 100, x2: 200, y2: 200});
    console.log('line ', line);
    document.body.appendChild(line.element);
    line.css({width: 2, 'background-color': 'red'});
    return line;
});

/*let line = freeLine(document.createElement('div'),
{x1: 100, y1: 100, x2: 200, y2: 200});
console.log('line ', line);
document.body.appendChild(line.element);
line.css({width: 2, 'background-color': 'red'});

setup(line);*/

}());
//# sourceMappingURL=code.js.map
