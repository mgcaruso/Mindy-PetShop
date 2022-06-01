var enCarrito = [];
var templateVerCarrito = `<!-- Full screen modal -->
<div class="modal-dialog modal-fullscreen-sm-down">
    <p>esto es el contenido de la ventana</p>
</div>`

function addToCart(id){
    // var carritoStorage = JSON.parse(localStorage.getItem("carrito"));
    if(JSON.parse(localStorage.getItem("carrito"))){
        enCarrito = JSON.parse(localStorage.getItem("carrito"));
        
    }
    if(enCarrito.indexOf(id) !== -1){
        //sacar del carrito
        enCarrito.splice(enCarrito.indexOf(id),1);
        document.getElementById(`cart-btn-${id}`).innerHTML = `Comprar <i class="bi bi-cart-plus"></i>`
        document.getElementById(`cart-btn-${id}`).style.backgroundColor = `#0D6EFD`
    }else{
        //meter en carrito
        enCarrito.push(id);
        document.getElementById(`cart-btn-${id}`).innerHTML = `Añadido <i class="bi bi-cart-check-fill"></i>`
        document.getElementById(`cart-btn-${id}`).style.backgroundColor = `#198754`
        document.getElementById(`cart-btn-${id}`).style.border = `1px solid #198754`
    }

    var stringified = JSON.stringify(enCarrito);
    localStorage.setItem("carrito", stringified);

    if(JSON.parse(localStorage.getItem("carrito"))){
        cantidadProductos.innerHTML = `<i class="fs-4 bi bi-cart-fill"></i><sup class="fs-6">${enCarrito.length}</sup>`
    }else{
        cantidadProductos.innerHTML = `<i class="fs-4 bi bi-cart"></i>`
    }
}

