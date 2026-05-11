let startside = document.getElementById("startside");
let dokumentasjonSide = document.getElementById("dokumentasjonSide");
let ipSide = document.getElementById("ipSide");
let feilSide = document.getElementById("feilSide");

let dokumentasjonKnapp = document.getElementById("dokumentasjonKnapp");
let ipKnapp = document.getElementById("ipKnapp");
let feilKnapp = document.getElementById("feilKnapp");

let tilbakeKnapper = document.getElementsByClassName("tilbakeKnapp");

let problem = document.getElementById("problem");
let losningKnapp = document.getElementById("losningKnapp");
let svar = document.getElementById("svar");

function skjulSider() {
    startside.hidden = true;
    dokumentasjonSide.hidden = true;
    ipSide.hidden = true;
    feilSide.hidden = true;
}

dokumentasjonKnapp.onclick = function () {
    skjulSider();
    dokumentasjonSide.hidden = false;
};

ipKnapp.onclick = function () {
    skjulSider();
    ipSide.hidden = false;
};

feilKnapp.onclick = function () {
    skjulSider();
    feilSide.hidden = false;
};


for (let i = 0; i < tilbakeKnapper.length; i++) {
    tilbakeKnapper[i].onclick = function () {
        skjulSider();
        startside.hidden = false;
    };
}

losningKnapp.onclick = function () {

    if (problem.value === "nettside") {
        svar.innerHTML = "<h3>Løsning</h3><p>Sjekk at IIS kjører på serveren. Test først med http://192.168.20.10. Hvis IP fungerer, men domenenavnet ikke fungerer, er problemet sannsynligvis DNS.</p>";
    }

    else if (problem.value === "ip") {
        svar.innerHTML = "<h3>Løsning</h3><p>Bruk ipconfig for å kontrollere IP-adresse, gateway og DNS-server. Klienter skal få IP fra DHCP-området, mens serveren skal ha statisk IP-adresse 192.168.20.10.</p>";
    }

    else if (problem.value === "innlogging") {
        svar.innerHTML = "<h3>Løsning</h3><p>Sjekk at brukeren finnes i Active Directory, at passordet er riktig, og at kontoen ikke er låst. Hvis kontoen er låst, kan den låses opp i Active Directory Users and Computers.</p>";
    }

    else if (problem.value === "dns") {
        svar.innerHTML = "<h3>Løsning</h3><p>Sjekk at klienten bruker 192.168.20.10 som DNS-server. Test deretter med nslookup support.shortcut.local. DNS-recorden skal peke til 192.168.20.10.</p>";
    }


    else if (problem.value === "passord") {
        svar.innerHTML = "<h3>Løsning</h3><p> Sørg for at passord er 12 siffer eller lengre </p>";
    }

    else if (problem.value === "Klarer ikke å koble til domenet") {
        svar.innerHTML = "<h3>Løsning</h3><p> Dns miskonfigurasjon og / eller nettverksproblemer </p>";
    }

    else {
        svar.innerHTML = "<p>Velg et problem for å se forslag til løsning.</p>";
    }
};