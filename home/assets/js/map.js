
mapboxgl.accessToken =
"pk.eyJ1IjoiYXNidXBzaWxvbiIsImEiOiJja3Nwb3Q2aWgwNHk5MnFvNHV4YjdtdGF1In0.yJT3HZdU4jpTiIwcfGCW6g";
const map = new mapboxgl.Map({
container: "map", // container ID
style: "mapbox://styles/mapbox/satellite-v9", // style URL
center: [11.255, 43.77], // starting position
zoom: 13, // starting zoom
});


map.addControl(new mapboxgl.FullscreenControl());
map.addControl(new mapboxgl.NavigationControl());
const marker = new mapboxgl.Marker()
.setLngLat([11.255, 43.77])
.addTo(map);