
// Evento que despliega el menu oculto en responsive:

let $menuToggle = document.querySelector('.menuToggle');
let $menu = document.querySelector('.menu');
$menuToggle.addEventListener('click', showMenu);

function showMenu(){
  $menu.classList.toggle('active');
  
    //Ocultar el menu si se hace click en otro lugar.

  document.addEventListener('click', function(e){
    if(!$menu.contains(e.target) && !$menuToggle.contains(e.target)){
      $menu.classList.remove('active');
      $menuToggle.classList.remove('active');
    }  
  });
};
$menuToggle.addEventListener('click', ()=> $menuToggle.classList.toggle('active'));


//Evento que despliega el carrito de compras al clickear el icono:
let $shoppingCarIcon = document.querySelector('.shoppingCarIcon')
let $shoppingCarContainer = document.querySelector('.shoppingCarContainer');
$shoppingCarIcon.addEventListener('click', showShoppingCar);

function showShoppingCar(){
  $shoppingCarContainer.classList.toggle('active');
};

// Creacion de las pildoras con los productos:

const $main = document.querySelector('main');
const $productContainer =document.createElement('div');
$productContainer.classList.add('productsContainer');
$main.appendChild($productContainer);

for(let product of products){
  let $product = document.createElement('div');
  $productContainer.appendChild($product);
  $product.classList.add('product-pill');

  $product.innerHTML= `
  <div class= "product">
    <div class= "containerImg">
      <img class= "imgProduct" src="${product.src}" alt="${product.alt}"/>
    </div>
    <h3 class="nameProduct">${product.productName}</h3>
    <p class="description">${product.description}</p>
    <p class="price">€${product.price}</p>
    <button data-id="${product.id}" class="btnProduct">Agregar al carrito</button>
  </div>
  `;
}

  //Añadir el evento a los btn creando un array de objetos seleccionados solo con el id, nombre y precio:
let selectedProducts=[];
let $shoppingCar = document.querySelector('.shoppingCar');
let $totalPrice = document.querySelector('.totalPrice');
let $btnProducts = document.querySelectorAll('.btnProduct');

for(let $btnProduct of $btnProducts){
    $btnProduct.addEventListener('click', pushProduct);
}
function pushProduct(e){
  //console.log(e);
  let id = parseInt(e.target.dataset.id);
  let existedProduct = selectedProducts.find(selected => selected.id === id);
  for(let product of products){
    if(product.id === id){
      if(!existedProduct){
        selectedProducts.push({
          quantity:1,
          id: product.id,
          name: product.productName,
          price: product.price,
          stock: product.stock,
        });
      } else if(existedProduct.stock <= existedProduct.quantity){
          alert('Este producto no cuenta con stock suficiente.');
      }
      else{
        existedProduct.quantity += 1;
      }
      break;
    }
  }
//console.log(selectedProducts);
$shoppingCarContainer.classList.add('active');
renderShoppingCar();
}

function renderShoppingCar(){
  $shoppingCar.innerHTML = ' ';

  for (let selectedProduct of selectedProducts ){
    $selectedProduct = document.createElement('div');
    $selectedProduct.classList.add('selectedProduct');
    $selectedProduct.innerHTML = `
      <div>${selectedProduct.name}</div>
      <div class="btns">
      <button class="btnRemoveProduct" data-id=${selectedProduct.id}>-</button><p class="quantity">${selectedProduct.quantity}</p><button class="btnAddProduct" data-id=${selectedProduct.id}>+</button>
      </div>
    `;
    $shoppingCar.appendChild($selectedProduct);
  }

  if (selectedProducts.length > 0){
    $totalPrice.textContent = selectedProducts.reduce((acc, selectedProduct)=> 
    acc + (selectedProduct.price * selectedProduct.quantity), 0);
  } else {
      $totalPrice.textContent = 0;
  };

//Añadir eventos a los botones de add y remove:

  let $btnAddProducts = document.querySelectorAll('.btnAddProduct');
  for( let $btnAddProduct of $btnAddProducts){
    $btnAddProduct.addEventListener('click', addProduct);
  }
  let $btnRemoveProducts = document.querySelectorAll('.btnRemoveProduct');
  for( let $btnRemoveProduct of $btnRemoveProducts){
    $btnRemoveProduct.addEventListener('click', removeProduct);
  };
}

function addProduct(e) {
  let id = parseInt(e.target.dataset.id);
  let selectedProduct = selectedProducts.find(selectedProduct => selectedProduct.id === id);

  if (selectedProduct.quantity < selectedProduct.stock) {
    selectedProduct.quantity += 1;
  } else {
    alert('Este producto no cuenta con stock suficiente.');
  }

  renderShoppingCar();
}

function removeProduct(e) {
  let id = parseInt(e.target.dataset.id);
  let selectedProduct = selectedProducts.find(selectedProduct => selectedProduct.id === id);

  if (selectedProduct) {
      if (selectedProduct.quantity > 1) {
          selectedProduct.quantity -= 1;
      } else {
          selectedProducts = selectedProducts.filter(product => product.id !== id); // Filtramos todos los productos y creamos un nuevo array que asignamos a selectedProducts.
      }
  }

  renderShoppingCar();
}

//Añadir funcionalidad a los botones del carrito de compras:

let $btnClearCar = document.querySelector('.btnClearCar');
$btnClearCar.addEventListener('click', clearCar);

function clearCar(){
  $shoppingCar.innerHTML = ' ';
  selectedProducts = [];
  $totalPrice.textContent = 0;
}

//Evento que permite generar la compra o envia mensaje en caso el carrito este vacio.
let $btnStartOrder = document.querySelector('.btnStartOrder');
let $messageOrder = document.querySelector('.messageOrder');
$btnStartOrder.addEventListener('click', startOrder);

function startOrder(){
  if(selectedProducts.length === 0){
    alert('El carrito de compras esta vacío y no se puede proceder con la compra.');
  } else{
  $shoppingCarContainer.classList.remove('active');
  $messageOrder.classList.toggle('active');
  clearCar();
  }
}
//Evento que cierra el mensaje de exito de compra.
let $btnCloseMessageOrder = document.querySelector('.btnCloseMessageOrder');
$btnCloseMessageOrder.addEventListener('click', () => $messageOrder.classList.remove('active'))


