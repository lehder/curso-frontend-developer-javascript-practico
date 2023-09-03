# ESTA ES LA FUSION DE TODOS LOS ARCHIVOS QUE TENEMOS EN ESTA CARPETA, UTLIZANDO TODO LO QUE HEMOS APRENDIDO EN EL CURSO PRACTICO DE JAVASCRIPT.



En primera instancia vamos a comenzar cogien algunos elementos que habiamos hecho anteriormente como es tomar la clase numero 11, y la clase numero 7, estas dos vamos a fusionaralas y hacerlas interactivas, en tonces copiamos el html de la clase 11, y la vamos a poner en el archivo (fusion.html) y vamos a comenzar a modificar lo que tenemos que modificar.


```js

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>YardSale: tienda online de cositas chidas</title>
  <style>
    :root {
      --white: #FFFFFF;
      --black: #000000;
      --very-light-pink: #C7C7C7;
      --text-input-field: #F7F7F7;
      --hospital-green: #ACD9B2;
      --sm: 14px;
      --md: 16px;
      --lg: 18px;
    }
    body {
      margin: 0;
      font-family: 'Quicksand', sans-serif;
    }
    nav {
      display: flex;
      justify-content: space-between;
      padding: 0 24px;
      border-bottom: 1px solid var(--very-light-pink);
    }
    .menu {
      display: none;
    }
    .logo {
      width: 100px;
    }
    .navbar-left ul,
    .navbar-right ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      align-items: center;
      height: 60px;
    }
    .navbar-left {
      display: flex;
    }
    .navbar-left ul {
      margin-left: 12px;
    }
    .navbar-left ul li a,
    .navbar-right ul li a {
      text-decoration: none;
      color: var(--very-light-pink);
      border: 1px solid var(--white);
      padding: 8px;
      border-radius: 8px;
    }
    .navbar-left ul li a:hover,
    .navbar-right ul li a:hover {
      border: 1px solid var(--hospital-green);
      color: var(--hospital-green);
    }
    .navbar-email {
      color: var(--very-light-pink);
      font-size: var(--sm);
      margin-right: 12px;
    }
    .navbar-shopping-cart {
      position: relative;
    }
    .navbar-shopping-cart div {
      width: 16px;
      height: 16px;
      background-color: var(--hospital-green);
      border-radius: 50%;
      font-size: var(--sm);
      font-weight: bold;
      position: absolute;
      top: -6px;
      right: -3px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    @media (max-width: 640px) {
      .menu {
        display: block;
      }
      .navbar-left ul {
        display: none;
      }
      .navbar-email {
        display: none;
      }
    }
  </style>
</head>
<body>
  <nav>
    <img src="./icons/icon_menu.svg" alt="menu" class="menu">

    <div class="navbar-left">
      <img src="./logos/logo_yard_sale.svg" alt="logo" class="logo">

      <ul>
        <li>
          <a href="/">All</a>
        </li>
        <li>
          <a href="/">Clothes</a>
        </li>
        <li>
          <a href="/">Electronics</a>
        </li>
        <li>
          <a href="/">Furnitures</a>
        </li>
        <li>
          <a href="/">Toys</a>
        </li>
        <li>
          <a href="/">Others</a>
        </li>
      </ul>
    </div>

    <div class="navbar-right">
      <ul>
        <li class="navbar-email">platzi@example.com</li>
        <li class="navbar-shopping-cart">
          <img src="./icons/icon_shopping_cart.svg" alt="shopping cart">
          <div>2</div>
        </li>
      </ul>
    </div>
  </nav>
</body>
</html>

```

1) 
Lo primero que vamos a modificar es el <title> y le vamos a colocar este nombre.

<title>YardSale: tienda online de cositas chidas</title>

2)
Lo segundo que vamos hacer, es que todo el codigo Css, que tenemos en los demas modulos, vamos a pegarlo en el archivo (fusion.css).


