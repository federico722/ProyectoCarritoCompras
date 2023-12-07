const ordenarAscendenteButton = document.getElementById("ordenarAscendente");
const ordenarDescendenteButton =document.getElementById("ordenarDescendente");

ordenarAscendenteButton.addEventListener("click", () => {
    ordenarProductosPorPrecio(true); // true para ascendente
    });

ordenarDescendenteButton.addEventListener("click", () => {
    ordenarProductosPorPrecio(false); // false para descendente
    });


function ordenarProductosPorPrecio(ascendente) {
    productos.sort((a, b) => {
        const precioA = a.precio;
        const precioB = b.precio;
        if (ascendente) {
            return precioA - precioB;
        } else {
            return precioB - precioA;
        }
        });
        // Vuelve a renderizar los productos en la interfaz después de ordenar
        renderizarProductos(productos);
    }
