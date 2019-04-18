const acccountDetailsinfo = document.querySelector('.accountinfo')


//once sign in display different stuff hide sign up
auth.onAuthStateChanged(function (user) {
    console.log(loggedOutlinks);
    console.log(loggedInlinks);


    if (user) {

        const loggedinUserDetail = `Logged in as ${user.email}`
        console.log(loggedinUserDetail);

        acccountDetailsinfo.innerHTML = loggedinUserDetail


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