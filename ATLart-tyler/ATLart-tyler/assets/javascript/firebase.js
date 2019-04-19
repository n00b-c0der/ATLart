$(document).ready(function () {

    var config = {
        apiKey: "AIzaSyCQUPXI0N7-b4bOpNlb6n8ML1p6YW5VJ48",
        authDomain: "ronwab-8dbcd.firebaseapp.com",
        databaseURL: "https://ronwab-8dbcd.firebaseio.com",
        projectId: "ronwab-8dbcd",
        storageBucket: "ronwab-8dbcd.appspot.com",
        messagingSenderId: "148535054528"
    };
    firebase.initializeApp(config);
    database = firebase.database()
    var selectedFile
    var imageTitle;
    var userName;
    var uploadDate = 0;
    var Address = 0;
    var Description;

    var CLOUDNARY_URL = 'https://api.cloudinary.com/v1_1/ronwab/upload'
    var CLOUDNARY_UPLOAD_PRESET = 'ffghjylr'
    var fileUpload = document.getElementById('file-upload');
    var userFile;
    var imageName;
    var LocationCoods = 0;
    

    fileUpload.addEventListener('change', function (event) {
        event.preventDefault()
        console.log(event)

        userFile = event.target.files[0]
        imageName = event.target.files[0].name

    })

    $("#submit-button").on("click", function (event) {
        event.preventDefault()
        console.log(imageName);

        imageTitle = $('#imageTitle').val().trim().toLowerCase();
        userName = $('#userName').val().toLowerCase();
        uploadDate = $('#uploadDate').val().trim().toLowerCase();
        Address = $('#Address').val().trim().toLowerCase();
        Description = $('#Description').val().trim().toLowerCase();


        var formData = new FormData();
        formData.append('file', userFile);
        formData.append('upload_preset', CLOUDNARY_UPLOAD_PRESET)

        axios({
            // see line 25
            url: CLOUDNARY_URL,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: formData

            //This is just a callback function
        }).then(function (res) {


            // var testing2 = res.data.url


            // var imageOnPage = $(".displayImages")
            // $(".displayImages").attr('src', testing2)
        })

        axios({
            url: "https://maps.googleapis.com/maps/api/geocode/json?address=" +
                Address + "&key=AIzaSyDq2hOQHj-qstNYUsl7a8kHOtrkeJVhdro",
            method: "GET"
        }).then(function (data) {
            console.log(data);

            LocationCoods = data.data.results[0].geometry.location
            console.log(LocationCoods);

            var personDetails = {
                imageTitleField: imageTitle,
                userNameField: userName,
                DateField: uploadDate,
                AddressField: Address,
                DescriptionField: Description,
                ImageField: imageName,
                locationCoodsvals: LocationCoods
            }

            database.ref().push(personDetails)

        })
    })

})
