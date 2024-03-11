
//Crear función
//Conectar función a su respectivo botón en el HTML
function encriptar(){
    //Capturar el texto escrito en el campo del input del HTML
    let encriptarText = document.getElementById("ingresarDesEncriptado").value;
    
    let conversionLetter= {
        e: "enter",
        i: "imes",
        a: "ai",
        o: "ober",
        u: "ufat"
    }; 

    let conversion= encriptarText.replace(/[eiaou]/gi, match => conversionLetter[match]);

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
    let desencriptarText = document.getElementById("ingresarDesEncriptado").value;

    let conversion= desencriptarText
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if(desencriptarText.length !=0){
        document.getElementById("muñeco").innerHTML = conversion;
        document.getElementById("copiar").style.display="block";

    }
}
//Desarrollar la lógica de la encriptación
//Mostrar en la pantalla el resultado del texto encriptado