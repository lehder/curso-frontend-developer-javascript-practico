const menuEmail = document.querySelector('.navbar-email'); 
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
/* const aside = document.querySelector('.product-detail');
A este selector le vamos a cabiar su nombre y su clase por un id 
const shoppingCardContainer = document.querySelector('#shoppingCardContainer');*/
const shoppingCardContainer = document.querySelector('#shoppingCardContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

//Para el Desktop

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCardContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCardContainer.classList.add('inactive');
  }

   desktopMenu.classList.toggle('inactive');

}

// Para el responsive

function toggleMobileMenu() {
  const isAsideClosed = shoppingCardContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCardContainer.classList.add('inactive');
    
  }

  closeProductDetailAside();

  mobileMenu.classList.toggle('inactive');
}

//Carrito de Compras

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  }

  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
  
  if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive'); 
  }

  shoppingCardContainer.classList.toggle('inactive');
}

/* Function para que cuando le demos click a la imagen, aparesca */

function openProductDetailAside() {
  shoppingCardContainer.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');
}

/* Function para que la imagen desaparesca utlizando el boton */

function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive');
}

//Product List

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbV24pjD0Z0Q_ch-RaI76IFT1Zu-Wk7iMYUQ&usqp=CAU',
});

productList.push({
  name: 'Pantalla',
  price: 360,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2nyDx-pyUpcbsbebBXD5rIiurmP7jA9MxOXCeL2YrQyFyuWAlKQmVOK0shfsW3ujRc_0&usqp=CAU',
});

productList.push({
  name: 'Pantalones',
  price: 185,
  image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto',
});

productList.push({
  name: 'Zapatos',
  price: 128,
  image: 'https://sevilla.abc.es/estilo/bulevarsur/wp-content/uploads/sites/14/2019/09/Tendencias-en-ropa-deportiva-otono-invierno-2019-2020.jpg',
});

productList.push({
  name: 'Pantalla',
  price: 360,
  image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto',
});

productList.push({
  name: 'Pantalla',
  price: 360,
  image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg',
});

productList.push({
  name: 'Pantalla',
  price: 360,
  image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602',
});

productList.push({
  name: 'Pantalla',
  price: 360,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwMZ_PQYZsaYZVtTxDqT8paPCI5Gqib6kmDlEZbGtMsgCSuvPbOEFNIAoKtXRqR5c_m2Y&usqp=CAU',
});

productList.push({
  name: 'Pantalla',
  price: 360,
  image: 'https://idawen.com/blog/wp-content/uploads/2020/07/43123834_562523850835671_7532562143279865182_n.jpg',
});

productList.push({
  name: 'Pantalla',
  price: 360,
  image: 'https://estasdemoda.com/wp-content/uploads/2022/04/Ropa-sport-sin-costuras-FranKlyn-Boutique.jpg',
});

productList.push({
  name: 'Pantalla',
  price: 360,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxUnOTAze2kEu5UqaTTNZxQGMVjtMDdW-sOg&usqp=CAU',
});

productList.push({
  name: 'Pantalla',
  price: 360,
  image: 'http://t1.gstatic.com/images?q=tbn:ANd9GcQXi6DWOd9VX5EcderWsqCYifz1V1JsUzuKblOE2EnejgE8UuAM',
});

productList.push({
  name: 'Pantalla',
  price: 360,
  image: 'https://i.blogs.es/60b83c/prendas-de-ropa-deportiva-5-/450_1000.jpg',
});

productList.push({
  name: 'Pantalla',
  price: 360,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4LE93QrTZAzbn5KI2emRz8Iw0WlZxo8whbA&usqp=CAU',
});

productList.push({
  name: 'Pantalla',
  price: 360,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQczOfkejxYF-CoJI2fkmk1cLOt3JAANzAR0A&usqp=CAU',
});

productList.push({
  name: 'Pantalla',
  price: 360,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkKe9LEkayhDZ8cf0y0wiqCrd0RMa-ZRWiGQ&usqp=CAU',
});

productList.push({
  name: 'Pantalla',
  price: 360,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMFjQ1ObwXBec4IgEw4Bgqq0LQ1HH-ss_3iQ&usqp=CAU',
});

productList.push({
  name: 'Pantalla',
  price: 360,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZx1D29sregXXdnCgBadeZxtGjeDAI15T8o9ppLL2LtPrC_Qr6bE7_2bBZ7X139583DEk&usqp=CAU',
});

productList.push({
  name: 'Pantalla',
  price: 360,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXAOb1ozjjFqB2GbXF81nNQynHbDRI-o3s2g&usqp=CAU',
});

productList.push({
  name: 'Pantalla',
  price: 360,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtWP3h_pfTHcsxNPHLMadPugQw0Yegj8aKHg&usqp=CAU',
});

productList.push({
  name: 'Pantalla',
  price: 360,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGf_5POabmOlvU8VmF10oLg2ztkw8sD5SGlyvk4bMcM6mSiWv8co0WL9Y4b7ZHKQLqFpM&usqp=CAU',
});

productList.push({
  name: 'Pantalla',
  price: 360,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdAo-BvhNkd3V_xik7YrZ1BF7qlOo3AsEfPWxrAnOqJloaSu8JEa61SHBZ0KbLyg4MN4g&usqp=CAU',
});

productList.push({
  name: 'Pantalla',
  price: 360,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr0XBptcSo5ldwDFufn6nsXBlWFcft7HOFaA&usqp=CAU',
});

productList.push({
  name: 'Pantalla',
  price: 360,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBMwPwRIZ7uuWPIYs0hI7c-fxJ4njDKFs9ew&usqp=CAU',
});

/*
Esta sera la referencia del HTML, para el JS.


<div class="product-card">
   <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
      <div class="product-info">
        <div>
          <p>$120,00</p>
          <p>Bike</p>
        </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
      </div>
</div>
*/ 

for (product of productList) { 
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

    /* Imagen */

    // product = {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    /* productImg.addEventListener ('click', console.log); */
    productImg.addEventListener ('click', openProductDetailAside);

    /* Info */
    const productInfo = document.createElement ('div');
    productInfo.classList.add('product-info');

    /* Precio y Nombre */
    const productInfoDiv = document.createElement('div'); 
    /* Precio */
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    /* Nombre */
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    /* Figure */
    const productInfoFigure = document.createElement('figure');
    /* Imagen del producto img */
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    /*Apartir de aqui nos devolvemos para insertar todas estas variables en 
    el "product-card" */

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);


    productCard.appendChild(productImg);
    productCard.appendChild(productInfo); 
    
    cardsContainer.appendChild(productCard);
      
}


