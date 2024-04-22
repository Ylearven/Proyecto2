import './style.css'
//Carta de productos
const products = [
  {
    name: 'SHEIN WYWH Top De Cuello Halter',
    price: 5.1,
    stars: 5,
    reviews: 500,
    seller: 'SHEIN WYWH',
    image:
      'https://es.shein.com/SHEIN-WYWH-Ladies-Solid-Texture-Halterneck-Top-p-28765755.html?src_identifier=on%3DIMAGE_COMPONENT%60cn%3Dshopbycate%60hz%3DhotZone_2%60ps%3D4_2%60jc%3DitemPicking_008255621&src_module=All&src_tab_page_id=page_home1713785801766&mallCode=1&pageListType=2&imgRatio=3-4g'
  },
  {
    name: 'SHEIN MOD Top de Punto',
    price: 5,
    stars: 5,
    reviews: 1000,
    seller: 'SHEIN MOD',
    image:
      'https://es.shein.com/SHEIN-MOD-Women-S-Solid-Color-Pleated-Knitted-Top-p-28809068.html?src_identifier=on%3DIMAGE_COMPONENT%60cn%3Dshopbycate%60hz%3DhotZone_2%60ps%3D4_2%60jc%3DitemPicking_008255621&src_module=All&src_tab_page_id=page_home1713785801766&mallCode=1&pageList'
  },
  {
    name: 'SHEIN Essnce Camiseta unicolor',
    price: 5.1,
    stars: 5,
    reviews: 1000,
    seller: 'SHEIN Essnce',
    image:
      'https://es.shein.com/SHEIN-Essnce-Solid-Round-Neck-Tee-p-15968402.html?src_identifier=on%3DIMAGE_COMPONENT%60cn%3Dshopbycate%60hz%3DhotZone_2%60ps%3D4_2%60jc%3DitemPicking_008255621&src_module=All&src_tab_page_id=page_home1713785801766&mallCode=1&pageListType=2'
  },
  {
    name: 'SHEIN Frenchy Camiseta Casual',
    price: 5.95,
    stars: 5,
    reviews: 1000,
    seller: 'SHEIN Fenchy',
    image:
      'https://es.shein.com/SHEIN-Frenchy-Solid-Color-Short-Sleeve-Casual-T-Shirt-p-27164927.html?src_identifier=on%3DIMAGE_COMPONENT%60cn%3Dshopbycate%60hz%3DhotZone_2%60ps%3D4_2%60jc%3DitemPicking_008255621&src_module=All&src_tab_page_id=page_home1713785801766&mallCode=1&pageListType=2&imgRatio=3-4'
  },
  {
    name: 'SHEIN MOD',
    price: 5,
    stars: 5,
    reviews: 500,
    seller: 'SHEIN MOD',
    image:
      'https://es.shein.com/SHEIN-MOD-Square-Neck-Ruched-Red-Slim-Fit-Tank-Top-p-21006440.html?src_identifier=on%3DIMAGE_COMPONENT%60cn%3Dshopbycate%60hz%3DhotZone_2%60ps%3D4_2%60jc%3DitemPicking_008255621&src_module=All&src_tab_page_id=page_home1713785801766&mallCode=1&pageListType=2&imgRatio=3-4'
  },
  {
    name: 'SHEIN WYWH Top Boho',
    price: 3.4,
    stars: 5,
    reviews: 500,
    seller: 'SHEIN WYWH',
    image:
      'https://es.shein.com/SHEIN-WYWH-WYWH-Vacation-Blue-White-Paisley-Print-Self-Tie-Halter-Boho-Top-p-10900594.html?src_identifier=on%3DIMAGE_COMPONENT%60cn%3Dshopbycate%60hz%3DhotZone_2%60ps%3D4_2%60jc%3DitemPicking_008255621&src_module=All&src_tab_page_id=page_home1713785801766&mallCode=1&pageListType=2'
  },
  {
    name: 'SHEIN LUNE Camiseta',
    price: 9,
    stars: 5,
    reviews: 500,
    seller: 'SHEIN LUNE',
    image:
      'https://es.shein.com/SHEIN-LUNE-Plus-Size-Women-s-Summer-Casual-Solid-Color-T-Shirt-With-Ruffled-Sleeves-And-Round-Neckline-p-32050319.html?src_identifier=on%3DIMAGE_COMPONENT%60cn%3Dshopbycate%60hz%3DhotZone_2%60ps%3D4_2%60jc%3DitemPicking_008255621&src_module=All&src_tab_page_id=page_home1713785801766&mallCode=1&pageListType=2'
  },
  {
    name: 'SHEIN LUNE Camiseta De Manga Corta',
    price: 5.95,
    stars: 5,
    reviews: 500,
    seller: 'SHEIN LUNE',
    image:
      'https://es.shein.com/SHEIN-LUNE-Plus-Size-Women-s-V-Neck-Bat-Short-Sleeved-T-Shirt-p-28328049.html?src_identifier=on%3DIMAGE_COMPONENT%60cn%3Dshopbycate%60hz%3DhotZone_2%60ps%3D4_2%60jc%3DitemPicking_008255621&src_module=All&src_tab_page_id=page_home1713785801766&mallCode=1&pageListType=2'
  },
  {
    name: 'SHEIN Essnce Top De Tirante',
    price: 5.1,
    stars: 5,
    reviews: 500,
    seller: 'SHEIN Essnce',
    image:
      'https://es.shein.com/SHEIN-Essnce-Contrast-Binding-Cami-Top-p-20774741.html?src_identifier=on%3DIMAGE_COMPONENT%60cn%3Dshopbycate%60hz%3DhotZone_2%60ps%3D4_2%60jc%3DitemPicking_008255621&src_module=All&src_tab_page_id=page_home1713785801766&mallCode=1&pageListType=2'
  },
  {
    name: 'SHEIN Essnce Camiseta Talla Grande',
    price: 7,
    stars: 5,
    reviews: 500,
    seller: 'SHEIN Essnce',
    image:
      'https://es.shein.com/SHEIN-Essnce-Plus-Cold-Shoulder-Batwing-Sleeve-Tee-p-18743160.html?src_identifier=on%3DIMAGE_COMPONENT%60cn%3Dshopbycate%60hz%3DhotZone_2%60ps%3D4_2%60jc%3DitemPicking_008255621&src_module=All&src_tab_page_id=page_home1713785801766&mallCode=1&pageListType=2'
  }
]
const divRopa = document.querySelector('#carta_ropa')
products.forEach((ropa) => {
  const divropa = document.createElement('div')
  divropa.className = 'camisetas'

  divropa.appendChild(divCamiseta)
})

/* const seccionRopa = document.querySelector('carta_ropa')*/
for (const ropa of ropa) {
  const imagen = document.createElement('img')
  const nombre = document.createElement('h2')
  const estrella = document.createElement('img')
  const precio = document.createElement('h3')
}
/*imagen.src = products.image
nombre.src = products.name
estrella.src = products.stars
precio.src = products.price */
