
// Evento que despliega el menu oculto en responsive:

document.addEventListener('DOMContentLoaded', showMenu);
function showMenu(){
  let $menuToggle = document.querySelector('.menuToggle');
  let $menu = document.querySelector('.menu');

  $menuToggle.addEventListener('click', function(){
    $menu.classList.toggle('active');
  });

    //Ocultar el menu si se hace click en otro lugar (el target)
  document.addEventListener('click', function(e){
    if(!$menu.contains(e.target) && !$menuToggle.contains(e.target)){
      $menu.classList.remove('active');
    }  
  });
}

//Evento que despliega el carrito de compras al clickear el icono:

document.addEventListener('DOMContentLoaded', showShoppingCar);
function showShoppingCar(){
  let $shoppingCarIcon = document.querySelector('.shoppingCarIcon')
  let $shoppingCar = document.querySelector('.shoppingCarContainer');

  $shoppingCarIcon.addEventListener('click', function (){
  $shoppingCar.classList.toggle('active');
});
}


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
      <button id="${product.id}" class="btnProduct">Agregar al carrito</button>
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
    // console.log(e);
      let id = parseInt(e.target.id);
      // Utilizando el e.target.id ya no es necesario esto(he borrado el id oculto en el productPill):
      // let selectedProduct =e.target.closest('.product');
      // if(selectedProduct){
      //   let id = parseInt(selectedProduct.querySelector('.id').textContent); 
      let existedProduct = selectedProducts.find(selected => selected.id === id);
    // Verifica que me entregue el id correcto:
    // console.log(id);
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
  console.log(selectedProducts);

  $shoppingCar.innerHTML = ' ';

  for (let selectedProduct of selectedProducts ){
      $selectedProduct = document.createElement('div');
      $shoppingCar.appendChild($selectedProduct);
      $selectedProduct.textContent = selectedProduct.name + ' x ' + selectedProduct.quantity;
      $totalPrice.textContent = selectedProducts.reduce((acc, selectedProduct)=> acc + (selectedProduct.price * selectedProduct.quantity), 0);
  }
  }; 
    
  

      // for(let product of products){
      //   if (product.id === selectedId){
      //     let quantity = 1;
      //     selectedProducts.push(product.id, product.productName, product.price, product.stock, quantity);
      //   }
      // }

      // let selectedProduct = e.target.closest('.product');
      // if(selectedProduct){
      //   let id = selectedProduct.querySelector('.id').textContent;
      //   let name = selectedProduct.querySelector('.nameProduct').textContent;
      //   let price = selectedProduct.querySelector('.price').textContent;
      //   let counter = 1;

      //   let existedProduct = selectedProducts.find(product => product.id === id);
      //   if(!existedProduct){
      //     selectedProducts.push({counter,id,name,price});
      //   } else{
      //     existedProduct.counter += 1;
      //   }
      
//Crear dinamicamente los div que se añaden al carrito de compras:


    


    

