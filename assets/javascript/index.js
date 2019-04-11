$(document).ready(function () {
    console.log("test1");

    //setup materialize



    // var guidelist2 =  document.querySelector('.guides')
    // accesses the dom for guide objects
    const guidelist = $(".guides");

    // setup guide
    window.setupGuides = (data) => {
        let html = '';
        data.forEach(function doc() {
            const guide = doc.data()
            console.log(guide);

        })
        // setupGuides(snapshot.docs)
        // https: www.youtube.com/watch?v=kIVg_yTiO3Q 9.54

    }
    var modals = document.querySelectorAll(".modal");
    M.Modal.init(modals);

    var items = document.querySelectorAll(".collapsible");
    M.Collapsible.init(items);

    const loggedOutLinks = $('.logged-out');
    const logggedInLinks = $('.linked-in')
    const setupUI = (user) => {
        if (user) {

        }
    }

});
console.log("test");