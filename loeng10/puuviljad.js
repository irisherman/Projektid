
let saadused = [ apelsin, porgand, banaan, mandariin ]

function looPuuviljaHTML (puuvili) {
    return `
    <div class="col-6 card">
        <img class="card-img-top" src="${puuvili.pilt}"
        <div class="card-body">
            <div class="card-title"> ${puuvili.nimi}</div>
            <div class="card-text"> 
            <p> 
                Liik:${puuvili.liik}, Hinnang: ${puuvili.hinnang}
            </p>
                <div>
                ${puuvili.kirjeldus}
                </div>
            </div>
        </div>
  
    `
}

function lisaPuuvili() {
    let nimetusTekst = document.getElementById("nimetus").value
    let liikTekst = document.getElementById("liik").value
    let hinnang = document.getElementById("hinnang").value
    let puuvili = {
    liik: liikTekst,
    nimi: nimetusTekst,
    hinnang: hinnang,
    pilt: "./assets/apelsin.jpg",
    kirjeldus: "Kasutaja sisestatud puuvili"

    }
    saadused.push(puuvili)
    naitaPuuvilju()
}

function naitaPuuvilju() {

    let valjundElement = document.getElementById("valjund")
    let valjundHTML = ''
    valjundHTML += '<div class="row">'
    for (let i = 0; i < saadused.length; i++) {
        valjundHTML += looPuuviljaHTML (saadused[i])
    }
    valjundHTML +='</div>'
    valjundElement.innerHTML =valjundHTML

}

naitaPuuvilju()