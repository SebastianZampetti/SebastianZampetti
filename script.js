

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