```js

    :root {
      --white: #FFFFFF;
      --black: #000000;
      --very-light-pink: #C7C7C7;
      --text-input-field: #F7F7F7;
      --hospital-green: #ACD9B2;
      --sm: 14px;
      --md: 16px;
      --lg: 18px;
    }
    body {
      margin: 0;
      font-family: 'Quicksand', sans-serif;
    }
    nav {
      display: flex;
      justify-content: space-between;
      padding: 0 24px;
      border-bottom: 1px solid var(--very-light-pink);
    }
    .menu {
      display: none;
    }
    .logo {
      width: 100px;
    }
    .navbar-left ul,
    .navbar-right ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      align-items: center;
      height: 60px;
    }
    .navbar-left {
      display: flex;
    }
    .navbar-left ul {
      margin-left: 12px;
    }
    .navbar-left ul li a,
    .navbar-right ul li a {
      text-decoration: none;
      color: var(--very-light-pink);
      border: 1px solid var(--white);
      padding: 8px;
      border-radius: 8px;
    }
    .navbar-left ul li a:hover,
    .navbar-right ul li a:hover {
      border: 1px solid var(--hospital-green);
      color: var(--hospital-green);
    }
    .navbar-email {
      color: var(--very-light-pink);
      font-size: var(--sm);
      margin-right: 12px;
    }
    .navbar-shopping-cart {
      position: relative;
    }
    .navbar-shopping-cart div {
      width: 16px;
      height: 16px;
      background-color: var(--hospital-green);
      border-radius: 50%;
      font-size: var(--sm);
      font-weight: bold;
      position: absolute;
      top: -6px;
      right: -3px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    @media (max-width: 640px) {
      .menu {
        display: block;
      }
      .navbar-left ul {
        display: none;
      }
      .navbar-email {
        display: none;
      }
    }

```

3)
Lo siguiente que vamos hacer es, que tomaremos el archivo de la clase 7, y veremos la diferencia s que tenemos en el index.html, y tomaremos lo que necesitamos y lo pegaremos en nuestro archivo donde estamos fucionando todo el codigo, en este caso en la parte de <heade> tenemos unos cuantos <link> donde estamos utlizando las fuentes.

```js

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500;700&display=swap" rel="stylesheet">

``` 

4)
Aqui lo que vamos a copiar es esta parte del html

```js

<div class="desktop-menu">
      <ul>
        <li>
          <a href="/" class="title">My orders</a>
        </li>
  
        <li>
          <a href="/">My account</a>
        </li>
  
        <li>
          <a href="/">Sign out</a>
        </li>
      </ul>
    </div>


```



5)
Ahora tenemos que pasar de la clase 7 la parte de dektop, que es la parte del menu pero en responsive a la parte de (fusion.html).

```js

.desktop-menu {
      width: 100px;
      height: auto;
      border: 1px solid var(--very-light-pink);
      border-radius: 6px;
      padding: 20px 20px 0 20px;
    }
    .desktop-menu ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .desktop-menu ul li {
      text-align: end;
    }
    .desktop-menu ul li:nth-child(1),
    .desktop-menu ul li:nth-child(2) {
      font-weight: bold;
    }
    .desktop-menu ul li:last-child {
      padding-top: 20px;
      border-top: 1px solid var(--very-light-pink);
    }
    .desktop-menu ul li:last-child a {
      color: var(--hospital-green);
      font-size: var(--sm);
    }
    .desktop-menu ul li a {
      color: var(--back);
      text-decoration: none;
      margin-bottom: 20px;
      display: inline-block;
    }

    ```

Pero lo que estamos viendo es que aun que se an aplicado todos los cambios, vemos que el desktop, esta interfiriendo en el resto del codigo, por que se supone que esto deberia apareser cuando le clikeamos a la parte del correo.

Como podriamos arreglar esta parte?

Esta parte la podemos arreglar de la manera siguiente y es que el codigo del desktop esta dentro de cointenedor <nav>, pues la solucion es sacarlo de esta etiqueta y dejarlo abajo de ella, asi.

