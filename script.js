

/* video */ 
let video=document.querySelector('video');
let playBoton = document.getElementById("play");
let pauseBoton= document.getElementById("pause");




setTimeout(()=>{document.getElementById('showTime').innerHTML=` Duracion video : ${video.duration.toFixed(2)}`},1000);

for (let i = 0; i < video.tim; i++) {
    console.log(video.currentTime)
    
}

playBoton.addEventListener('click',()=>{
    video.play()
    alert(FUNCIONA)


   
});

pauseBoton.addEventListener('click',()=>{
    video.pause();
    flag=false;
});

function desplegar() {
    let submenu = document.querySelector(".tema");
    submenu.classList.toggle("tema-block")
}


/*

//JS DE FOOTER PRUEBA- INDEX //

//con let decimos que la variable "parrafo" sea el elemento con el ID "parrafoFooter" del HTML
let parrafo = document.getElementById("parrafoFooter")

//ahora decimos que la propiedad "innerText" del elemento "parrafo" sea igual a "aasdasd" o lo que fuere, variables y/o texto
parrafo.innerText = "Hacer click para agregar "


//fiuncion para agregar un texto al hacer click en el parrafo
function agregarLetras(){
    parrafo.innerText = parrafo.innerHTML + "una esto +, "
}

Estoy jugando con JS, mas que nada quiero hacer que el footer, la descripcion de abajo valla apareciendo,a medida que el mouse pasa por la pantalla.
y el mismo funcione en el resto.
*/




