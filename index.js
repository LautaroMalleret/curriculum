function mostrar( nombre){
    div = document.getElementById(nombre);
    if (div.style.display === 'none'){
        div.style.display="block";
    }
    else{
        div.style.display="none";
    }
    }