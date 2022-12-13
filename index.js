let texto = document.querySelector("#txt-msg");
let txt2 = document.querySelector("#txt-msg2");

function criptografa(){
    let textoR= texto.value;
    let resultadoCript = textoR.replace(/e/g, "en").replace(/i/g, "in").replace(/u/g, "un").replace(/a/g, "an")
    .replace(/o/g, "on");
    document.getElementById('txt-msg2').innerHTML =  resultadoCript ; 
    return resultadoCript;
}

function descriptografar(){
    let textoR= txt2.value;
    let resultadoDescript =  textoR.replace(/en/g, "e").replace(/in/g, "i").replace(/un/g, "u").replace(/an/g, "a")
    .replace(/on/g, "o");
    document.getElementById('txt-msg2').innerHTML =  resultadoDescript  ;
    return resultadoDescript;
}

function copiar(){
    let copTexto = document.getElementById("txt-msg2");
    copTexto.select();
    copTexto.setSelectionRange(0, 99999);
    document.execCommand('copy');

}