// 35.4123° N, 139.4132° E
let coordinates = [35.4123, 139.4132];

let map = L.map("map", {
  center: coordinates,
  zoom: 18 
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let circleMarker = L.circle(coordinates, {
  color: "black",
  fillColor: "red",
  fillOpacity: 0.5,
  radius: 500
}).bindPopup("<center>
             <h3>Hello From Tokyo,Japan!</h3>
             <iframe width="560" height="315" src="https://www.youtube.com/embed/IuTDuvYr7f0?si=e6mtcPH-UedqxK51" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
             </center>").addTo(map);
