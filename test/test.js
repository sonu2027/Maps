<script>
let map = L.map("map").setView([22.5744, 88.3629], 10);

const tileLayer = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }
).addTo(map);

// Initialize geocoders (using leaflet-control-geocoder plugin)
const geocoderControl1 = L.Control.geocoder({
  defaultMarkGeocode: false
}).addTo(map);

const geocoderControl2 = L.Control.geocoder({
  defaultMarkGeocode: false
}).addTo(map);

// Example usage of geocoder results (using 'markgeocode' event)
geocoderControl1.on('markgeocode', function(e) {
  console.log(e.geocode); // Access the geocoded result
});

geocoderControl2.on('markgeocode', function(e) {
  console.log(e.geocode); // Access the geocoded result
});

// Example of routing control setup
let waypoints = [];

// You need to wait for geocoding to complete before using the results
geocoderControl1.on('markgeocode', function(e) {
  waypoints.push(e.geocode.center);
  if (waypoints.length === 2) {
    L.Routing.control({
      waypoints: waypoints
    }).addTo(map);
  }
});

geocoderControl2.on('markgeocode', function(e) {
  waypoints.push(e.geocode.center);
  if (waypoints.length === 2) {
    L.Routing.control({
      waypoints: waypoints
    }).addTo(map);
  }
});
</script>

if (loc1._lastGeocode && loc2._lastGeocode) {}

/* Origin Icon */



