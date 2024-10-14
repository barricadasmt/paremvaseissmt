document.addEventListener("DOMContentLoaded", function() {
    var highlightLayer;
    function highlightFeature(e) {
        highlightLayer = e.target;

        if (e.target.feature.geometry.type === 'LineString' || e.target.feature.geometry.type === 'MultiLineString') {
            highlightLayer.setStyle({
                color: '#ffff00',
            });
        } else {
            highlightLayer.setStyle({
                fillColor: '#ffff00',
                fillOpacity: 1
            });
        }
    }

    var map = L.map('map', {
        zoomControl: false,
        maxZoom: 28,
        minZoom: 1
    }).fitBounds([[33.96054790788629, 17.172130142106273], [41.333197566925044, 31.697240635986528]]);
    
    var hash = new L.Hash(map);
    map.attributionControl.setPrefix('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>');

    // Initialize the tile layer
    var layer_OSMStandard_0 = L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
        minZoom: 1,
        maxZoom: 28,
        opacity: 1.0
    }).addTo(map); // Add tile layer to the map

    // Other map functionalities...
});
