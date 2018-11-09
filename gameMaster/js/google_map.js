var map;
var marker
function initMap(){
        map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 53.9, lng: 27.56667},
        zoom: 15
        });
          
       var marker = new google.maps.Marker({
            position: {lat: 53.9, lng: 27.56667},
            map: map
          });

}