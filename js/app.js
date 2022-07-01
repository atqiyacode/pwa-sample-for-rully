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