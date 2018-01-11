import FocusImage from '../../dist/es6/focus'

// Regular ES5 syntax is allowed
let imageContainer = document.getElementById('images');

new FocusImage({
    imageSrc: 'http://via.placeholder.com/500?text=focus.js',
    parentElement: document.getElementById('images'),
    zoomFactor: '250%',
    smoother: true,
    width: '100%', // Scale to parent component by default
    height: '66.7%' // Scale to percent of height by default
});