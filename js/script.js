var map = L.map('map').setView([39.8282, -98.5795], 3);

L.tileLayer('http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png', {
    maxZoom: 18
}).addTo(map);

var marker = L.marker([40.3333, -105.7089]).addTo(map);
marker.bindPopup("Moose! <br>fear level:5").openPopup();

var marker = L.marker([50.116322, -122.957359]).addTo(map);
marker.bindPopup("Black Bear!<br>fear level:7").openPopup();

var marker = L.marker([37.2026, -112.9878]).addTo(map);
marker.bindPopup("Mountain Lion!<br>fear level: 8").openPopup();

var marker = L.marker([38.5333, -78.3500]).addTo(map);
marker.bindPopup("Brown Bear! <br>fear level: 4").openPopup();

var marker = L.marker([26.0000, -80.7000]).addTo(map);
marker.bindPopup("Crocodile!<br>fear level:3").openPopup();

var marker = L.marker([46.8529, -121.7604]).addTo(map);
marker.bindPopup("Grizzly Bear!<br>fear level:8").openPopup();



