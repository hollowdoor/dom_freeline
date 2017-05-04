import createCoordinates from './lib/create_coordinates.js';
import setCss from './lib/set_css.js';

class DOMFreeLine {
    constructor(element, {
        x1 = 0,
        y1 = 0,
        x2 = 0,
        y2 = 0,
        width = 1
    } = {}){
        this.element = element;

        this.element.style.backgroundColor = 'black';
        this.element.style.height = width + 'px';
        this.element.style.position = 'absolute';

        this._coords = createCoordinates(this, {
            x1, y1, x2, y2
        });
    }
    clone(coords = {}){
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
    }
    css(styles){
        setCss(this, styles);
        return this;
    }
    set width(w){
        this.element.style.height = w + 'px';
        this._width = w;
    }
    get width(){
        return this._width;
    }
    set x1(x1){
        this._coords.x1 = x1;
    }
    set x2(x2){
        this._coords.x2 = x2;
    }
    set y1(y1){
        this._coords.y1 = y1;
    }
    set y2(y2){
        this._coords.y2 = y2;
    }
    get x1(){
        return this._coords.x1;
    }
    get x2(){
        return this._coords.x2;
    }
    get y1(){
        return this._coords.y1;
    }
    get y2(){
        return this._coords.y2;
    }
}

export default function freeLine(element, options){
    return new DOMFreeLine(element, options);
}
