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


//making mnarkers from firebase v2
        // function initMap() {
        //     var myLatLng = firebase.database().ref("locations");
        
        //     var map = new google.maps.Map(document.getElementById('map'), {
        //     zoom: 4,
        //     center: {lat: -25.344, lng: 131.036},
        //     });
        
        //     var marker = new google.maps.Marker({
        //     position: myLatLng,
        //     map: map,
        //     title: 'Hello World!'
        //     });
            


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


//Geocoder v2

    // var geocoder;
    // var map = new google.maps.Map(document.getElementById("#map"), myOptions);
    // var address = "San Diego, CA"; 

    // function initialize() {
    // geocoder = new google.maps.Geocoder();
    // var latlng = new google.maps.LatLng(-34.397, 150.644);
    // var myOptions = {
    //     zoom: 8,
    //     center: latlng,
    //     mapTypeControl: true,
    //     mapTypeControlOptions: {
    //     style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
    //     },
    //     navigationControl: true,
    //     mapTypeId: google.maps.MapTypeId.ROADMAP
    // };
    
    // if (geocoder) {
    //     geocoder.geocode({
    //     'address': address
    //     }, function(results, status) {
    //     if (status == google.maps.GeocoderStatus.OK) {
    //         if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
    //         map.setCenter(results[0].geometry.location);

    //         var infowindow = new google.maps.InfoWindow({
    //             content: '<b>' + address + '</b>',
    //             size: new google.maps.Size(150, 50)
    //         });

    //         var marker = new google.maps.Marker({
    //             position: results[0].geometry.location,
    //             map: map,
    //             title: address
    //         });
    //         console.log(marker)
    //         google.maps.event.addListener(marker, 'click', function() {
    //             infowindow.open(map, marker);
    //         });

    //         } else {
    //         alert("No results found");
    //         }
    //     } else {
    //         alert("Geocode was not successful for the following reason: " + status);
    //     }
    //     });
    // }
    // }
    // google.maps.event.addDomListener(window, 'load', initialize);


//Geofire
    
        //Connection to your firebase database
        // firebase.initializeApp({
        // apiKey: “<your-firebase-api-key>”,
        // databaseURL: “https://<your-firebase-app-name>.firebaseio.com"
        // });
        
        // //Create a node at firebase location to add locations as child keys
        // var usersRef = firebase.database().ref(“users”).push();
        
        // // Create a new GeoFire key under users Firebase location
        // var geoFire = new GeoFire(firebaseRef.child(“geofire”));

        // geoFire.set(<atlanta>, [<lat>,<long>]).then(function() {
        // console.log(“Location added”)
        // }).catch(function(error) {
        // console.log(error);
        
        // //Clears user's data when they exit the browser
        // usersRef.child(“_geofire”).onDisconnect().remove();
        // });