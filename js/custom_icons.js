// Define a custom icon
var customIcon = L.icon({
    iconUrl: 'markers/locator.png',  // Replace with the actual path to your icon
    iconSize: [28, 28],  // Customize the size of the icon
    iconAnchor: [16, 32],  // Anchor point of the icon (where the "pin" hits the map)
    popupAnchor: [0, -28]  // Where the popup opens relative to the icon
});

// Modify the pointToLayer function
function customPointToLayer(feature, latlng) {
    return L.marker(latlng, { icon: customIcon });
}
