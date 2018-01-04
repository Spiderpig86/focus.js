/**
 * Vanilla version of script using ES5. Simply add a script tag to the page to use.
 */

(function(window) {

    /**
     * Initializes the focus object with properties and methods
     */
    function init() {
        var Focus = {};
        Focus.init = function(elID) {
            // TODO
        }
        return Focus;
    }

    // Define the lib object in global scope
    if (typeof(Focus) === 'undefined')
        window.Focus = init();
    else
        console.log("focus.js has been initialized already.");

})(window); // Loads the library in window object