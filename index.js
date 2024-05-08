const btnCarrito = document.querySelector('.icono-carrito');
const Carrito = document.querySelector('.productos-carrito');

btnCarrito.addEventListener('click', () => {
    Carrito.classList.toggle('carrito-oculto')
});

const InfoCarrito = document.querySelector('.producto-carrito');
const FilaProducto = document.querySelector('.fila-producto');

const ListaProductos = document.querySelector('.productos');

let todosProductos = [];
const valorTotal = document.querySelector('.total-pagar');
const contarProductos = document.querySelector('#contador-prod')


ListaProductos.addEventListener('click', e => {
    if(e.target.classList.contains('agregar-carrito')) {
        const Producto = e.target.parentElement;
        const InfoProducto = {
            Cantidad: 1,
            Titulo: Producto.querySelector('h5').textContent,
            Precio: Producto.querySelector('p').textContent
        };
        const Existe = todosProductos.some(Producto => Producto.Titulo === InfoProducto.Titulo);
        if (Existe){
            const productos = todosProductos.map(Producto => {
                if (Producto.Titulo === InfoProducto.Titulo){
                    Producto.Cantidad++;
                    return Producto
                }
                else{
                    return Producto
                }
            });
            todosProductos = [...productos];
        }else{
            todosProductos = [...todosProductos, InfoProducto];
        }

        showHTML();
    };
});

FilaProducto.addEventListener('click', e => {
    if(e.target.classList.contains('icon-close')){
        const Producto = e.target.parentElement;
        const titulo  = Producto.querySelector('p').textContent;

        todosProductos = todosProductos.filter(
            Producto => Producto.Tituloitulo !== titulo
        );
        showHTML();
    }
});

const showHTML = () => {


    FilaProducto.innerHTML = '';

    let total = 0;
    let totalProductos = 0;

    todosProductos.forEach(Producto => {
        const contenedorProducto = document.createElement('div');
        contenedorProducto.classList.add('producto-carrito');
        contenedorProducto.innerHTML = `
        <div class="info-producto-carrito">
            <span class="cantidad-producto-carrito">${Producto.Cantidad}</span>
            <p class="titulo-producto-carrito">${Producto.Titulo}</p>
            <span class="precio-producto-carrito">${Producto.Precio}</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="icon-close" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
        </svg> 
        `;
        FilaProducto.append(contenedorProducto);
        total = total + parseInt(Producto.Cantidad * Producto.Precio.slice(1));
        totalProductos = totalProductos + Producto.Cantidad;
    });
    valorTotal.innerText = `$${total}`;
    contarProductos.innerText = totalProductos;
};