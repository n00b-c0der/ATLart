function initMap() {
  var contentString;
  let userLocation;
  var pinAddess;
  var pinTitle;

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: {
      lat: Number(33.749),
      lng: Number(-84.388)
    }
  });

  var myLatLng = firebase.database().ref("/");

  myLatLng.on("value", function (snapChot) {
    // TODO:
    // Firebase values coming here
    var data = snapChot.val(); // { rahdnkey: { locationCoodsvals: {} }, anyotherrahdnkey: { locationCoodsvals: {} } }

    for (var key in data) {
      userLocation = data[key].locationCoodsvals;
      pinName = data[key].userNameField;
      contentString = `<h1>${data[key].DescriptionField}</h1>`;
      //   console.log("pinName " + pinName);

      addToMarker(userLocation, pinName, contentString);
    }

    function addToMarker(userLocation, pinName, contentString) {

      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });

      // console.log("My Lat LG: ", userLocation);
      var marker = new google.maps.Marker({
        position: userLocation,
        map: map,
        // title: pinName
        title: pinName
      });

      marker.addListener("click", function () {
        infowindow.open(map, marker);
        console.log("pinName " + pinName);
      });
    }
  });

  // console.log("My Lat LG: Blah", userLocation);
}