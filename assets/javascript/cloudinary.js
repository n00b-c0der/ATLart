// // this is all from cloudinary  the url to where we will save our images
// var CLOUDNARY_URL = "https://api.cloudinary.com/v1_1/ronwab/upload";
// //upload preset in cloudinary https://cloudinary.com/console/settings/upload  scroll to upload presets
// var CLOUDNARY_UPLOAD_PRESET = "ffghjylr";
// //imgPreview is an image i had on the screen
// var imgPreview = document.getElementById("img-preview");
// //this creates the thingi to upload the images https://www.w3schools.com/tags/att_input_type_file.asp
// // I am not sure why they use "for" in the  body tag
// var fileUpload = document.getElementById("file-upload");

// //Adding an event listener called change.. I think we could also have used click..
// //This syntax i believe is vanila JS. we can always tweak it to jquery if we need to
// fileUpload.addEventListener("change", function(event) {
//   event.preventDefault();

//   //saving the response back from clicking the button
//   var file = event.target.files[0];
//   //FormData() is built in JS to help create key value pairs that can be used to send data
//   // https://developer.mozilla.org/en-US/docs/Web/API/FormData
//   var formData = new FormData();
//   formData.append("file", file);
//   formData.append("upload_preset", CLOUDNARY_UPLOAD_PRESET);

//   //similar to ajax Tried using ajax but was getting an error that I did not understand :-(
//   // $.ajax({
//   axios({
//     // see line 25
//     url: CLOUDNARY_URL,
//     // POST request pushes img to where ever we are saving
//     method: "POST",
//     //not sure about this guy
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded"
//     },
//     //not sure about this guy
//     data: formData

//     //This is just a callback function
//   }).then(function(res) {
//     console.log(res);
//     // setting returned results to the imgPreview
//     imgPreview.src = res.data.secure_url;
//   });
// });