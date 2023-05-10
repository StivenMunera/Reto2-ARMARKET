const datosproductos = [{
        nombre: "Ametralladora",
        descripcion: "Diseñadas para disparar una gran cantidad de munición de manera ininterrumpida en un breve espacio de tiempo gracias a su mecanismo automático, las ametralladoras son sin duda unas de las armas con mayor potencial destructivo de los últimos tiempos.",
        precio: "$ 200.000.000",
        cantidad: 3,
        foto: "https://images.unsplash.com/photo-1591123253780-af288771206f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80",
    },
    {
        nombre: "Escopeta",
        descripcion: "Las escopetas son armas de fuego diseñadas para ser capaces de descargar varios proyectiles o perdigones, contenidos dentro del cartucho, en cada disparo. Gracias al gran número de perdigones que proyecta en cada disparo, ofrecen una gran facilidad a la hora de acertar en el blanco y, en disparos en distancias cortas, son tremendemente potentes.",
        precio: "$ 30.000.000",
        cantidad: 10,
        foto: "https://images.unsplash.com/photo-1639064565839-af6a5c93b116?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    },
    {
        nombre: "Rifle francotirador",
        descripcion: "El rifle francotirador es un arma de fuego diseñada para permitir un gran nivel de precisión en disparos a largas distancias gracias a la ayuda de un visor y una munición específica. Su uso se extiende sobre todo al ámbito policial y militar.",
        precio: "$ 300.000.000",
        cantidad: 2,
        foto: "https://images.unsplash.com/photo-1482649671545-bc53dcf1ad7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
        nombre: "Fusiles de asalto",
        descripcion: "El fusil de asalto es un arma diseñada para disparar tanto en modo automático como en modo semiautomático sobre todo en situaciones de combate. En los últimos tiempos se han convertido en el arma estándar de la división de infantería en la mayoría de ejércitos y entre toda la gama destacan los populares M16 y AK47",
        precio: "$ 60.000.000",
        cantidad: 15,
        foto: "https://images.unsplash.com/photo-1642608196165-6682bb0366ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    },
    {
        nombre: "Pistolas",
        descripcion: "Gracias a su tamaño, peso y capacidad de tiro se convierte en un arma ideal para la defensa personal y el tiro deportivo. Viene equipada con riel picatinny inferior para que puedas agregarle accesorios como linterna y láser, también posee seguro manual externo, el que puede ser activado o desactivado voluntariamente por el tirador.",
        precio: "$ 20.000.000",
        cantidad: 1,
        foto: "https://images.unsplash.com/photo-1581955957646-b5a446b6100a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    },
];
// const f1 = "";
// const p1 = document.getElementById("app").innerHTML = `esto es un texto y una operacion ${3 + 5}`;
function plantilla(datosproductos) {
    return `<div class="ficha-producto">
    <img class="foto" src=${datosproductos.foto}><div><h2 class="nombre">${datosproductos.nombre}</h2><p class="precio">Precio: ${datosproductos.precio}</p>
    <p class="cantidad">Cantidad: ${datosproductos.cantidad}</p><p class="descripcion">${datosproductos.descripcion}</p>
    <button class="btn">Comprar</button>
    </div></div>`;
    
}
const p1 = (document.getElementById(
    "app"
).innerHTML = `<h1>ARMARKET</h1>
 ${datosproductos.map(plantilla).join("")} 

<br>

 <h2 class= "sombreado">¡¡ANTES DE COMPRAR ASEGURESE DE CUMPLIR CON TODOS LOS REQUISITOS Y REQUERIMIENTOS ESTABLECIDOS EN LA LEY N°17.798 DE CONTROL DE ARMAS!! .</h2><h3>Verifique las actualizaciones periodicamente!!!</h3><br>`);