let billetter = [];
let film = document.getElementById("filmvelger");
let antall = document.getElementById("antallInput");
let fornavn = document.getElementById("fornavnInput");
let etternavn = document.getElementById("etternavnInput");
let telefon = document.getElementById("telefonnrInput");
let epost = document.getElementById("epostInput");
let billettListe = document.getElementById("billettVisning");
let slettBilletterKnapp = document.getElementById("slettBilletterKnapp");

function godkjennBillett(){
    //Sjekker om film er valgt
    if (film.selectedIndex === 0){
        alert("Du må velge en film");
        return false
    }
    //sjekker antall
    if (isNaN(antall.value) || antall.value < 1){
        alert("Velg et gyldig antall billetter");
        return false
    }

    //Ser om fornavn er gyldig, KOrteste navn F. eks Jo Aa
    if (fornavn.value.length < 2){
        alert("Skriv inn et lovlig fornavn");
        return false
    }

    //Ser om etternavn er gyldig, Korteste navn F. eks Jo Aa
    if (etternavn.value.length < 2 ){
        alert("Skriv inn et lovlig etternavn");
        return false
    }

    //validerer e-post
    if (epost.value.includes("@")){
        return
    } else {
        alert('E-postadresse på inneholde "@"');
        return false
    }

    //validerer telefonnumemr
    if (telefon.value.length != 8 || telefon.value.includes("e")){
        alert("Ikke gyldig telefonnummmer");
        return false
    }
}

function kjopBillett(){
    if (godkjennBillett() == false){
        return
    };

    //Reseter billettlisten
    billettListe.innerHTML = "<h3> Alle billetter</h3>";

    //Oppdaterer arrayet med nåværende bestilling og skriver det ut
    let denneBilletten = {
        filmNavn : film.value,
        antallBilletter : antall.value,
        kjoperNavn : fornavn.value + " " + etternavn.value,
        kjoperTel : telefon.value,
        kjoperEpost : epost.value
    };

    //Legger ny billett fremst i listen, og skriver ut listen
    billetter.unshift(denneBilletten);
    for (let i = 0; i <  billetter.length; i++){
        billettListe.innerHTML += `Film: ${billetter[i].filmNavn}, ${billetter[i].antallBilletter} billetter.<br>
                                   Kontaktinfo: ${billetter[i].kjoperNavn}, ${billetter[i].kjoperTel}, ${billetter[i].kjoperEpost} <hr> `
    }

    //Inputfelt "blankes"
    film.selectedIndex = 0;
    antall.value = "";
    fornavn.value = "";
    etternavn.value = "";
    telefon.value = "";
    epost.value = "";
}

slettBilletterKnapp.addEventListener("click", slettBilletter);

function slettBilletter(){
    billetter = [];
    billettListe.innerHTML = "<h3> Alle billetter</h3>";
}