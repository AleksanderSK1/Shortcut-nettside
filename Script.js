let startside = document.getElementById("startside");
let supportSide = document.getElementById("supportSide");
let ipSide = document.getElementById("ipSide");

let supportKnapp = document.getElementById("supportKnapp");
let ipKnapp = document.getElementById("ipKnapp");

let tilbakeKnapper = document.getElementsByClassName("tilbakeKnapp");

let problem = document.getElementById("problem");
let losningKnapp = document.getElementById("losningKnapp");
let svar = document.getElementById("svar");

function skjulSider() {
    startside.hidden = true;
    supportSide.hidden = true;
    ipSide.hidden = true;
}

supportKnapp.onclick = function () {
    skjulSider();
    supportSide.hidden = false;
};

ipKnapp.onclick = function () {
    skjulSider();
    ipSide.hidden = false;
};

for (let i = 0; i < tilbakeKnapper.length; i++) {
    tilbakeKnapper[i].onclick = function () {
        skjulSider();
        startside.hidden = false;
    };
}

losningKnapp.onclick = function () {

    if (problem.value === "nettside") {
        svar.innerHTML = "<h3>Løsning</h3><p>Sjekk at du er koblet til riktig nettverk. Prøv deretter å åpne support.shortcut.local eller 192.168.20.10.</p>";
    }

    else if (problem.value === "ip") {
        svar.innerHTML = "<h3>Løsning</h3><p>Åpne terminal eller CMD og bruk ipconfig. Sjekk at maskinen har fått en IP-adresse i riktig nettverk.</p>";
    }

    else if (problem.value === "innlogging") {
        svar.innerHTML = "<h3>Løsning</h3><p>Sjekk brukernavn og passord. Kontakt IT hvis kontoen er låst eller passordet må tilbakestilles.</p>";
    }

    else if (problem.value === "dns") {
        svar.innerHTML = "<h3>Løsning</h3><p>Sjekk at DNS-serveren peker til 192.168.20.10. Domenenavnet support.shortcut.local peker til serveren.</p>";
    }

    else {
        svar.innerHTML = "<p>Velg et problem for å se forslag til løsning.</p>";
    }
};