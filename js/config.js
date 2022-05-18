var config = (function () {

    var t = {

        get mapboxMapStyleUrl() {
            return 'mapbox://styles/mitchellx/cl37syevj001514qnctrh8pql/draft';
        },
        get mapboxAccessToken() {
            return 'pk.eyJ1IjoibWl0Y2hlbGx4IiwiYSI6ImNsMzRucWc2cDAwaWkzbHA5ZjF6YTB1b2cifQ.-ZHOTJY15FedqvH42WkwCg';
        }
        
    }


    return t;

})();

if (typeof module !== 'undefined') module.exports = config;
