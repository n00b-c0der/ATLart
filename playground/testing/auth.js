$(document).ready(function () {

    // This is the doc that I am using

    // https://firebase.google.com/docs/auth/web/start


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
    const auth = firebase.auth()
    const db = firebase.firestore()

    //guides is a collection in the db
    db.collection('guides').get().then(snapshot => {
        //value coming in from index.js
        // calling the setupGuides function defined in index.js
        console.log(snapshot);
        console.log(snapshot.docs);

        // setupGuides(snapshot.docs)
    });

    //listen for auth  status change
    auth.onAuthStateChanged(user => {
        // if (user) {
        //     db.collection('guides').get().then((snapshot) => {
        //         //value coming in from index.js
        //         setupGuides(snapshot.docs);

        //     })

        //     console.log(`user logged in ${user.email}`);

        // } else {
        //     console.log("logged out");
        //     setupGuides([])

        // }

    })

    //signup

    $("#submit").on("click", (e) => {

        e.preventDefault()
        console.log("hello");

        const email = $("#signup-email").val().trim()
        const password = $("#signup-password").val().trim()

        // console.log("hello2");

        // console.log(email), password;

        auth.createUserWithEmailAndPassword(email, password).then(cred => {
            console.log(cred);
            const modal = $("#modal-signup")
            M.Modal.getInstance(modal).close()

            // Not sure why reset is not working ?
            // $("#signup-Form").reset()
            $("#login-email").val('')
            $("#login-password").val('')

        })

    })

    //logout
    $("#logout").on("click", (e) => {
        e.preventDefault()
        auth.signOut().then(() => {
            console.log("logged out");

        })

    })

    //login

    $("#login-button").on("click", (e) => {
        e.preventDefault()
        const email = $("#login-email").val().trim()
        const password = $("#login-password").val().trim()


        auth.signInWithEmailAndPassword(email, password).then(cred => {
            console.log(cred);
            const modal = $("#modal-login")
            M.Modal.getInstance(modal).close()

            // $("#login-form").reset()
            $("#login-email").val('')
            $("#login-password").val('')
        })

    })

})