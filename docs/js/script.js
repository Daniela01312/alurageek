async function listarProductos(){
 const conexion = await fetch("http://localhost:3000/productos");
 const conexionConvertida = await conexion.json();
 return conexionConvertida;
 
}
async function enviarProducto(nombre,precio,imagen){
    const conexion =  await fetch("http://localhost:3000/productos",{
        method: "POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            nombre:nombre,
            precio:precio,
            imagen:imagen
        })
    });
    const conexionConvertida = conexion.json();

    return conexionConvertida;
}

async function eliminarProducto(id) {
    const conexion = await fetch(`http://localhost:3000/productos/${id}`, {
        method: "DELETE",
    });
    if (!conexion.ok) {
        throw new Error(`Error al eliminar el producto con ID: ${id}`);
    }
    return conexion;
}

export const conexionAPI = {
    listarProductos,
    enviarProducto,
    eliminarProducto
};
