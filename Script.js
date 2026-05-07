let startside = document.getElementById("startside");
let infoSide = document.getElementById("infoSide");

let tilInfo = document.getElementById("tilInfo");
let tilbake = document.getElementById("tilbake");

tilInfo.onclick = function () {
    startside.hidden = true;
    infoSide.hidden = false;
};

tilbake.onclick = function () {
    infoSide.hidden = true;
    startside.hidden = false;
};