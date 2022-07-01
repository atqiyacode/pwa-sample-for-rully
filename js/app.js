'use strict'
const row = document.querySelector(".row");
const coffees = [{
        name: "Perspiciatis",
        image: "images/coffee1.jpg"
    },
    {
        name: "Voluptatem",
        image: "images/coffee2.jpg"
    },
    {
        name: "Explicabo",
        image: "images/coffee3.jpg"
    },
    {
        name: "Rchitecto",
        image: "images/coffee4.jpg"
    },
    {
        name: " Beatae",
        image: "images/coffee5.jpg"
    },
    {
        name: " Vitae",
        image: "images/coffee6.jpg"
    },
    {
        name: "Inventore",
        image: "images/coffee7.jpg"
    },
    {
        name: "Veritatis",
        image: "images/coffee8.jpg"
    },
    {
        name: "Accusantium",
        image: "images/coffee9.jpg"
    }
];
const showCoffees = () => {
    let output = "";
    coffees.forEach(
        ({
            name,
            image
        }) =>
        (output += `
        <div class="col-md-12 col-xl-4 my-4">
        <div class="card" >
        <div class="card-body text-center">
        <img src="${image}" class="img-rounded" alt="Responsive Image"
        width="300" height="300" style="object-fit: cover;">
            <p class="card-text fw-bold text-center">${name}</p>
        </div>
        </div>
        </div>
              `)
    );
    row.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
            .register("serviceWorker.js")
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err));
    });
}

var toastElList = document.getElementById('toastinstall');
var toastElinit = new bootstrap.Toast(toastElList, {
    autohide: !1,
});


/* PWA add to phone Install ap button */
var btnAdd = document.getElementById('addtohome')
var defferedPrompt;
window.addEventListener("beforeinstallprompt", function(event) {
    event.preventDefault();
    defferedPrompt = event;

    btnAdd.addEventListener("click", function(event) {
        defferedPrompt.prompt();


        defferedPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
            } else {
                console.log('User dismissed the A2HS prompt');
            }
            defferedPrompt = null;
        });
    });
});

window.addEventListener("appinstalled", function(event) {
    localStorage.setItem('appInstalled', true)
    document.getElementById('toastinstall').style.display = 'none';
});

let appInstalled = localStorage.getItem('appInstalled')
if (!appInstalled) {
    console.log('not install');
    // localStorage.setItem('appInstalled', false)
    toastElinit.show();
} else {
    toastElinit.hide();
}


if (window.matchMedia('(display-mode: fullscreen)').matches) {
    $('#toastinstall').fadeOut()
} else {
    $('#toastinstall').fadeIn()
}