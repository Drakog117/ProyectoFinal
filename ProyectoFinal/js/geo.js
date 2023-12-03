const coord ={lat: 19.432947, lng:-99.133349}
const mapDiv = document.getElementById("map");
let map
let marker
function initMap() {
    map = new google.maps.Map(mapDiv, {
        center: coord,
        zoom: 9,
    });

marker = new google.maps.Marker({
    position: coord,
    map: map
})
}