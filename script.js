window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    //hvad der skal ske
    showStart();
}

function showStart() {
    console.log("show start");
    document.querySelector("#portfolio_knap").classList.add("pulse");
}
