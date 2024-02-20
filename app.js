
//Crear función
//Conectar función a su respectivo botón en el HTML
 function encriptar(){
    //Capturar el texto escrito en el campo del input del HTML
    let encriptarText = document.getElementById("ingresarEncriptado");
    let textEncriptado= encriptarText.value;
    console.log(textEncriptado)
    let conversion= textEncriptado
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");


    if(textEncriptado.length !=0){
        textEncriptado=conversion;
        console.log(conversion);

    }
 }
//Conectar función a su respectivo botón en el HTML
 function desencriptar(){
    //Capturar el texto escrito en el campo del input del HTML
    const desencriptarText = document.getElementById("ingresarDesencriptado");
    const textDesencriptado = desencriptarText.value;
  
 }
 

//Desarrollar la lógica de la encriptación
//Mostrar en la pantalla el resultado del texto encriptado
