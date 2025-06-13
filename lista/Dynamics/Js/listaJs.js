let contenedorT = document.querySelector(".contenedorT")

addBtn = document.getElementById("add");
rmBtn   = document.getElementById("rm");

addBtn.addEventListener("click", ()=>{
    let tarea = document.createElement("div");
    tarea.textContent = "TAREA";
    tarea.className = "tarea";
    contenedorT.appendChild(tarea);
});

rmBtn.addEventListener("click", ()=>{
    let tareas = document.getElementsByClassName("tarea");
    if(tareas.length > 0)
        contenedorT.removeChild(tareas[tareas.length -1]);
});
