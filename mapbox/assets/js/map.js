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
    "geojson-marker": {
        "type": "geojson",
        "data": {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-77.0323, 38.9131]
            },
            "properties": {
                "title": "Mapbox DC",
                "marker-symbol": "monument"
            }
        }
    },
    
    geometry: {
    type: 'Point',
    coordinates: [lng, lat]
    },
    place_name: 'Lat: ' + lat + ' Lng: ' + lng,
    place_type: ['coordinate'],
    properties: {},
    type: 'Feature',
    context:[
        {
            id: "country.19678805456372290",
            text:"United States"
        }
    ]
          
    };

    }

function onDragEnd() {
const lngLat = marker.getLngLat();
coordinates.style.display = 'block';
coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
let coord1 = lngLat.lng;
let coord2 = lngLat.lat;


}

map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
    })
  
);


 
marker.on('dragend', onDragEnd);