```js

<body>
  <nav>
    <img src="./icons/icon_menu.svg" alt="menu" class="menu">

    <div class="navbar-left">
      <img src="./logos/logo_yard_sale.svg" alt="logo" class="logo">

      <ul>
        <li>
          <a href="/">All</a>
        </li>
        <li>
          <a href="/">Clothes</a>
        </li>
        <li>
          <a href="/">Electronics</a>
        </li>
        <li>
          <a href="/">Furnitures</a>
        </li>
        <li>
          <a href="/">Toys</a>
        </li>
        <li>
          <a href="/">Others</a>
        </li>
      </ul>
    </div>

    <div class="navbar-right">
      <ul>
        <li class="navbar-email">platzi@example.com</li>
        <li class="navbar-shopping-cart">
          <img src="./icons/icon_shopping_cart.svg" alt="shopping cart">
          <div>2</div>
        </li>
      </ul>
    </div>
  </nav>

  <div class="desktop-menu">
    <ul>
      <li>
        <a href="/" class="title">My orders</a>
      </li>

      <li>
        <a href="/">My account</a>
      </li>

      <li>
        <a href="/">Sign out</a>
      </li>
    </ul>
  </div>


</body>

```

Pero que pasa que aun que de esta manera nos facilita el problema, no es lo que vamos a aplicar, por que?, por que esto es parte del menu, y no es la idea, por lo pronto lo vamos a devolver a su citio. 


```js 

<body>
  <nav>
    <img src="./icons/icon_menu.svg" alt="menu" class="menu">

    <div class="navbar-left">
      <img src="./logos/logo_yard_sale.svg" alt="logo" class="logo">

      <ul>
        <li>
          <a href="/">All</a>
        </li>
        <li>
          <a href="/">Clothes</a>
        </li>
        <li>
          <a href="/">Electronics</a>
        </li>
        <li>
          <a href="/">Furnitures</a>
        </li>
        <li>
          <a href="/">Toys</a>
        </li>
        <li>
          <a href="/">Others</a>
        </li>
      </ul>
    </div>

    <div class="navbar-right">
      <ul>
        <li class="navbar-email">platzi@example.com</li>
        <li class="navbar-shopping-cart">
          <img src="./icons/icon_shopping_cart.svg" alt="shopping cart">
          <div>2</div>
        </li>
      </ul>
    </div>

    <div class="desktop-menu">
      <ul>
        <li>
          <a href="/" class="title">My orders</a>
        </li>
  
        <li>
          <a href="/">My account</a>
        </li>
  
        <li>
          <a href="/">Sign out</a>
        </li>
      </ul>
    </div>
  </nav>

</body>

```

Para solucionar este problema es que vamos a ir al Css y vamos a utilizar un (position: absolute) en el (.desktop-menu), de esta manera y en esta parte. 

```js

.desktop-menu {
      position: absolute;
      width: 100px;
      height: auto;
      border: 1px solid var(--very-light-pink);
      border-radius: 6px;
      padding: 20px 20px 0 20px;
    }


```

Si hacemos esto y recargamos, vemos que aun que aun no se ve bien este menu, ya lo vemos por detras del menu principal, pero vamos a sxeguir solucionando con Css, debajo de es position, vamos a ponerele un backgroun: var(--white);, de esta manera vemos que nuestyro menu se ve de otra manera, vamos a probarlo.


```js

.desktop-menu {
      position: absolute;
      background: var(--white);
      width: 100px;
      height: auto;
      border: 1px solid var(--very-light-pink);
      border-radius: 6px;
      padding: 20px 20px 0 20px;
    }


```

Se ve bien pero nos falta posicionarlo y que deje ver al menu principal, por que no lo esta dejando ver, en tonces lo que vamos hacer es utlizar ya que le hemos puesto un position: absoluto: podemos utilizar las propiedades de (top, left, right, y buttom), en este caso vamos a utlizar (top: 60px) y (right: 0). de esta manera.


```js

.desktop-menu {
      position: absolute;
      background: var(--white);
      top: 60px:
      right: 0;
      width: 100px;
      height: auto;
      border: 1px solid var(--very-light-pink);
      border-radius: 6px;
      padding: 20px 20px 0 20px;
    }


```

En tonces si hacemos esto veremos como ese contenedor se va a  desplazar hacia la derecha, 









