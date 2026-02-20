function cambiarTexto(){
    document.getElementById("parrafo").textContent = "Texto cambiado con JavaScript";
}

function cambiarColor(){
    let cajas = document.getElementsByClassName("caja");
    for(let i = 0; i < cajas.length; i++){
        cajas[i].style.backgroundColor = "lightblue";
    }
}

function ocultarParrafos(){
    let parrafos = document.getElementsByTagName("p");
    for(let i = 0; i < parrafos.length; i++){
        parrafos[i].style.display = "none";
    }
}

function modificarSpan(){
    let span = document.querySelector("#contenedor span");
    span.textContent = "Texto modificado con querySelector";
}

function resaltarLista(){
    let items = document.querySelectorAll(".item");
    items.forEach(function(item){
        item.classList.add("resaltado");
    });
}

function mostrarNombre(){
    let nombre = document.getElementById("nombre").value;
    document.getElementById("resultado").textContent = "Hola " + nombre;
}

let imagenActual = 1;

function cambiarImagen(){
    let imagen = document.getElementById("imagen");
    
    if(imagenActual === 1){
        imagen.src = "https://www.gtabase.com/images/jch-optimize/ng/images_gta-4_characters_full_niko-bellic.webp";
        imagenActual = 2;
    }else{
        imagen.src = "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg";
        imagenActual = 1;
    }
}

let numero = 0;

function aumentar(){
    numero++;
    document.getElementById("contador").textContent = numero;
}