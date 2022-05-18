var config = (function () {

    var t = {

        get mapboxMapStyleUrl() {
            return 'YOUR_MAPBOX_STYLE_URL_HERE';
        },
        get mapboxAccessToken() {
            return 'YOUR_MAPBOX_ACCESS_TOKEN_HERE';
        }
        
    }


    return t;

})();

if (typeof module !== 'undefined') module.exports = config;
