// PRODUCTOS
const productos = [
    // Abrigos
    {
        id: "xbox-serie",
        titulo: "xbox serie ",
        imagen: "./img/Electronica/01.jpg",
        categoria: {
            nombre: "xbox serie",
            id: "xbox-serie"
        },
        precio: 7000
    },
    {
        id: "playstation-5",
        titulo: "playstation 5",
        imagen: "./img/Electronica/02.jpg",
        categoria: {
            nombre: "playstation 5",
            id: "playstation-5"
        },
        precio: 8000
    },
    {
        id: "lenovo-legion-5",
        titulo: "lenovo legion 5",
        imagen: "./img/Electronica/03.jpg",
        categoria: {
            nombre: "lenovo legion 5",
            id: "lenovo-legion-5"
        },
        precio: 5000
    },
    {
        id: "apple-watch",
        titulo: "apple watch",
        imagen: "./img/Electronica/04.jpg",
        categoria: {
            nombre: "apple watch",
            id: "apple-watch"
        },
        precio: 6000
    },
    {
        id: "Apple-TV",
        titulo: "Apple TV",
        imagen: "./img/Electronica/05.jpg",
        categoria: {
            nombre: "Apple TV",
            id: "Apple-TV"
        },
        precio: 3000
    },
    
    {
        id: "camiseta",
        titulo: "Camiseta",
        imagen: "./img/Ropa/01.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta",
        titulo: "Camiseta",
        imagen: "./img/Ropa/02.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camiseta"
        },
        precio: 1000
    },
    {
        id: "camiseta",
        titulo: "Camiseta",
        imagen: "./img/Ropa/03.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camiseta"
        },
        precio: 1000
    },
    {
        id: "camiseta",
        titulo: "Camiseta",
        imagen: "./img/Ropa/04.jpg",
        categoria: {
            nombre: "Camiseta",
            id: "camiseta"
        },
        precio: 1000
    },
    {
        id: "camiseta",
        titulo: "Camiseta",
        imagen: "./img/Ropa/05.jpg",
        categoria: {
            nombre: "Camiseta",
            id: "camiseta"
        },
        precio: 1000
    },
    {
        id: "camiseta",
        titulo: "Camiseta",
        imagen: "./img/Ropa/06.jpg",
        categoria: {
            nombre: "Camiseta",
            id: "camiseta"
        },
        precio: 1000
    },
    {
        id: "camiseta",
        titulo: "Camiseta",
        imagen: "./img/Ropa/07.jpg",
        categoria: {
            nombre: "Camiseta",
            id: "camiseta"
        },
        precio: 1000
    },
    {
        id: "camiseta",
        titulo: "Camiseta ",
        imagen: "./img/Ropa/08.jpg",
        categoria: {
            nombre: "Camiseta",
            id: "camiseta"
        },
        precio: 1000
    },
    
    {
        id: "sofa",
        titulo: "sofa",
        imagen: "./img/muebles/01.jpg",
        categoria: {
            nombre: "sofa",
            id: "sofa"
        },
        precio: 3000
    },
    {
        id: "armario",
        titulo: "armario",
        imagen: "./img/muebles/02.jpg",
        categoria: {
            nombre: "armario",
            id: "armario"
        },
        precio: 5000
    },
    {
        id: "Persiana",
        titulo: "Persiana",
        imagen: "./img/muebles/03.jpg",
        categoria: {
            nombre: "Persiana",
            id: "Persiana"
        },
        precio: 2000
    },
    {
        id: "silla-gamer",
        titulo: "silla gamer",
        imagen: "./img/muebles/04.jpg",
        categoria: {
            nombre: "silla gamer",
            id: "silla-gamer"
        },
        precio: 4000
    },
    {
        id: "Mesa ",
        titulo: "Mesa",
        imagen: "./img/muebles/05.jpg",
        categoria: {
            nombre: "Mesa",
            id: "Mesa"
        },
        precio: 3000
    }
];


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}