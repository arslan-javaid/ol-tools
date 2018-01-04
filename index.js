require('ol/ol.css');
var ol_Map = require('ol/map').default;
var ol_layer_Tile = require('ol/layer/tile').default;
var ol_source_OSM = require('ol/source/osm').default;
var ol_View = require('ol/view').default;

var map = new ol_Map({
    target: 'map',
    layers: [
        new ol_layer_Tile({
            source: new ol_source_OSM()
        })
    ],
    view: new ol_View({
        center: [0, 0],
        zoom: 0
    })
});