let tegemised = []

function lootegevuseHTML (tegevus) {
    return `
    <div class="col-6 card">
        <div class="card-body">
            <div class="card-title"> ${tegevus.nimi}</div>
            <div class="card-text"> 

            <p> 
            Täname, et edastasite meile teate.
            </p>
            </div>
        </div>
  </div>
    `
}



function lisategevus() {
    let nimi = document.getElementById("nimi").value
    let tegevus = {
    
    nimi: nimi,
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

let inputs = document.querySelectorAll('input');

let btnClear = document.querySelector('button');

btnClear.addEventListener('click', () => {
    inputs.forEach(input =>  input.value = '');
});