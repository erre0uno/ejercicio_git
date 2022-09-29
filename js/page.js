
inicio=()=>{
    alert("Bienvenido !!!");
}

mensajePrompt=()=>{
    let texto = prompt("Ingrese texto que desee....");
    document.getElementById("mensaje").innerHTML = texto;
}
margenes=()=>{
    let superior = prompt("Ingrese margen superior: ")+"px";
    let inferior = prompt("Ingrese margen inferior: ")+"px";
    let derecha = prompt("Ingrese margen derecha: ")+"px";
    let izquierda = prompt("Ingrese margen izquierda: ")+"px";

    let div= document.getElementById("mensaje");
    div.style.marginTop = superior;
    div.style.marginBottom = inferior;
    div.style.marginLeft = derecha;
    div.style.marginRight = izquierda;
}

alinear=(text)=>{
    let div= document.getElementById("mensaje");
    div.style.textAlign = text.value;
}

bordes=(text)=>{
    let div= document.getElementById("mensaje");
    
    console.log(text.value);
    if(text.value=="top"){
        div.style.borderTop ="2px solid Red" ;
    }
    if(text.value=="bottom"){
        div.style.borderBottom ="2px solid Red" ;
    }
    if(text.value=="left"){
        div.style.borderLeft ="2px solid Red" ;
    }
    if(text.value=="right"){
        div.style.borderRight ="2px solid Red" ;
    }

}
texto=(text)=>{
    let div= document.getElementById("mensaje");
    console.log(text.value);
    div.style.fontSize =text.value+"px" ;
}

backgroundChange=(color)=>{
    var c = document.getElementById('fondo');
    c.style.backgroundColor = color.value;
}
  

login=()=>{
    let texto = prompt("Ingrese tu nommbre de usuario");
    if(texto != ""){
        document.getElementById('login').value=texto ;
    }else
        document.getElementById('login').value="ingrese login" ;
}
inscribirse=()=>{
    let nombre = prompt("Ingrese nombre ");
    let edad =parseInt( prompt("Ingrese edad "));

    if(nombre != null && edad > 18){
        alert("bienvenido "+nombre+" cumples con los requisitos de ingreso");
    }else
        alert(nombre+" No cumples con los requisitos de ingreso !!")
}