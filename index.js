const texto = document.querySelector("#txt-msg");
const txt2 = document.querySelector("#txt-msg2");


function criptografa() {
  console.log(texto.value);
  let textoR = texto.value;
  let resultadoCript = textoR
    .replace(/e/g, "en")
    .replace(/i/g, "in")
    .replace(/u/g, "un")
    .replace(/a/g, "an")
    .replace(/o/g, "on");
  txt2.value = resultadoCript;
  
}

function descriptografar() {
  console.log("...");
  console.log(texto.value);
  let textoR = texto.value.toLowerCase();
  let resultadoDescript = textoR
    .replace(/en/g, "e")
    .replace(/in/g, "i")
    .replace(/un/g, "u")
    .replace(/an/g, "a")
    .replace(/on/g, "o");
  txt2.value = resultadoDescript;
  
}

function copiar() {
  let copTexto = document.getElementById("txt-msg2");
  copTexto.select();
  copTexto.setSelectionRange(0, 99999);
  document.execCommand("copy");
  txt2.value = "";
}