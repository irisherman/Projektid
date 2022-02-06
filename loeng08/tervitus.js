let kasutajaNimi = ''
while (kasutajaNimi == '') {
    kasutajaNimi = prompt("Sisesta nimi")
}

let tervitus = "Tere <strong>" + kasutajaNimi + "</strong>"
let tervitusElement = document.getElementById("tervitus")


if (kasutajaNimi == "Nipitiri") {
    tervitus = 'Tere sõber'
}

if (kasutajaNimi == "Nipitiri") {
    tervitus = 'Tere sõber'
}

tervitus  = tervitus + "<h2>Tähed sinu nimes</h2>"

for (let index = 0; index < kasutajaNimi.length; index++) {
    tervitus += "<div>Täht nr " + index + ": " + kasutajaNimi[index] + "</div>"
}

tervitusElement.innerHTML = tervitus
console.log(tervitus)