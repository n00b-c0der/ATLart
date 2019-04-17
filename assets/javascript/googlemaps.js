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

  myLatLng.on("value", function (snapShot) {
    // TODO:
    // Firebase values coming here
    var data = snapShot.val(); // { rahdnkey: { locationCoodsvals: {} }, anyotherrahdnkey: { locationCoodsvals: {} } }

    for (var key in data) {
      userLocation = data[key].locationCoodsvals;
      pinName = data[key].userNameField;
      contentString = `<h1>${data[key].DescriptionField}</h1> <img src="https://res.cloudinary.com/ronwab/image/upload/c_thumb,w_200,g_face/v1555194538/img3.jpg">`;

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
}
