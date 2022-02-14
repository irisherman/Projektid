let tegemised = []

function lootegevuseHTML (tegevus) {
    return `
    <div class="col-6 card">
        <div class="card-body">
            <div class="card-title"> ${tegevus.kirjeldus}</div>
            <div class="card-text"> 
            <p> 
                Tähtsus:${tegevus.t2htsus}
            </p>
            <p> 
                Tähtaeg: ${tegevus.t2htaeg}
            </p>
            </div>
        </div>
  </div>
    `
}



function lisategevus() {
    let kirjeldusTekst = document.getElementById("kirjeldus").value
    let t2htsusTekst = document.getElementById("t2htsus").value
    let t2htaeg = document.getElementById("t2htaeg").value
    let tegevus = {
    kirjeldus: kirjeldusTekst,
    t2htsus: t2htsusTekst,
    t2htaeg: t2htaeg,

    }
    tegemised.push(tegevus)
    naitategevusi()
}

function naitategevusi() {

    let valjundElement = document.getElementById("valjund")
    let valjundHTML = ''
    valjundHTML += '<div class="row">'
    for (let i = 0; i < tegemised.length; i++) {
        valjundHTML += lootegevuseHTML (tegemised[i])
    }
    valjundHTML +='</div>'
    valjundElement.innerHTML =valjundHTML

}

naitategevusi()