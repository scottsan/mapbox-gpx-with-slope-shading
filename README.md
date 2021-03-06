# mapbox-gpx-with-slope-shading

This project demonstrates:
* creating data from data (in this case, creating GPX track segment slope data from GPX track points)
* use of Mapbox GL JS
* use of Mapbox Studio for creating a style with 3D layers, satellite layers, contour layers
* conversion of GPX points to GPX track segments in javascript
* display of GPX track segments on a Mapbox style, colorized by segment slope

To run this code:
* modify values in js/config.js to match your Mapbox access token and your preferred Mapbox studio style url

Some nifty features:
* automatic bearing detection to display the map according to the bearing of the GPX track
* automatic zoom-to-bounds functionality for the features calculated from GPX file
* ability to try one of the GPX samples, or upload your own GPX file
* pure HTML, CSS, Javascript solution

Libraries:
* Mapbox GL JS, and Mapbox togeojson
* Bootstrap
* jQuery
* Font Awesome

## What's the purpose?
When hiking a mountain, such as a Colorado 14er, it's interesting to see the steepness, or slope, of the hike at any given section. 

Currently, I don't know of a site or app that does this, so I coded it.

If you have a GPX file from 14ers.com, AllTrails, or Gaia, you can use these libraries to process the GPX data into trail segments enriched with slope values, and visualize the slope for each section of the hike.

## How does it work?
* given a GPX file...
* the code will convert the file to GeoJSON using this library from mapbox - https://github.com/mapbox/togeojson
* then, the code converts the track points from the GeoJSON to track segments

For example, GPX files store points. We need to create geo features for each segment between the points so that the segements can be colorized separately based on their slope.

GPX Points:
<p><img src="https://i.imgur.com/eTWsdRv.png" width="300" /></p>
Segments between points:
<p><img src="https://i.imgur.com/qEp3jRV.png" width="300" /></p>

* then, for each segment, the code calculates the slope of the segment
* finally, the code adds the processed data to the Mapbox map and colorizes each segment by the respective slope value
