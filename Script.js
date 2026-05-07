let startside = document.getElementById("startside");

let prosjektSide = document.getElementById("prosjektSide");
let ipSide = document.getElementById("ipSide");

let prosjektKnapp = document.getElementById("prosjektKnapp");
let ipKnapp = document.getElementById("ipKnapp");

let tilbakeProsjekt = document.getElementById("tilbakeProsjekt");
let tilbakeIp = document.getElementById("tilbakeIp");

prosjektKnapp.onclick = function () {

    startside.hidden = true;
    prosjektSide.hidden = false;
};

ipKnapp.onclick = function () {

    startside.hidden = true;
    ipSide.hidden = false;
};

tilbakeProsjekt.onclick = function () {

    prosjektSide.hidden = true;
    startside.hidden = false;
};

tilbakeIp.onclick = function () {

    ipSide.hidden = true;
    startside.hidden = false;
};