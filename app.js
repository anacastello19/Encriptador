
//Crear función
//Conectar función a su respectivo botón en el HTML
function encriptar(){
    //Boton
    let btnCopiar= document.getElementById("copiar");
    //Capturar el texto escrito en el campo del input del HTML
    let encriptarText = document.getElementById("ingresarDesEncriptado");
    let textEncriptado= encriptarText.value;
    console.log(textEncriptado)
    
    let conversion= textEncriptado
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");


    if(textEncriptado.length !=0){
        //Mostramos en consola
        console.log(conversion);
        btnCopiar.style.display="block";
    }
}
//Conectar función a su respectivo botón en el HTML
function desencriptar(){
    //Capturar el texto escrito en el campo del input del HTML
    let desencriptarText = document.getElementById("ingresarDesEncriptado");
    let textDesencriptado = desencriptarText.value;
    console.log(textDesencriptado)
    let conversion= textDesencriptado
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if(textDesencriptado.length !=0){
        //Se encripta el texto 
        textDesencriptado=conversion;
        //Mostramos en consola
        console.log(conversion);
        if(document.getElementById("muñeco").innerHTML = textDesencriptado){

        }
    
    }
}
 

//Desarrollar la lógica de la encriptación
//Mostrar en la pantalla el resultado del texto encriptado
