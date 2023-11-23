//eliminar productos 
// manejar cantidad 
// agregar un contador de productos en el navbar


const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");


let carrito=[];


productos.forEach((product)=>{
    let content = document.createElement('div');
    let formattedPrecio = product.precio.toLocaleString();
    content.className = "card";
    content.innerHTML = `
        <h3>${product.nombre}</h3>
        <img src="${product.img}">
        <p>${product.descripcion}</p>
        <p class="price">COP ${formattedPrecio}</p>
        <p>Unidades Disponibles:${product.disponibles}</p> 
    `;
    

    shopContent.append(content);

    let comprar = document.createElement("button")
    comprar.innerText ="comprar";
    comprar.className ="comprar";

    content.append(comprar);

    comprar.addEventListener("click", ()=>{
    
    const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
    
    if (repeat) {
        carrito.map((prod) => {
            if(prod.id === product.id){
                
                    prod.cantidad++;
                
            }
        });
    }else{
        carrito.push({
            id : product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
            cantidad: product.cantidad,
        });
    }
        console.log(carrito);
        carritoCounter();
    });
});


/*opciones que podria funcionar, crear una funcion que cuando se elimine un producto se reinicien las unidades   */