var geoJsonUtils = (function () {

    var t = {

        toLineStrings: function (lineString) {

            var lineSegments = { type: "FeatureCollection", features: [] };

            var lon = 0;
            var lat = 1;
            var elevation = 2;

            for (var i = 1; i < lineString.geometry.coordinates.length; i++) {

                var priorCoords = lineString.geometry.coordinates[i-1];
                var coords = lineString.geometry.coordinates[i];

                var gain = coords[elevation] - priorCoords[elevation];
                var distance = geoUtils.getDistanceFromLatLonInMeters(coords[lat], coords[lon], priorCoords[lat], priorCoords[lon]);
                var slope = gain / distance;

                var lineSegment = {
                    type: "Feature",
                    properties: {},
                    geometry: {
                        type: "LineString",
                        coordinates: [[priorCoords[lon], priorCoords[lat]], [coords[lon], coords[lat]]],
                    },
                    properties: {
                        segmentIndex: i,
                        gain: gain,
                        distance: distance,
                        slope: slope,
                        slopeAbsolute: Math.abs(slope)
                    }
                }

                lineSegments.features.push(lineSegment);
            }

            return lineSegments;

        }

    }

    return t;

})();

if (typeof module !== 'undefined') module.exports = geoJsonUtils;