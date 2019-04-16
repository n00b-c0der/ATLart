function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: {
            lat: Number(33.7490),
            lng: Number(-84.3880)
        }
    });
    

    var myLatLng = firebase.database().ref("/");

    var infowindow = new google.maps.InfoWindow({
        content: "Testy test tester"
      });

    myLatLng.on("value", function (snapChot) {
        // TODO:
        // Firebase values coming here
        var data = snapChot
            .val(); // { rahdnkey: { locationCoodsvals: {} }, anyotherrahdnkey: { locationCoodsvals: {} } }

        for (var key in data) {
            let userLocation = data[key].locationCoodsvals;
            console.log("My Lat LG: ", userLocation);
            var marker = new google.maps.Marker({
                position: userLocation,
                map: map,
            });

       
        }

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map, marker);
        });
        
    });
}
