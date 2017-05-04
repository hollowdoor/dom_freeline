
export default function createCoordinates(line, coords = {}){

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

        let {x1, y1, x2, y2} = coords;

        let a = x1 - x2,
            b = y1 - y2,
            c = Math.sqrt(a * a + b * b);

        let sx = (x1 + x2) / 2,
            sy = (y1 + y2) / 2;

        let x = sx - c / 2,
            y = sy;

        let alpha = Math.PI - Math.atan2(-b, a);

        return setDOMCoords(x, y, c, alpha);
    }

    setLineCoords();

    return Object.create(null, {
        x1: {
            get(){
                return coords.x1;
            },
            set(_x1){
                coords.x1 = parseInt(_x1);
                setLineCoords();
            }
        },
        x2: {
            get(){
                return coords.x2;
            },
            set(_x2){
                coords.x2 = parseInt(_x2);
                setLineCoords();
            }
        },
        y1: {
            get(){
                return coords.y1;
            },
            set(_y1){
                coords.y1 = parseInt(_y1);
                setLineCoords();
            }
        },
        y2: {
            get(){
                return coords.y2;
            },
            set(_y2){
                coords.y2 = parseInt(_y2);
                setLineCoords();
            }
        }
    });

}
