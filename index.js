const btnCart = document.querySelector('.carrito')
const Carrito = document.querySelector('.productos-carrito')

btnCart.addEventListener('click', () => {
    Carrito.classList.toggle('carrito-oculto')
})