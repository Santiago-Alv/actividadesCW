/* En este archivo se encargarán de generar el código que hará dinámica la página */
function colorPar(){ 
    for(i=1; i <= 100; i++){
        if(i%2 == 0){
            pares = document.getElementById(i)
            isColored = pares.style.backgroundColor === "rgb(83, 159, 230)";
            pares.style.backgroundColor = isColored ? "white" : "rgb(83, 159, 230)";
        }
    }
}

function colorImpar(){ 
    for(i=1; i <= 100; i++){
        if(i%2 != 0){
            impares = document.getElementById(i)
            isColored = impares.style.backgroundColor === "rgb(197, 48, 48)";
            impares.style.backgroundColor = isColored ? "white" : "rgb(197, 48, 48)"
        }
    }
}

function esPrimo(indice){
    if(indice ==1) return true;
    let cont=1,cantidadD=0;
    while(cont <= indice){
        if(indice % cont == 0){
            cantidadD++;
        }
        cont++;
    }
    if(cantidadD == 2) return true; //SI SE PUEDE DIVIDIR POR MAS DE 2 VALORES NO ES PRIMO
    else return false;
}

function colorPrimo(){
    for(indice=1;indice<100;indice++){
        if(esPrimo(indice)){
            primo = document.getElementById(indice);
            isColored = primo.style.backgroundColor === "rgb(94, 202, 61)";
            primo.style.backgroundColor = isColored ? "white" : "rgb(94, 202, 61)";
        }
    }
}

