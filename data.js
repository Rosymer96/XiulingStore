const products = [
    { id: 1, productName: "Aretes Flor", src: "./Imagenes/imagen1.jpg", alt: "Aretes de Flor", description: "Aretes dorados con diseño floral en oro dorado", price: 12, stock: 14 },
    { id: 2, productName: "Collar Carita Feliz", src: "./Imagenes/imagen2.jpg", alt: "Collar Carita Feliz", description: "Collar dorado con dije de carita sonriente", price: 18, stock: 13 },
    { id: 3, productName: "Pulsera Osito", src: "./Imagenes/imagen3.jpg", alt: "Pulsera Morada Osito", description: "Pulsera lila ajustable con dije de osito dorado", price: 15, stock: 12 },
    { id: 4, productName: "Aretes Flor Lila", src: "./Imagenes/imagen4.jpg", alt: "Aretes Flor Lila", description: "Aretes dorados con flores lilas esmaltadas", price: 22, stock: 11 },
    { id: 5, productName: "Collar Flor Lila", src: "./Imagenes/imagen5.jpg", alt: "Collar Flor Lila", description: "Collar dorado con dije de flor lila esmaltada", price: 16, stock: 15 },
    { id: 6, productName: "Aretes Arcoíris", src: "./Imagenes/imagen6.jpg", alt: "Aretes Arcoíris", description: "Aretes dorados con diseño de arcoíris colorido", price: 20, stock: 14 },
    {id: 7, productName: "Collar Arcoíris", src: "./Imagenes/imagen7.jpg", alt: "Collar Arcoíris", description: "Collar con dije de arcoíris esmaltado y cadena dorada", price: 13, stock: 12},
    { id: 8, productName: "Pulsera Arcoíris", src: "./Imagenes/imagen8.jpg", alt: "Pulsera Arcoíris", description: "Pulsera con cuentas coloridas y dije de arcoíris", price: 19, stock: 10 },
    { id: 9, productName: "Aretes Osito", src: "./Imagenes/imagen9.jpg", alt: "Aretes Osito", description: "Aretes dorados en forma de osito en oro dorado", price: 14, stock: 13 },
    { id: 10, productName: "Aretes Estrella", src: "./Imagenes/imagen10.jpg", alt: "Aretes Estrella", description: "Aretes con diseño de estrella dorada con brillante", price: 17, stock: 12 },
    { id: 11, productName: "Collar Estrella", src: "./Imagenes/imagen11.jpg", alt: "Collar Estrella", description: "Collar con dije de hada esmaltada y cadena dorada", price: 21, stock: 11 },
    { id: 12, productName: "Pulsera Rosa Osito", src: "./Imagenes/imagen12.jpg", alt: "Pulsera Rosa Osito", description: "Pulsera rosa ajustable con cuentas y dije de osito", price: 11, stock: 15 },
    { id: 13, productName: "Aretes Unicornio", src: "./Imagenes/imagen13.jpg", alt: "Aretes Unicornio", description: "Aretes dorados con forma de unicornio", price: 23, stock: 14 },
    { id: 14, productName: "Collar Corazón", src: "./Imagenes/imagen14.jpg", alt: "Collar Corazón", description: "Collar dorado con dije de corazón brillante", price: 24, stock: 10 },
    { id: 15, productName: "Aretes Mariposa", src: "./Imagenes/imagen15.jpg", alt: "Aretes Mariposa", description: "Aretes dorados con diseño de mariposa", price: 15, stock: 13 }
];

const $main = document.querySelector('main');
const $productContainer =document.createElement('div');
$productContainer.classList.add('productsContainer');
$main.appendChild($productContainer);

for(let product of products){
    let $product = document.createElement('div');
    $productContainer.appendChild($product);
    $product.classList.add('product');

    $product.innerHTML= `
    <div class= "containerImg">
      <img class= "imgProduct" src="${product.src}" alt="${product.alt}"/>
    </div>
    <h3 class="nameProduct">${product.productName}</h3>
    <p class="description">${product.description}</p>
    <p class="price">€${product.price}</p>
    <button class="btnProduct">Agregar al carrito</button>
    `
}

