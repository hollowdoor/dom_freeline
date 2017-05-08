dom-freeline
============

Draw a straight line anywhere in the DOM.

The webpage: [Try dom-freeline](https://hollowdoor.github.io/dom_freeline/).

Install
-------

`npm install --save dom-freeline`

Then use browserify, webpack, or rollup to build your script.

Or Download one of these files from the Github repo:

    dist/dom-freeline.js
    dist/dom-freeline.min.js

If you use one of these prepackaged files the global name is freeLine.

Usage
-----

```javascript
import freeLine from 'dom-freeline';
//Set the starting coordinates.
let line = freeLine({x1: 10, y1: 10, x2: 100, y2: 100});

document.body.appendChild(line.element);
//Set some styles.
line.css({width: 2, 'background-color': 'red'});
//Add 10 to the first x property.
line.x1 = line.x1 + 10;
```

API
---

### freeLine(element, options) -> line

Construct an element line, and pass an options object.

`element` should be a valid DOM element. Most likely a `div` element, but other elements will work. Even an `input` element will work for instance.

`options` are mostly for setting line geometry on construction.

### options.x1, options.y1

These options set the x/y coordinates for the first point of the line.

### options.x2, options.y2

Set the x/y coordinates for the second point of the line.

### options.width

Set the line with.

### line.x1, line.y1

Change the first x/y of a line object.

### line.x2, line.y2

Change the second x/y of the line object.

### line.css(styles)

Pass a styles object to change the appearance of the line.

`line.css()` uses [dom-css](https://github.com/mattdesl/dom-css)

About
-----

This is a very light weight library for drawing straight lines using coordinates relative to the view-port of the browser.

Contributing
------------

Before making any pull requests post an issue about what you'd like to change.

Resources
---------

* [stackoverflow question: Drawing Lines On An HTML Page](http://stackoverflow.com/questions/4270485/drawing-lines-on-html-page)
* [Drawing Lines In Browsers](https://www.codeproject.com/Articles/16564/Drawing-lines-in-Mozilla-based-browsers-and-the-In)
    Better for curves, but isn't used in this library
* [dom-css](https://www.npmjs.com/package/dom-css)
