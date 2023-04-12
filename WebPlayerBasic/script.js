let file = document.getElementById("fileSelect");

file.addEventListener("change", seleccion, false); //AddEventListener nos permite realizar funciones en base a un cambio en los objetos que no tienen una propiedad on click, o que bien queremos que se realicen una vez haya sucedido algo en ese objeto

function seleccion(){
    let player = document.getElementById("musica");

    for(let i = 0; i < file.files.length; i++){
        let ruta = URL.createObjectURL(file.files[i]);
        player.src = ruta;
        console.log(file.files[i].name);
        console.log(ruta);
    }
}