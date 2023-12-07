
function crearNuevoProducto(nombre, precio, descripcion, imagen, cantidad, categoria) {
    return {
        id: productos.length + 1,
        nombre,
        precio,
        descripcion,
        img: imagen,
        cantidad,
        disponibles: cantidad,
        categoria,
    };
}


function agregarNuevoProducto() {
    //campos del formulario
    const nombre = document.getElementById('nombre').value;
    const precio = parseFloat(document.getElementById('precio').value);
    const descripcion = document.getElementById('descripcion').value;
    const imagen = document.getElementById('imagen').value;
    const cantidad = parseInt(document.getElementById('cantidad').value);
    const categoria = document.getElementById('categoria').value;

    // Validación de campos
if (!nombre || isNaN(precio) || !descripcion || !imagen || isNaN(cantidad) || !categoria) {
    alert("Completa todos los campos del formulario con valores válidos.");
    return;
}

    // Validación de cantidad no negativa
    if (cantidad < 0) {
        alert("La cantidad disponible no puede ser negativa.");
        return;
    }

    // Validación de límite de palabras en descripción
    const palabrasDescripcion = descripcion.split(/\s+/).length;
    if (palabrasDescripcion > 70) {
        alert("La descripción no puede exceder las 70 palabras.");
        return;
    }

    // Crea el nuevo producto
    const carrito = crearNuevoProducto(nombre, precio, descripcion, imagen, cantidad, categoria);



    // Agrega el nuevo producto al array y realiza las acciones adicionales necesarias
    productos.push(carrito);
    // Guarda la lista actualizada en el localStorage
    carritoCounter();
        saveLocal();
        
        alert("Producto agregado exitosamente: " + nombre);
    renderizarProductos(productos);
    document.getElementById('agregarProductoForm').reset();
}

// Llena dinámicamente las opciones del campo de categoría en el formulario
const categoriaDropdown = document.getElementById('categoria');
const categoriasUnicas = [...new Set(productos.map(producto => producto.categoria))];
categoriasUnicas.forEach(categoria => {
    const option = document.createElement('option');
    option.value = categoria;
    option.text = categoria;
    categoriaDropdown.add(option);
});

renderizarProductos(productos);

// encontre un error que no pude solucionar, si el navegador se reinicia desaparecen los productos agregados, aunque si se guardan
// en el localStorage despues desaparecen cuando se reinicia el navegador, otro error es que el producto permanece en el carrito
//aunque ya no este en el localStorage 