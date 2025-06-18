let mainForm = document.getElementById("mainForm");
let inputName = document.getElementById("name");
let inputAge = document.getElementById("age");
let inputCp = document.getElementById("cp");



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
    if(isNaN(inputAge.value) || inputAge.value > 100){
        inputAge.value='';
        inputAge.style.borderColor ="red";
        inputAge.placeholder = "EDAD INVALIDA"
    }else{
        inputAge.style.borderColor = "rgb(175, 175, 175)";
        inputAge.placeholder = "Ingresa tu Edad";
    }
    if(isNaN(inputCp.value) || inputCp.value.length != 5){
        inputCp.value = '';
        inputCp.style.borderColor = "red";
        inputCp.placeholder ="CODIGO POSTAL INVALIDO";
    }else{
        inputCp.style.borderColor = "rgb(175, 175, 175)";
        inputCp.placeholder ="Ingrese tu codigo postal: xxxxx";
    }

    let generos = ["ms","fem","otro"];
    let inputG = document.querySelector("input[name='Genero']:checked");

    if(generos.indexOf(inputG.value)!=-1){

    }
    else{

    }

    
});