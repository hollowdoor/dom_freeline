import css from 'dom-css';
export default function setCss(line, styles){
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
