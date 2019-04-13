//making map markers from firebase data

//     function initialize() {
//   var infowindow = new google.maps.InfoWindow();
//   var map = new google.maps.Map(
//     document.getElementById("map"), {
//       center: new google.maps.LatLng(37.4419, -122.1419),
//       zoom: 13,
//       mapTypeId: google.maps.MapTypeId.ROADMAP
//     });

//     var locationsRef = firebase.database().ref("locations");
//   var bounds = new google.maps.LatLngBounds();

//         locationsRef.on('child_added', function(snapshot) {
//     var data = snapshot.val();
//     var marker = new google.maps.Marker({
//         position: {
//         lat: data.User.l[0],
//         lng: data.User.l[1]
//         },
//         map: map
//     });
//     bounds.extend(marker.getPosition());
//     marker.addListener('click', (function(data) {
//         return function(e) {
//         infowindow.setContent(this.getPosition().toUrlValue(6) + "<br>" + data.User.g);
//         infowindow.open(map, this);
//         }
//     }(data)));
//     map.fitBounds(bounds);
//     });
//     }
    
    //Geocoder from Youtube tutorial
    // google.maps.visualRefresh = true;

    // var map;
    
    // function initialize() {
    //     getCoordinates('1045 Mision strret san francisco', function(coords) {

    //     })
    //     var mapOptions = {
    //         zoom: 8,
    //         center: new google.maps.LatLng(coords[0], coords[1]),
    //         mapTypeId: google.maps.MapTypeId.ROADMAP
    //     };
    //     map = new google.maps.Map(document.getElementById('map'),
    //         mapOptions);
    // }

    // google.maps.event.addDomListener(window, 'load', initialize);
    
    // geocoder = new google.maps.Geocoder();

    // function getCoordinates (address, callback) {
    //     var coordinates;
    //     geocoder.geocode({address: address}, function (results, status) {
    //         coords_obj = results[0].geometry.location;
    //         coordinates = [coords_obj.nb,coords_obj.ob];
    //         callback(coordinates);
    //     })
    // }