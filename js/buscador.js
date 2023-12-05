
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

// Función para manejar la búsqueda en tiempo real
const handleRealTimeSearch = () => {
    const searchTerm = searchInput.value.trim().toLowerCase();

    // Filtra los productos en tiempo real
    const searchResults = productos.filter((product) =>
        product.nombre.toLowerCase().includes(searchTerm)
    );

    // Limpia el contenido actual del contenedor de la tienda
    shopContent.innerHTML = "";

    // Renderiza los resultados de búsqueda en tiempo real
    renderizarProductos(searchResults);
};


// Función para renderizar productos en el shopContent
const renderizarProductos = (productosArray) => {
    // Limpia el contenido actual del contenedor de la tienda
    shopContent.innerHTML = "";

    productosArray.forEach((product) => {
        let content = document.createElement('div');  
        let formattedPrecio = product.precio.toLocaleString();
        content.className = "card";
        content.innerHTML = `
            <h3 class="padding-h3">${product.nombre}</h3>
            <img src="${product.img}">
            <p class="padding-p">${product.descripcion}</p>
            <p class="price">COP ${formattedPrecio}</p>
            <p>Unidades Disponibles: ${product.disponibles}</p> 
        `;

        let comprar = document.createElement("button");
        comprar.innerText = "comprar";
        comprar.className = "comprar";

        comprar.addEventListener("click", () => {
            // Verificar si el producto ya está en el carrito
            const repeat = carrito.find((repeatProduct) => repeatProduct.id === product.id);

            if (repeat) {
                // Si el producto está en el carrito, incrementar cantidad
                if (repeat.cantidad < product.disponibles) {
                    repeat.cantidad++;
                    repeat.disponibles = repeat.disponibles - 1;
                } else {
                    alert("Producto agotado!!!");
                }
            } else {
                // Si el producto no está en el carrito, agregarlo
                carrito.push({
                    id: product.id,
                    img: product.img,
                    nombre: product.nombre,
                    disponibles: product.disponibles - 1,
                    precio: product.precio,
                    cantidad: 1, // Inicializar cantidad a 1
                });
            }

            // Actualizar el contador y guardar en localStorage
            carritoCounter();
            saveLocal();
        });

        content.append(comprar);
        shopContent.appendChild(content);
    });
};

// Llamada a la función para renderizar productos al cargar la página
renderizarProductos(productos);


// Evento de entrada en el campo de búsqueda para búsqueda en tiempo real
searchInput.addEventListener("input", handleRealTimeSearch);

// Evento de clic en el botón de búsqueda (opcional)
searchButton.addEventListener("click", handleRealTimeSearch);
