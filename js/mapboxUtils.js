var mapboxUtils = (function () {

    var t = {

        zoomToCoordinatesBounds: function (map, coordinates, padding, bearing, pitch) {

            // Create a 'LngLatBounds' with both corners at the first coordinate.
            const bounds = new mapboxgl.LngLatBounds(
                coordinates[0],
                coordinates[0]
            );

            // Extend the 'LngLatBounds' to include every coordinate in the bounds result.
            for (const coord of coordinates) {
                bounds.extend(coord);
            }

            map.fitBounds(bounds, {
                padding: padding ?? 50,
                bearing: bearing ?? 0,
                pitch: pitch ?? 0
            });

        }

    }

    return t;

})();

if (typeof module !== 'undefined') module.exports = mapboxUtils;
