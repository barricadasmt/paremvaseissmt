document.addEventListener("DOMContentLoaded", function() {
    var map = L.map('map', {
        zoomControl: false,
        maxZoom: 28,
        minZoom: 1
    }).fitBounds([[33.96054790788629, 17.172130142106273], [41.333197566925044, 31.697240635986528]]);

    // Add a tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
    }).addTo(map);

    // Example Feature Layer (adjust as needed for your specific data)
    var highlightLayer;
    function highlightFeature(e) {
        highlightLayer = e.target;
        if (e.target.feature.geometry.type === 'LineString' || e.target.feature.geometry.type === 'MultiLineString') {
            highlightLayer.setStyle({ color: '#ffff00' });
        } else {
            highlightLayer.setStyle({ fillColor: '#ffff00', fillOpacity: 1 });
        }
    }

    // Handle bounds and search controls, if any
    var bounds_group = new L.featureGroup([]);
    map.addLayer(bounds_group);
});

