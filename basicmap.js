// 35.2176665°N 80.831473°W -> 35.2176665, -80.831473

var map = L.map("map", {
  center: [35.2176665, -80.831473],
  zoom: 10
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let centralMarker = L.marker([35.2176665, -80.831473], {title: "CPCC central Campus"}).bindPopup("<p>Central Campus</p>").addTo(map);
let levineMarker = L.marker([35.11, -80.69], {title: "CPCC Levine Campus"}).bindPopup("<p>Levine Campus</p>").addTo(map);
let catoMarker = L.marker([35.2648627, -80.73116], {title: "CPCC Cato Campus"}).bindPopup("<p>Cato Campus</p>").addTo(map);
let harbonMarker = L.marker([35.12, -80.93], {title: "CPCC Harbon Campus"}).bindPopup("<p>Harbon Campus</p>").addTo(map);
let harrisMarker = L.marker([35.22, -80.92], {title: "CPCC Harris Campus"}).bindPopup("<p>Harris Campus</p>").addTo(map);
let merancasMarker = L.marker([35.39, -80.84], {title: "CPCC Mercancas Campus"}).bindPopup("<p>Mercancas Campus</p>").addTo(map);
