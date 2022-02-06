let kasutajaNimi = ''
while (kasutajaNimi == '') {
    kasutajaNimi = prompt("Sisesta nimi")
}

let tervitus = "Tere <strong>" + kasutajaNimi + "</strong>"
let tervitusElement = document.getElementById("kodunet66")

if (kasutajaNimi.length <6) {
    tervitus = "Küll sul on ilus lühike nimi"
} 

if (kasutajaNimi.length >6) {
    tervitus = "Küll sul on  suurepärane pikk nimi"
}  


if (kasutajaNimi == "Nipitiri") {
    tervitus = 'Tere sõber'
}

if (kasutajaNimi == "Nipitiri") {
    tervitus = 'Tere sõber'
}

tervitus  = tervitus + "<h2>Tähed sinu nimes</h2>"

for (let index = 1; index < kasutajaNimi.length; index++) {
    tervitus += "<div>Täht nr " + index + ": " + kasutajaNimi[index] + "</div>"
}

tervitusElement.innerHTML = tervitus
console.log(tervitus)