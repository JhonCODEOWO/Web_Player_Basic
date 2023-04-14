let file = document.getElementById("fileSelect");

file.addEventListener("change", seleccion, false); //AddEventListener nos permite realizar funciones en base a un cambio en los objetos que no tienen una propiedad on click, o que bien queremos que se realicen una vez haya sucedido algo en ese objeto

function seleccion(){
    let player = document.getElementById("musica");
    let nameMusic = document.getElementById("nombreMusic");


    for(let i = 0; i < file.files.length; i++){

        if (file.files[i].type != "audio/mpeg") {
            alert("Ha fallado el añadido de música, 1 o más archivos no eran ficheros de música");
            break;
        }else{
            let ruta = URL.createObjectURL(file.files[i]);
            player.src = ruta;
            nameMusic.textContent = file.files[i].name;
        }
    }
}