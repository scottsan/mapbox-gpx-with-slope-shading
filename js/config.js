var config = (function () {

    var t = {

        mapboxAccessToken: 'YOUR_MAPBOX_ACCESS_TOKEN_HERE',
        mapboxMapStyleUrl: 'YOUR_MAPBOX_STYLE_URL_HERE',
        defaultMapCenterpoint: [-106.479390, 39.4684732],
        defaultMapZoom: 14

    }

    return t;

})();

if (typeof module !== 'undefined') module.exports = config;
