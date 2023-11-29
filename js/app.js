//eliminar productos 
// manejar cantidad 
// agregar un contador de productos en el navbar


const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");


let carrito= JSON.parse(localStorage.getItem("carrito")) || [];


productos.forEach((product)=>{
    let content = document.createElement('div');
    let formattedPrecio = product.precio.toLocaleString();
    content.className = "card";
    content.innerHTML = `
        <h3 class="padding-h3">${product.nombre}</h3>
        <img src="${product.img}">
        <p class="padding-p">${product.descripcion}</p>
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
                if (prod.cantidad < product.disponibles) {
                    
                    prod.cantidad++;
                    
                    prod.disponibles= prod.disponibles - 1;
                }else{
                    alert("Producto agotado!!!")
                }
                    
                
            }
        });
    }else{
        carrito.push({
            id : product.id,
            img: product.img,
            nombre: product.nombre,
            disponibles:product.disponibles -1,  //se agrego disponibles
            precio: product.precio,
            cantidad: product.cantidad,
        });
    }    //esta parte va dentro del else 
        console.log(carrito);
        carritoCounter();
        saveLocal();
    });
});


/*set item */
const saveLocal = ()=> {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};


/*get item*/ 

