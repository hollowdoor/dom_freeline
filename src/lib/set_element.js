import createCoordinates from './create_coordinates.js';
export default function setElement(line, element){
    line._element = element;

    element.style.backgroundColor = 'black';
    element.style.height = width + 'px';
    element.style.position = 'absolute';

    line._coords = createCoordinates(line, {
        x1, y1, x2, y2
    });
}
/*
function hasPXHeight(element, prop){
    return /^[0-9]+px$/.test(element.style[prop]);
}

function getHeight(element){
    return element.style.height.match(/^([0-9]+)px/)[1];
}

function getBGColor(element){
    return element.style.backgroundColor;
}

export default function setElement(line, element){
    if(line._element){
        if(hasPXHeight(line._element)){
            element.style.height = getHeight(line._element);
        }
        element.style.backgroundColor = getBGColor(line._element);
    }else{
        element.style.backgroundColor = 'black';
    }

    element.style.position = 'absolute';
    line._element = element;
    line._coords = createCoordinates(line, {
        x1, y1, x2, y2
    });
}*/
