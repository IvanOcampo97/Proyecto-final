const carrito = document.querySelector(`#carrito`);
const listas = document.querySelector(`#listas`);
const listaCarrito = document.querySelector(`#lista-carrito`);
const vaciarCarrito = document.querySelector(`#vaciar-carrito`);


cargarEventListener();

function cargarEventListener(){
    // cuando agregas algo de la lista presionando "agregarListado"
    listas.addEventListener(`click`, agregarListado)
}

// Funciones
function agregarListado(e){
    // preventDefault sirve para que no te lleve el boton al principio de la pagina
    e.preventDefault();

    if (e.target.classList.contains(`agregar-carrito`)){

        // parentElement sirve para agarrar cierta cantidad de datos, selecciona el valor del padre 
        const productoSeleccionado = e.target.parentElement.parentElement.parentElement;

        leerDatosProducto(productoSeleccionado);
    
    }
}


// Lee el contenido del HTML al que le dimos click y extrae la informacion del producto
function leerDatosProducto(producto) {
    const infoProducto = {
        imagen: producto.querySelector(`img`).src,
        titulo: producto.querySelector(`h5`).textContent,
        // a continuacion llamamos a span pero antes poniendo .precio que ya esta marcado en un class dentro del p que es padre de span en HTML
        precio: producto.querySelector(`.precio span`).textContent,
        // a continuacion, como tenemos 8 id diferentes, le ponemos un data-id a cada cuadro con productos para diferenciarlos unos de otros, para asi poder definirlos como unicos
        id: producto.querySelector(`a`).getAttribute(`data-id`),
        // con cantidad:1 lo que hacemos es elejir la cantidad de veces que un elemento puede ser seleccionado dentro del carrito
        cantidad:1
    }
    console.log(infoProducto);

}


// Fetch

const url = `https://pokeapi.co/api/v2/pokemon/ditto`

fetch(url)
.then(response => response.json())
.then(data=>{


    let element = document.getElementById(`pokeApi`)
    element.innerHTML = `
    <p> ${data.name}<p>
    <p> ${data.order}<p>
    
    `;

    console.log(data)

})

.catch(err=>console.log(err))