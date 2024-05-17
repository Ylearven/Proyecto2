//Carta de productos
const productos = [
  {
    name: 'SHEIN WYWH Top De Cuello Halter',
    price: 5.1,
    stars: 5,
    color: 'Blanco',
    seller: 'SHEIN WYWH',
    image: './assets/ropa_1.jpg'
  },
  {
    name: 'SHEIN MOD dibujos',
    price: 4,
    stars: 4,
    color: 'Negro',
    seller: 'SHEIN MOD',
    image: './assets/ropa_2.jpg'
  },
  {
    name: 'SHEIN Essnce Camiseta unicolor',
    price: 6.1,
    stars: 5,
    color: 'Marrón',
    seller: 'SHEIN Essnce',
    image: './assets/Ropa_3.jpg'
  },
  {
    name: 'SHEIN Frenchy Camiseta Casual',
    price: 5.95,
    stars: 5,
    color: 'Negro',
    seller: 'SHEIN Fenchy',
    image: './assets/Ropa_4.jpg'
  },
  {
    name: 'SHEIN MOD',
    price: 7.84,
    stars: 3,
    color: 'Blanco',
    seller: 'SHEIN MOD',
    image: './assets/Ropa_5.jpg'
  },
  {
    name: 'SHEIN WYWH Top coches',
    price: 3.4,
    stars: 5,
    color: 'Rojo',
    seller: 'SHEIN WYWH',
    image: './assets/ropa_6.jpg'
  },
  {
    name: 'SHEIN LUNE Camiseta flores',
    price: 9,
    stars: 4,
    color: 'Rosa',
    seller: 'SHEIN LUNE',
    image: './assets/ropa_7.jpg'
  },
  {
    name: 'SHEIN LUNE Camiseta De Manga Corta',
    price: 3.95,
    stars: 2,
    color: 'Rosa',
    seller: 'SHEIN LUNE',
    image: './assets/ropa_8.jpg'
  },
  {
    name: 'SHEIN Essnce Equipo',
    price: 8.1,
    stars: 5,
    color: 'Rojo',
    seller: 'SHEIN Essnce',
    image: './assets/ropa_9.jpg'
  },
  {
    name: 'SHEIN Essnce 1999',
    price: 7,
    stars: 1,
    color: 'Marrón',
    seller: 'SHEIN Essnce',
    image: './assets/ropa_10.jpg'
  }
]

const vendedores = []
let vendedor = ''
const colores = []
let color = ''
const precios = []
let precio = 0
//-----FILTROS---------
const filtrar = () => {
  const filtrado = []
  for (const producto of productos) {
    if (
      (vendedor === '' || vendedor === producto.seller) &&
      (color === '' || color === producto.color) &&
      (precio === 0 || precio >= producto.price)
    ) {
      filtrado.push(producto)
    }
  }
  if (filtrado.length === 0) {
    const divFiltros = document.querySelector('#filtros')
    const mensaje = document.createElement('p')
    mensaje.textContent =
      'No se ha encontrado el producto aquí tiene sugerencias'
    divFiltros.appendChild(mensaje)
    const RopaAletaria = Math.floor(Math.random() * productos.length)
    filtrado.push(productos[RopaAletaria])
  }

  printRopa(filtrado)
}

const fillVendedor = (producto) => {
  vendedores.splice(0)
  for (const prod of producto) {
    if (!vendedores.includes(prod.seller)) {
      vendedores.push(prod.seller)
    }
  }
}
fillVendedor(productos)
const fillColor = (producto) => {
  colores.splice(0)
  for (const prod of producto) {
    if (!colores.includes(prod.color)) {
      colores.push(prod.color)
    }
  }
}
fillColor(productos)
const fillPrecio = (producto) => {
  // precios.splice(0)
  for (const prod of producto) {
    if (!precios.includes(prod.color)) {
      precios.push(prod.color)
    }
  }
}
fillPrecio(productos)

//-----Selectores---------

/* const SelectSeller = () => {
  const divFiltros = document.querySelector('#filtros')
  const selecionadorV = document.createElement('select')
  selecionadorV.className = 'sellerContainer'
  const placeholderOption = document.createElement('option')
  placeholderOption.value = ''
  placeholderOption.textContent = 'Selecciona un vendedor'
  placeholderOption.disabled = true
  placeholderOption.selected = true
  selecionadorV.appendChild(placeholderOption)
  for (const sel of vendedores) {
    const opcion = document.createElement('option')
    opcion.value = sel
    opcion.textContent = sel
    selecionadorV.appendChild(opcion)
  }
  divFiltros.appendChild(selecionadorV)
  selecionadorV.addEventListener('change', (e) => {
    vendedor = e.target.value
    filtrar()
  })
}
const SelectColor = () => {
  const divFiltros = document.querySelector('#filtros')
  const selecionadorC = document.createElement('select')
  selecionadorC.className = 'colorContainer'
  const placeholderOption = document.createElement('option')
  placeholderOption.value = ''
  placeholderOption.textContent = 'Selecciona un color'
  placeholderOption.disabled = true
  placeholderOption.selected = true
  selecionadorC.appendChild(placeholderOption)
  for (const col of colores) {
    const opcion = document.createElement('option')
    opcion.value = col
    opcion.textContent = col
    selecionadorC.appendChild(opcion)
  }
  divFiltros.appendChild(selecionadorC)
  selecionadorC.addEventListener('change', (e) => {
    color = e.target.value
    filtrar()
  })
} */

