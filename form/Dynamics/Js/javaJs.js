let mainForm = document.getElementById("mainForm");
let inputName = document.getElementById("name");
let inputAge = document.getElementById("age");
let inputCp = document.getElementById("cp");
let inputCom = document.getElementById("com");
let inputFile = document.getElementById("img");

let msj = document.createElement('p');
msj.style.color = 'red';

mainForm.addEventListener("submit" , e =>{
    e.preventDefault();
    if(inputName.value ==" " || !isNaN(inputName.value)){
        inputName.value='';
        inputName.style.borderColor = "red";
        inputName.placeholder = "NOMBRE INVALIDO";
    }else{
        inputName.style.borderColor = "rgb(175, 175, 175)";
        inputName.placeholder = "Introduce tu Nombre";
    } 
///////////////////////////////////////////////////////////////////////
    if(isNaN(inputAge.value) || inputAge.value > 100){
        inputAge.value='';
        inputAge.style.borderColor ="red";
        inputAge.placeholder = "EDAD INVALIDA"
    }else{
        inputAge.style.borderColor = "rgb(175, 175, 175)";
        inputAge.placeholder = "Ingresa tu Edad";
    }
///////////////////////////////////////////////////////////////////////
    if(isNaN(inputCp.value) || inputCp.value.length != 5){
        inputCp.value = '';
        inputCp.style.borderColor = "red";
        inputCp.placeholder ="CODIGO POSTAL INVALIDO";
    }else{
        inputCp.style.borderColor = "rgb(175, 175, 175)";
        inputCp.placeholder ="Ingrese tu codigo postal: xxxxx";
    }
//////////////////////////////////////////////////////////////////////////
    let generos = ["ms","fem","otro"];
    let inputG = document.querySelector("input[name='Genero']:checked");

    if(generos.indexOf(inputG.value)==-1){
        inputG.style.borderColor = "red";
    }
    else{
        inputG.style.borderColor = "rgb(175, 175, 175)";
    }
//////////////////////////////////////////////////////////////////////
    let interes = ["tec","dep","music","art"];
    let inputI = document.querySelectorAll("input[name='interes']:checked");

    for(i=0;i < inputI.length;i++){
        if(interes.indexOf(inputI[i].value)==-1){
            inputI[i].style.borderColor = "red";
        }
        else{
            inputI[i].style.borderColor = "rgb(175, 175, 175)";
        }
    }
///////////////////////////////////////////////////////////////////////
    let paises = ["mex","usa","cad","germ","france"];
    let inputP = document.getElementById("pais");

    if(paises.indexOf(inputP.value)==-1){
        inputP.style.borderColor = "red";
    }else{
        inputP.style.borderColor = "rgb(175, 175, 175)";
    }
///////////////////////////////////////////////////////////////////////
    if(!isNaN(inputCom.value)){
        inputCom.value='';
        inputCom.style.borderColor = "red";
        inputCom.placeholder = "COMENTARIO INVALIDO";
    }else{  
        inputCom.style.borderColor = "rgb(175, 175, 175)";
        inputCom.placeholder = "Escribe tus comentarios aqui...";
    }
/////////////////////////////////////////////////////////////////////// Prueba creo que es INCESECARIO
/*  let c = 3;
    let verify = new Array(3);
    for(i=0;i < 3;i++){
       verify[i]= inputFile.value[inputFile.value.length-(c--)]; 
    }
    verify = verify.join('');
    

    if(verify != 'png' || verify != 'jpg'){
        console.log("no es png");
    }else{
        console.log("si es png");
    }
*/  
    let a,b;
    let result;
    a = Math.random()
    
    while(true){
        if(result.value != a+b){
            
        }
    }
});