var geoUtils = (function () {

    var t = {

        getDistanceFromLatLonInMeters: function (lat1, lon1, lat2, lon2) {
            var R = 6371; // Radius of the earth in km
            var dLat = toRadians(lat2 - lat1);  // toRadians below
            var dLon = toRadians(lon2 - lon1);
            var a =
                Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2)
                ;
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            var d = R * c; // Distance in km
            return d * 1000.0;
        },

        getBearing: function (startLat, startLng, destLat, destLng) {
            startLat = toRadians(startLat);
            startLng = toRadians(startLng);
            destLat = toRadians(destLat);
            destLng = toRadians(destLng);

            y = Math.sin(destLng - startLng) * Math.cos(destLat);
            x = Math.cos(startLat) * Math.sin(destLat) -
                Math.sin(startLat) * Math.cos(destLat) * Math.cos(destLng - startLng);
            brng = Math.atan2(y, x);
            brng = toDegrees(brng);
            return (brng + 360) % 360;
        }

    }

    // Converts from degrees to radians.
    function toRadians(degrees) {
        return degrees * Math.PI / 180;
    };

    // Converts from radians to degrees.
    function toDegrees(radians) {
        return radians * 180 / Math.PI;
    }

    return t;

})();

if (typeof module !== 'undefined') module.exports = geoUtils;
