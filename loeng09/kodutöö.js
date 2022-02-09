let sisendid =[];

function valjastaTekst(sisendTekst) {
    let valjundElement = document.getElementById("valjund")
    valjundElement.innerHTML += "<div>" + sisendTekst + "</div>"
    console.log(sisendTekst)
}

function naitaSisendatudVaartust(){
    let sisendTekst = document.getElementById("sisend").value 
    sisendid.push (sisendTekst);
    valjastaTekst(sisendid.length + '. ' + sisendTekst)
    document.getElementById("sisend").value=""
}




