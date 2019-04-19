function initMap() {
  var contentString;
  let userLocation;
  var pinAddess;
  var pinTitle;

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: {
      lat: Number(33.749),
      lng: Number(-84.388),
    }
  });

  var myLatLng = firebase.database().ref("/");

  myLatLng.on("value", function (snapShot) {
    // TODO:
    // Firebase values coming here
    var data = snapShot.val(); // { rahdnkey: { locationCoodsvals: {} }, anyotherrahdnkey: { locationCoodsvals: {} } }

    for (var key in data) {
      // console.log(data);
      userLocation = data[key].locationCoodsvals;
      pinName = data[key].userNameField;
      imageurl = data[key].urlfield;
      imageTitleField = data[key].imageTitleField;
      console.log(imageurl);
      
      contentString = `<h1>${data[key].imageTitleField}</h1> <br> <img src="${imageurl}" width="180px"> <br> <h2>${pinName}<h/2>`;
      addToMarker(userLocation, pinName, contentString);
    }
    console.log(firebase.database().ref("/"))

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
