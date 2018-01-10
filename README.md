<h1 align="center">focus.js</h1>
<p align="center">A simple JavaScript library for turning images into zoomable components.</p>

## Getting Started
### Vanilla
* For now, download the minified version of the library in the `dist` folder and add a script tag to your page.
    ```HTML
    <script src='../../dist/vanilla/focus.min.js'></script>
    ```
* After adding the tag to the page, initialize the library.
    ```HTML
    <script>
        Focus.init('');
    </script>
    ```
    * To change the scope of elements that focus.js applies to, insert the id of the element inside `init('exampleID');`. Otherwise, a blank string would apply it to the entire page.
* Add the `focus-img` class to any image you want to be zoomable.
* To reduce stuttering on the image, add the `smoother` class to the images you want.

## Demo
* [Basic Portfolio Website - Vanilla](https://spiderpig86.github.io/focus.js/test/vanilla/index.html)

## Todo
* Add option for changing image scaling with mouse wheel.
* Add more events such as `mouseclick`, `grab`, and `toggle`.
* Add support for callbacks on image load, zooming in, and zooming out.
* Add option to change cursor type.
* Add display for magnification and location.
* Add support for external toggles.