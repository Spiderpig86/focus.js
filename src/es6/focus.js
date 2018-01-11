/**
 * An image component that supports the zooming effect for any web app.
 */

 class FocusImg {

    /**
     * Constructor for the focus image component
     * @param {FocusImgConfig} imageParams - {
     *      imageSrc: String,
     *      parentElement: HTMLElement,
     *      zoomFactor: String,
     *      smoother: boolean,
     *      width: String,
     *      height: String
     * }
     */
    constructor(imageParams) {
        console.log('test');

        this.DEFAULT_IMAGE_SRC = 'http://via.placeholder.com/500?text=focus.js';

        // Initialize default properties for image
        this.params = {
            imageSrc: this.DEFAULT_IMAGE_SRC,
            parentElement: null,
            zoomFactor: '250%',
            smoother: true,
            width: '100%', // Scale to parent component by default
            height: '66.7%' // Scale to percent of height by default
        }

        this.focusImg = document.createElement('div');

        // Apply given params to the object
        if (params)
            Object.assign(this.params, imageParams);

        this.render();
        this.bindEvents();

        return this;
    }

    /**
     * Binds events to the current image component.
     */
    bindEvents() {

        // Zoom in on hover
        this.focusImg.addEventListener('mouseover', (e) => {
            this.focusImg.style.backgroundSize = this.params.zoomFactor;
        }, false);

        // Pan the image proportional to the cursor location
        this.focusImg.addEventListener('mousemove', (e) => {
            let dimensions = this.focusImg.getBoundingClientRect(); // Get client rectangle of the element on thepage

            // Calculate location of cursor inside the element
            let relX = e.clientX - dimensions.left;
            let relY = e.clientY - dimensions.top;

            // Calculate the cursor position as a percentage of the image
            let percentX = Math.round(100 / (dimensions.width / relX));
            let percentY = Math.round(100 / (dimensions.height / relY));

            // Update the image background position
            this.focusImg.style.backgroundPosition = percentX + '% ' + percentY + '%';
        }, false);

        // Revert image view back to normal after mouse exits
        this.focusImg.addEventListener('mouseleave', (e) => {
            this.focusImg.style.backgroundPosition = 'center';
            this.focusImg.style.backgroundSize = 'cover';
        }, false);
    }

    /**
     * Render the component onto the page
     */
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
                width: ${this.params.width};
                height: ${this.params.height};
            ">
            </div>
        `;
        // Append it to the parent
        this.params.parentElement.appendChild(this.focusImg);
        console.log(this.focusImg);
    }
 }

 export default FocusImg;