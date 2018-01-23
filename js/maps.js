// initialize the map on the "map" div with a given center and zoom
var map = L.map('map', {
    center: [36.744700, -3.881459],
    zoom: 15
});

L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2VzdGVyIiwiYSI6ImNqMXFpNHY4eDAwNzIzM281YWgyam5pNG4ifQ.VSn2a-tVEtUCpnbqShaRLQ', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  maxZoom: 19
}).addTo(map);

var marker1 = L.marker([36.745529, -3.883188]).addTo(map);
marker1.bindPopup("Farmacia<br>El Barco");
var marker3 = L.marker([36.743940, -3.885336]).addTo(map);
marker3.bindPopup("Farmacia<br>Rafael Castillón");
var marker4 = L.marker([36.747550, -3.880215]).addTo(map);
marker4.bindPopup("Farmacia<br>Cristina Ruiz");
var marker4 = L.marker([36.747550, -3.880215]).addTo(map);
marker4.bindPopup("Farmacia<br>Cristina Ruiz");
var marker5 = L.marker([36.747673, -3.876347]).addTo(map);
marker5.bindPopup("Farmacia<br>Lucía Sáenz de Buruaga");
var marker6 = L.marker([36.755370, -3.874468]).addTo(map);
marker6.bindPopup("Farmacia<br>José Blanca");
var marker7 = L.marker([36.751216, -3.874437]).addTo(map);
marker7.bindPopup("Farmacia<br>Sáenz de Buruaga y Lerena");
var marker8 = L.marker([36.750635, -3.878165]).addTo(map);
marker8.bindPopup("Farmacia<br>Chillar");
var marker9 = L.marker([36.748594, -3.878464]).addTo(map);
marker9.bindPopup("Farmacia<br>José Miguel Gómez");
var marker2 = L.marker([36.745358, -3.879985]).addTo(map);
marker2.bindPopup("Farmacia<br>Lucía Molina");
//
var app = {
  dispositivoListo: function(){
    navigator.geolocation.getCurrentPosition(app.pintaCoordenadasEnMapa, app.errorAlSolicitarLocalizacion);
  },

  pintaCoordenadasEnMapa: function(position){
    var circle = L.circle([position.coords.latitude, position.coords.longitude], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 100
      }).addTo(map);
      }
};
if ('addEventListener' in document) {
  document.addEventListener('deviceready', function() {
    app.dispositivoListo();
  }, false);
}
