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

        this.DEFAULT_IMAGE_SRC = 'http://via.placeholder.com/500?text=focus.js';

        // Initialize default properties for image
        this.params = {
            imageSrc: this.DEFAULT_IMAGE_SRC,
            parentElement: null,
            zoomFactor: '250%',
            smoother: true,
            width: '100%', // Scale to parent component by default
            height: '66.7%', // Scale to percent of height by default
            cursor: '', // Blank for default hand cursor
            displayLoc: false, // Displays the dimensions hud
            displayZoom: false, // Displys the zoom hud
        }

        this.focusImg = document.createElement('div');
        this.focusImg.style.position = 'relative';

        // Apply given params to the object
        if (imageParams)
            Object.assign(this.params, imageParams);

        this.render();
        this.bindEvents();

        // Initialize control add-ons
        this.displayLocHud = this.params.displayLoc ? document.createElement('span') : null;
        if (this.params.displayLoc) {
            this.displayLocHud.classList.add('hud', 'hud-bottom-right');
            this.focusImg.appendChild(this.displayLocHud);
            console.log(this.focusImg);
        }

        return this;
    }

    /**
     * Binds events to the current image component.
     */
    bindEvents() {

        // Zoom in on hover
        this.focusImg.addEventListener('mouseover', (e) => {
            this.focusImg.getElementsByClassName('focus-img')[0].style.backgroundSize = this.params.zoomFactor;
        }, false);

        // Pan the image proportional to the cursor location
        this.focusImg.addEventListener('mousemove', (e) => {
            let dimensions = this.focusImg.getBoundingClientRect(); // Get client rectangle of the element on thepage

            // Calculate location of cursor inside the element
            this.relX = e.clientX - dimensions.left;
            this.relY = e.clientY - dimensions.top;

            // Calculate the cursor position as a percentage of the image
            this.percentX = Math.round(100 / (dimensions.width / this.relX));
            this.percentY = Math.round(100 / (dimensions.height / this.relY));

            // Update the image background position
            this.focusImg.getElementsByClassName('focus-img')[0].style.backgroundPosition = this.percentX + '% ' + this.percentY + '%';

            // Update HUD info if needed
            if (this.params.displayLoc) {
                this.displayLocHud.innerHTML = `${Math.floor(this.relX) || 0}, ${Math.floor(this.relY) || 0}`;
            }
            
        }, false);

        // Revert image view back to normal after mouse exits
        this.focusImg.addEventListener('mouseleave', (e) => {
            this.focusImg.getElementsByClassName('focus-img')[0].style.backgroundPosition = 'center';
            this.focusImg.getElementsByClassName('focus-img')[0].style.backgroundSize = 'cover';
        }, false);
    }

    /**
     * Render the component onto the page
     */
    render() {
        
        // Set the image element
        this.focusImg.innerHTML  = `
            <div class="
                focus-img 
                ${this.params.smoother ? 'smoother' : ''}
                ${this.params.cursor ? this.params.cursor : ''}"
            style="
                background-image: url(${this.params.imageSrc});
                background-size: cover;
                background-position: center center;
                width: 100%;
                padding-top: ${this.params.height};
            ">
            </div>
        `;

        this.focusImg.style.width = this.params.width;

        // Append to parent
        this.params.parentElement.appendChild(this.focusImg);
    }
 }

 export default FocusImg;