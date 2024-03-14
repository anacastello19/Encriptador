
//Crear función
//Conectar función a su respectivo botón en el HTMl

function encriptar(){
    //Capturar el texto escrito en el campo del input del HTML
    let encriptarText = document.getElementById("ingresarDesEncriptado").value.toLowerCase();

    let conversionLetter= {
        e: "enter",
        i: "imes",
        a: "ai",
        o: "ober",
        u: "ufat"
    }; 

    let conversion= encriptarText.replace(/[eiaou]/gi, match => conversionLetter[match]);

    conversion.toLowerCase();

    if(encriptarText.length !=0){
        //Mostramos en consola
        document.getElementById("mensaje").innerHTML = conversion;
        document.getElementById("copiar").style.display="block";
        document.getElementById("img").style.display="none";

        //document.getElementById("copiar").style.text="center";

    }
}
//Conectar función a su respectivo botón en el HTML
function desencriptar(){
    //Capturar el texto escrito en el campo del input del HTML
    let desencriptarText = document.getElementById("ingresarDesEncriptado").value.toLowerCase();


    let conversion= desencriptarText
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if(desencriptarText.length !=0){
        document.getElementById("mensaje").innerHTML = conversion;
        document.getElementById("copiar").style.display="block";

    }
}

let botonCopiar = document.getElementById("copiar");

botonCopiar.addEventListener("click", function () {
  let textoResultado = document.getElementById("mensaje").innerHTML;
  navigator.clipboard.writeText(textoResultado)
    .then(() => {
      alert("Texto copiado al portapapeles correctamente.");
    })
    .catch((error) => {
      alert("Error al copiar texto: " + error);
    });
});
//Desarrollar la lógica de la encriptación
//Mostrar en la pantalla el resultado del texto encriptado