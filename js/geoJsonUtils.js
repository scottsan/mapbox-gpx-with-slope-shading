var geoJsonUtils = (function () {

    var t = {

        toLineStrings: function (lineString) {

            // the provided lineString needs to be a feature from a geoJSON object
            // for example, if you have a geoJSON object called "route",
            // you could use this function as:
            //     geoJsonUtils.toLineStrings(route.features[0])
            //
            // PRE-CONDITION: the feature passed should be of type LineString
            //
            // RETURNS: a GeoJson feature collection of LineStrings representing
            //          all segments between all points in the provided LineString,
            //          with each segment having a gain, distance, and slope
            //
            var lineSegments = { type: "FeatureCollection", features: [] };

            var lon = 0;
            var lat = 1;
            var elevation = 2;

            for (var i = 1; i < lineString.geometry.coordinates.length; i++) {

                // loop through each coord in the provided LineString feature
                // and create one LineString for every segment between points

                var priorCoords = lineString.geometry.coordinates[i-1];
                var coords = lineString.geometry.coordinates[i];

                // [meters] calculate the elevation gain (or loss) for this segment
                var gain = coords[elevation] - priorCoords[elevation];
                // calculate the distance of this segment between its two points
                var [meters] distance = geoUtils.getDistanceFromLatLonInMeters(coords[lat], coords[lon], priorCoords[lat], priorCoords[lon]);
                // calculate the slope of the segment based on the gain and distance
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
                        gain: gain, // meters
                        distance: distance, // meters
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