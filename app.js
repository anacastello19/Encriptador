
//Crear función
//Conectar función a su respectivo botón en el HTML
function encriptar(){
    //Capturar el texto escrito en el campo del input del HTML
    let encriptarText = document.getElementById("ingresarDesEncriptado").value;
    console.log(encriptarText)
    
    let conversionLetter= {
        e: "enter",
        i: "imes",
        a: "ai",
        o: "ober",
        u: "ufat"
    }; 

    let conversion= encriptarText.replace(/[eiaou]/gi, match => conversionLetter[match]);

    if(encriptarText.length !==0){
        //Mostramos en consola
        console.log(conversion);
        document.getElementById("copiar").style.display="block";
        //document.getElementById("copiar").style.text="center";

    }
}
//Conectar función a su respectivo botón en el HTML
function desencriptar(){
    //Capturar el texto escrito en el campo del input del HTML
    const desencriptarText = document.getElementById("ingresarDesEncriptado").value;
    console.log(desencriptarText)

    let conversionLetter= {
        enter: "e",
        imes: "i",
        ai: "a",
        ober: "o",
        ufat: "u"
    };

    const conversion =desencriptarText.replace(/\b(enter|imes|ai|ober|ufat)\b/gi, match => conversionLetter[match]);

    if(textDesencriptado.length !==0){
        document.getElementById("muñeco").innerHTML = conversion;
        console.log(conversion);
    
    }
}
 

//Desarrollar la lógica de la encriptación
//Mostrar en la pantalla el resultado del texto encriptado