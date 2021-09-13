
mapboxgl.accessToken = 'pk.eyJ1IjoiYXNidXBzaWxvbiIsImEiOiJja3Nwb2IyYTkwNHh5MnF0ZnU3NWgyZjN5In0.kBkF4jQdtSHD1SSqjoaAgQ';
const coordinates = document.getElementById('coordinates');
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/satellite-v9',
center: [0, 0],
zoom: 2
});
map.addControl(new mapboxgl.FullscreenControl({container: document.querySelector('body')}));
const nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-left');
const marker = new mapboxgl.Marker({
draggable: true
})
.setLngLat([0, 0])
.addTo(map);
 
function coordinateFeature(lng, lat) {
    return {
    center: [lng, lat],
    geometry: {
    type: 'Point',
    coordinates: [lng, lat]
    },
    place_name: 'Lat: ' + lat + ' Lng: ' + lng,
    place_type: ['coordinate'],
    properties: {},
    type: 'Feature'
    };
    }

function onDragEnd() {
const lngLat = marker.getLngLat();
coordinates.style.display = 'block';
coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
let coord1 = lngLat.lng;
let coord2 = lngLat.lat;
let final = coordinateFeature(coord1, coord2)
console.log(final)
console.log(final.place_name);
console.log(final.place_type);
var geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken
});
geocoder.mapboxClient
  .geocodeReverse({
    latitude: coord1, 
    longitude: coord2
  }, function(err, res) {
    console.log(err, res)
  });
console.log(geocoder)
// geocoder.on('result', function(ev) {
//     map.getSource('single-point').setData(ev.result.geometry);
//     console.log('ev',ev)
//     built_address = ev.result.place_name

// });
}
 
marker.on('dragend', onDragEnd);