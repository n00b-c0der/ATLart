var userPassword;
var confirmPassword;
var userEmail;
const loggedOutlinks = document.querySelectorAll('.logged-out')
const loggedInlinks = document.querySelectorAll('.logged-in')

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

// db = firebase.database()
database = firebase.database()
const auth = firebase.auth()



function signUp(event) {

    event.preventDefault();
    console.log("hello");

    userEmail = document.getElementById('emailAddress').value;
    userPassword = document.getElementById('password').value;
    confirmPassword = document.getElementById('confirmPassword').value;

    comparePasswords()


    auth.createUserWithEmailAndPassword(userEmail, userPassword)


    // .catch(function (error) {

    //     console.log(error);
    // })


    console.log(userEmail, userPassword, confirmPassword);
    $('#sign-up-Modal').modal('hide')

    console.log("Signed UP");
}

function comparePasswords() {
    if (userPassword != confirmPassword) {
        alert("passwords dont match");
        document.getElementById('emailAddress').value = (" ");
        document.getElementById('password').value = (" ");
        document.getElementById('confirmPassword').value = (" ");
        return
        //     } else if(

        //     )
    }
}
document.getElementById('signInSubmit').addEventListener('click', signInSubmit)

function signInSubmit(event) {
    event.preventDefault();
    console.log("yo");

    userEmail = document.getElementById('SignInEmailAddress').value;
    userPassword = document.getElementById('signInPassword').value;
    console.log(userEmail, userPassword);

    auth.signInWithEmailAndPassword(userEmail, userPassword)

    $('#sign-in-Modal').modal('hide')
    alert('signed in')
    location.assign("/html/uploadImage.html");

}

document.getElementById('signOutLink').addEventListener('click', logOut)

function logOut() {
    auth.signOut()
    console.log('signed out');


}
//once sign in display different stuff hide sign up
auth.onAuthStateChanged(function (user) {
    console.log(loggedOutlinks);
    console.log(loggedInlinks);


    if (user) {
        loggedOutlinks.forEach(links => {
            links.style.display = 'none'
        });
        loggedInlinks.forEach(links => {
            links.style.display = 'block'
        })
    } else {
        loggedOutlinks.forEach(links => {
            links.style.display = 'block'
        });
        loggedInlinks.forEach(links => {
            links.style.display = 'none'
        })

    }
})