
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCQUPXI0N7-b4bOpNlb6n8ML1p6YW5VJ48",
    authDomain: "ronwab-8dbcd.firebaseapp.com",
    databaseURL: "https://ronwab-8dbcd.firebaseio.com",
    projectId: "ronwab-8dbcd",
    storageBucket: "ronwab-8dbcd.appspot.com",
    messagingSenderId: "148535054528"
  };
  firebase.initializeApp(config);

  var selectedFile;
  var locationCoodsvals = "/";

  var myLatLng;

  $("#file-upload").on("change", function(e) {
    e.preventDefault();

    selectedFile = e.target.files[0];

    uploadFile();
  });

  function uploadFile() {
    var filename = selectedFile.name;
    console.log(filename);

    // Create a root reference
    var storageRef = firebase.storage().ref("/TestImages/" + filename);

    var uploadTask = storageRef.put(selectedFile);
  }
  var filename = "img1.jpg";
  var imgRef = firebase.storage().ref("/TestImages/" + filename);

  $("#downloadbutton").on("click", function(e) {
    imgRef.getDownloadURL().then(function(url) {
      console.log(url);
      console.log(e);

      var imageOnPage = $("displayImages");
      imageOnPage.append(url);
      console.log("here");
      console.log(imageOnPage);
    });
  });