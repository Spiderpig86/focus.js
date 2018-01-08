/**
 * An image component that supports the zooming effect for any web app.
 */

 class FocusImg {

    constructor(imageParams) {
        // Initialize default properties for image
        this.params = {
            imageSrc: 'http://via.placeholder.com/500?text=focus.js',
            parentElement: null,
            zoomFactor: '250%',
            smoother: true
        }

        this.focusImg = document.createElement('div');

        // Apply given params to the object
        if (params)
            Object.assign(this.params, imageParams);
    }

    bindEvents() {

    }

    render() {
        // Set the image element
        this.focusImg.innerHTML = `
            <div class="
                focus-img 
                ${smoother ? 'smoother' : ''}"
            style="
                background-image: url(${imageSrc});
                background-size: cover;
                background-position: center center;
            ">
            </div>
        `;
        // Append it to the parent
        this.params.parentElement.appendChild(this.focusImg);
    }
 }