//------SELECTORES------
const Select = () => {
  const divFiltros = document.querySelector('#filtros')
  const selecionadorV = document.createElement('select')
  const selecionadorC = document.createElement('select')
  selecionadorV.className = 'sellerContainer'
  selecionadorC.className = 'colorContainer'
  const placeholderOption = document.createElement('option')
  placeholderOption.value = ''
  placeholderOption.textContent = 'Selecciona un vendedor'
  placeholderOption.disabled = true
  placeholderOption.selected = true
  selecionadorV.appendChild(placeholderOption)
  const placeholderOption2 = document.createElement('option')
  placeholderOption2.value = ''
  placeholderOption2.textContent = 'Selecciona un color'
  placeholderOption2.disabled = true
  placeholderOption2.selected = true
  selecionadorC.appendChild(placeholderOption2)
  for (const sel of vendedores) {
    const opcion = document.createElement('option')
    opcion.value = sel
    opcion.textContent = sel
    selecionadorV.appendChild(opcion)
  }
  divFiltros.appendChild(selecionadorV)
  selecionadorV.addEventListener('change', (e) => {
    vendedor = e.target.value
    filtrar()
  })
  for (const col of colores) {
    const opcion = document.createElement('option')
    opcion.value = col
    opcion.textContent = col
    selecionadorC.appendChild(opcion)
  }
  divFiltros.appendChild(selecionadorC)
  selecionadorC.addEventListener('change', (e) => {
    color = e.target.value
    filtrar()
  })
}

//-------Input----
const InpurPrecio = () => {
  const divFiltros = document.querySelector('#filtros')
  const entradaP = document.createElement('input')
  entradaP.className = 'priceContainer'
  entradaP.type = 'number'
  entradaP.placeholder = 'Introduce un precio'
  entradaP.addEventListener('input', (e) => {
    precio = e.target.value
    filtrar()
  })
  divFiltros.appendChild(entradaP)
}

//------boton limpiar-------
const botonLimpiar = () => {
  const divFiltros = document.querySelector('#filtros')
  const botonLimp = document.createElement('button')
  botonLimp.className = 'botonContainer'
  botonLimp.textContent = 'Limpiar filtros'
  botonLimp.addEventListener('click', () => {
    vendedor = ''
    color = ''
    precio = 0

    const selectores = divFiltros.querySelectorAll('select')
    selectores.forEach((selector) => {
      selector.selectedIndex = 0
    })
    const inputPrecio = divFiltros.querySelector('input[type="number"]')
    inputPrecio.value = ''
    const mensajeNoHay = divFiltros.querySelector('p')
    if (mensajeNoHay) {
      mensajeNoHay.remove()
    }

    filtrar()
  })
  divFiltros.appendChild(botonLimp)
}

//-----------------------ROPA-------------------
const printRopa = (ropa) => {
  const divRopa = document.querySelector('#productos')
  divRopa.innerHTML = '' //Esto se usa para vaciar los datos y que no se dupliquen los datos cada vez que se ejecuta

  for (const camisetas of ropa) {
    //Esto es para crear los cuadraditos de la ropa
    const divCamisetas = document.createElement('div')
    const divImagen = document.createElement('div')
    const imagen = document.createElement('img')
    const nombre = document.createElement('h3')
    const precio = document.createElement('p')
    const divEstrellas = document.createElement('div')

    //bucle para crear las estrellas
    for (let i = 1; i <= 5; i++) {
      const estrella = document.createElement('div')
      estrella.className = 'estrella'
      divEstrellas.appendChild(estrella)
      if (camisetas.stars >= i) {
        estrella.classList.add('rellena')
      }
    }
    //Poner los contenidos
    divCamisetas.className = 'flex-container'
    divImagen.classList.add('imgContainer')
    divEstrellas.classList.add('estrellas', 'flex-container')
    imagen.src = camisetas.image
    precio.textContent = `${camisetas.price}€`
    nombre.textContent = camisetas.name
    //Se añaden las cosas
    divCamisetas.appendChild(divImagen)
    divImagen.appendChild(imagen)
    divCamisetas.appendChild(nombre)
    divCamisetas.appendChild(precio)
    divCamisetas.appendChild(divEstrellas)
    divRopa.appendChild(divCamisetas)
  }
}

printRopa(productos)
Select()
InpurPrecio()
botonLimpiar()
