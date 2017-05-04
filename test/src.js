//const freeLine = require('../');
//http://thenewcode.com/757/Playing-With-The-HTML5-range-Slider-Input
import freeLine from '../';
import setup from './setup.js';

/*const setting = setup();

setting.on('start', v=>{

});*/
setup((type)=>{
    let line = freeLine(document.createElement(type),
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
