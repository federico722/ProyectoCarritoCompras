const pintarCarrito = ()=> {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className= 'modal-header'
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito.</h1>
    `;
    modalContainer.append(modalHeader);

    const modalButton = document.createElement("h1");
    modalButton.innerText = "x";
    modalButton.className = "modal-header-button";

    modalButton.addEventListener("click", () =>{
        modalContainer.style.display ="none";
    })

    modalHeader.append(modalButton);

    carrito.forEach((product)=>{
        let carritoContent = document.createElement("div");
        carritoContent.className ="modal-content";
        let formattedPrecio = product.precio.toLocaleString();
        let total= product.cantidad *product.precio;
        let formattedTotal=total.toLocaleString();
        carritoContent.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>COP ${formattedPrecio} </p>
        <p>Cantidad: ${product.cantidad}</p>
        <p>Total: ${formattedTotal}</p>
        `; 

        modalContainer.append(carritoContent);

        let eliminar = document.createElement("span");
        eliminar.innerText = "✖️";
        eliminar.className = "delete-product";
        carritoContent.append(eliminar);

        eliminar.addEventListener("click", eliminarProducto);
    });

    const total= carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
    let formattedPrecio = total.toLocaleString();

    const totalBuying = document.createElement("div");
    totalBuying.className = "total-content";
    totalBuying.innerHTML = `Total a Pagar: COP ${formattedPrecio},00`;
    modalContainer.append(totalBuying);
    };

    verCarrito.addEventListener("click", pintarCarrito);

    const eliminarProducto = () => {
        const foundId = carrito.find((Element) => Element.id);

        carrito = carrito.filter((carritoId) => {
            return carritoId !==foundId;

        });
        carritoCounter();
        pintarCarrito();
    };

    const carritoCounter = () => {
        cantidadCarrito.style.display= "block";
        cantidadCarrito.innerText = carrito.length;

    }