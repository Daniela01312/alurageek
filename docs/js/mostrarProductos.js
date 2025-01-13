import { conexionAPI } from "./script.js";

const productos = document.querySelector("[data-productos]");

function crearProducto(nombre, precio, imagen, id) {
    const producto = document.createElement("div");
    producto.className = "producto__informacion";
    producto.dataset.id = id; 
    producto.innerHTML = `
        <img class="producto__imagen" src="${imagen}" alt="Imagen del producto">
        <p>${nombre}</p>
        <div class="producto__precio-icono">
            <h3>$${precio}</h3>
            <div class="icono" data-icono-eliminar>
                <img src="./imagenes/icon.png" alt="Icono de basura">
            </div>
        </div>`;
   
    const iconoEliminar = producto.querySelector("[data-icono-eliminar]");
    iconoEliminar.addEventListener("click", async () => {
        try {
            await conexionAPI.eliminarProducto(id);
            producto.remove(); 
        } catch (error) {
            console.error("Error al eliminar el producto:", error);
        }
    });
    return producto;
}

async function listarProductos() {
    const listaAPI = await conexionAPI.listarProductos();
    listaAPI.forEach(producto =>
        productos.appendChild(crearProducto(producto.nombre, producto.precio, producto.imagen, producto.id))
    );
}

listarProductos();
