//Carta de productos
const productos = [
  {
    name: 'SHEIN WYWH Top De Cuello Halter',
    price: 5.1,
    stars: 5,
    color: 'blanco',
    seller: 'SHEIN WYWH',
    image: './assets/ropa_1.jpg'
  },
  {
    name: 'SHEIN MOD Top de Punto',
    price: 5,
    stars: 4,
    color: 'negro',
    seller: 'SHEIN MOD',
    image: './assets/ropa_2.jpg'
  },
  {
    name: 'SHEIN Essnce Camiseta unicolor',
    price: 5.1,
    stars: 5,
    color: 'marrón',
    seller: 'SHEIN Essnce',
    image: './assets/Ropa_3.jpg'
  },
  {
    name: 'SHEIN Frenchy Camiseta Casual',
    price: 5.95,
    stars: 5,
    color: 'negro',
    seller: 'SHEIN Fenchy',
    image: './assets/Ropa_4.jpg'
  },
  {
    name: 'SHEIN MOD',
    price: 5,
    stars: 3,
    color: 'blanco',
    seller: 'SHEIN MOD',
    image: './assets/Ropa_5.jpg'
  },
  {
    name: 'SHEIN WYWH Top Boho',
    price: 3.4,
    stars: 5,
    color: 'blanco',
    seller: 'SHEIN WYWH',
    image: './assets/ropa_1.jpg'
  },
  {
    name: 'SHEIN LUNE Camiseta',
    price: 9,
    stars: 4,
    color: 'negro',
    seller: 'SHEIN LUNE',
    image: './assets/ropa_2.jpg'
  },
  {
    name: 'SHEIN LUNE Camiseta De Manga Corta',
    price: 5.95,
    stars: 2,
    color: 'marrón',
    seller: 'SHEIN LUNE',
    image: './assets/Ropa_3.jpg'
  },
  {
    name: 'SHEIN Essnce Top De Tirante',
    price: 5.1,
    stars: 5,
    color: 'negro',
    seller: 'SHEIN Essnce',
    image: './assets/Ropa_4.jpg'
  },
  {
    name: 'SHEIN Essnce Camiseta Talla Grande',
    price: 7,
    stars: 1,
    color: 'blanco',
    seller: 'SHEIN Essnce',
    image: './assets/Ropa_5.jpg'
  }
]
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
// -----------------------FILTROS--------------
//seleccionador de vendedor y colores
const vendedores = []
const colores = []
const precios = 0

//-----------Para limpiar -----------
const fillVendedores = (ropa) => {
  vendedores.splice(0)
  for (const camisetas of ropa) {
    if (!vendedores.includes(camisetas.seller)) {
      vendedores.push(camisetas.seller)
    }
  }
}
fillVendedores(productos)

const fillColores = (ropa) => {
  colores.splice(0)
  for (const camisetas of ropa) {
    if (!colores.includes(camisetas.color)) {
      colores.push(camisetas.color)
    }
  }
}
fillColores(productos)

const fillPrecio = (ropa) => {
  precios.splice(0)
  for (const camisetas of ropa) {
    if (!precios.includes(camisetas.price)) {
      precios.push(camisetas.price)
    }
  }
}
fillPrecio(productos)

//-------Filtros---------------
const filtrar = () => {
  const filtrado = []
  for (const ropa of productos) {
    if (
      filtroVendedor == ropa.seller ||
      filtroColor == ropa.color ||
      filtroPrecio <= ropa.price
    ) {
      filtrado.push(ropa)
    } else {
      let RopaAleatoria = Math.floor(Math.random() * 10) + 1
      console.log(
        'No se encuentran productos, aqui le dejamos una sugerencia' +
          RopaAleatoria
      )
    }
  }
  printRopa(filtrado)
}
/* const filtrarVendedor = () => {
  const filtrado = []
  for (const camisetas of productos) {
    if (vendedor === camisetas.seller) {
      filtrado.push(camisetas)
    }
  }
  printRopa(filtrado)
}
const filtrarColor = () => {
  const filtradocolor = []
  for (const camisetas of productos) {
    if (color === camisetas.color) {
      filtradocolor.push(camisetas)
    }
  }
  printRopa(filtradocolor)
}

const filtrarPrecio = () => {
  const precioMax = parseFloat(
    document.querySelector('#filtros input[type="number]').value
  )
  const filtradoPrecio = []
  for (const camiseta of productos) {
    if (camiseta.price <= precioMax) {
      filtradoPrecio.push(camiseta)
    }
  }
  if (filtradoPrecio.length === 0) {
    const RopaAleatoria = Math.floor(Math.random() * 10) + 1
    console.log(
      'No hay productos con ese precio, aquí tiene otros productos' +
        RopaAleatoria
    )
  }
  printRopa(filtradoPrecio)
} */
/* const filtros = () => {
  const filtrado = []
  for (const ropa of productos) {
    if (
      vendedor == ropa.seller ||
      color == ropa.color ||
      precio <= ropa.price
    ) {
      filtrado.push(ropa)
    } else {
      const RopaAleatoria = Math.floor(Math.random() * 10) + 1
      console.log(
        'No hay productos con ese precio, aquí tiene otros productos' +
          RopaAleatoria
      )
    }
  }
  printRopa(filtrado)
}*/

//--------Para los buscadores------------

const SelectSeller = () => {
  const divFiltros = document.querySelector('#filtros')
  const seleccionaSeller = document.createElement('select')
  for (const vendedor of vendedores) {
    const opcion = document.createElement('option')
    opcion.value = vendedor
    opcion.textContent = vendedor
    seleccionaSeller.appendChild(opcion)
  }
  divFiltros.appendChild(seleccionaSeller)
  seleccionaSeller.addEventListener('change', () => {
    vendedores = SelectSeller.value
    filtrar()
  })
}
const SelectColor = () => {
  const divFiltros = document.querySelector('#filtros')
  const seleccionaColor = document.createElement('select')
  for (const color of colores) {
    const opcion2 = document.createElement('option')
    opcion2.value = color
    opcion2.textContent = color
    seleccionaColor.appendChild(opcion2)
  }
  divFiltros.appendChild(seleccionaColor)
  seleccionaColor.addEventListener('change', () => {
    colores = SelectColor.value
    filtrar()
  })
}
const BuscarPrecio = () => {
  const divFiltros = document.querySelector('#filtros')
  const BuscaPrecio = document.createElement('input')
  BuscaPrecio.type = 'number'
  BuscaPrecio.placeholder = 'Precio'
  BuscarPrecio.addEventListener('input', () => {
    precios = parseFloat(BuscaPrecio.value)
    filtrar()
  })
  divFiltros.appendChild(BuscaPrecio)
}

const Limpiar = () => {
  const divFiltros = document.querySelector('#filtros')
  const botonLimpiar = document.createElement('button')
  botonLimpiar.textContent = 'Limpiar '
  boton.addEventListener('click', () => {
    SelectSeller.value = ''
    SelectColor.value = ''
    BuscarPrecio.value = ''
    colores = ''
    vendedores = ''
    precios = 0
    filtrar()
  })
  divFiltros.appendChild(botonLimpiar)
}

SelectSeller()
SelectColor()
BuscarPrecio()
Limpiar()
printRopa(productos)
