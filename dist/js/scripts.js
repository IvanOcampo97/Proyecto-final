const carrito = document.querySelector(`#carrito`);
const listas = document.querySelector(`#listas`);
const listaCarrito = document.querySelector(`#lista-carrito`);
const vaciarCarrito = document.querySelector(`#vaciar-carrito`);

let articulosCarrito = [];


cargarEventListener();

function cargarEventListener(){
    // cuando agregas algo de la lista presionando "agregarListado"
    listas.addEventListener(`click`, agregarListado)

    // elimina productos del carrito
    carrito.addEventListener(`click`, eliminarProducto);

    vaciarCarrito.addEventListener(`click`, () => {

        // reseteamos el arreglo
        articulosCarrito = [];

        // limpiamos HTML
        limpiarHTML();
    });
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

// elimina un producto del carrito

function eliminarProducto(e){
    if(e.target.classList.contains(`borrar-curso`)){
        const productoId = e.target.getAttribute(`data-id`);

        // elimina del arreglo de aritculosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(prducto => producto.id !== productoId);

        carritoHTML(); 

    }


    
}


// Lee el contenido del HTML al que le dimos click y extrae la informacion del producto
function leerDatosProducto(producto) {
    const infoProducto = {
        imagen: producto.querySelector(`img`).src,
        titulo: producto.querySelector(`h5`).textContent,
        // a continuacion llamamos a span pero antes poniendo .precio que ya esta marcado en un class dentro del p que es padre de span en HTML
        precio: producto.querySelector(`.precio`).textContent,
        // a continuacion, como tenemos 8 id diferentes, le ponemos un data-id a cada cuadro con productos para diferenciarlos unos de otros, para asi poder definirlos como unicos
        id: producto.querySelector(`a`).getAttribute(`data-id`),
        // con cantidad:1 lo que hacemos es elejir la cantidad de veces que un elemento puede ser seleccionado dentro del carrito
        cantidad:1
    }

    // revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some( producto => producto.id === infoProducto.id );
    if(existe){
        // actualizamos la cantidad
        const productos = articulosCarrito.map(producto =>{
            if(producto.id === infoProducto.id){
                producto.cantidad++;return producto; 
            // retorna el objeto acctualizado
            } else {
                return producto;
                // retorna los ojbetos que no son duplicados
            }
        });
        articulosCarrito = [...producto];
    }
    else{
        // agregamos curso al carrito
    }
    // Agrega elementos al arreglo de carrito

    articulosCarrito = [...articulosCarrito, infoProducto];
    carritoHTML();

}

// Muestra el carrito de compras en HTML

function carritoHTML(){
    // limpiar el HTML
    limpiarHTML();

    articulosCarrito.forEach( producto=>{

        console.log(producto);

        const {imagen, titulo, precio, cantidad, id} = producto;
        const row = document.createElement(`tr`);
        row.innerHTML = `

        <td><img src="${imagen}" width="100"></td>

        <td>${titulo}</td>

        <td>${precio}</td>

        <td>${cantidad}</td>

        <a href="#" class="borrar-curso" data-id="${id}"> X </a>`;

        // Agrega el html del carrito en el tbody
        listaCarrito.appendChild(row);

    })
}
// elemina los cursos del tbody 
function limpiarHTML(){
    listaCarrito.innerHTML = ``;

    // while (listaCarrito.firstChild){
    //     listaCarrito.removeChild(listaCarrito.firstChild)
    // }
}
