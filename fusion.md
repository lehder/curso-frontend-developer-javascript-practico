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

Por que no ponerle un (top:0:)?
Por que si vemos se nos a pegado bien en la parte de arriba sin ningun espacio, lo que vamos hacer es inspeccionar y ver cuanto mide la (navbar) y asi poderle dar el (top) necesario para que quede debajo de esta (navbar), en tonces vemos que la (navbar) tiene 61px, y algo mas interesante, tiene un (border-bottom: 1px;), es decir que el ancho esta incluyendo ese pixel extra, por eso tiene 61px, en tonces en realidad esta midiendo 60px, por esta razon le vamos a poner a es (top) un (top: 60px;), y vamos a darle un (right: 60px) tambien.




```js

.desktop-menu {
      position: absolute;
      background: var(--white);
      top: 60px:
      right: 60;
      width: 100px;
      height: auto;
      border: 1px solid var(--very-light-pink);
      border-radius: 6px;
      padding: 20px 20px 0 20px;
    }


```

En tonces si hacemos esto veremos como ese contenedor se va a  desplazar hacia la derecha, aun visible por que aun no le hemos inplementado JS, pero esto sera lo que vamos hacer en la siguiente seccion.

Ahora, como hacemos para que este submenu, aparesca y desaparesca?
Cada vez que le damos click al correo electronico, queremos que aparesca este desktop, para esto, lo que podemos hacer es utlizar una classe que se llama (inactive) o una classe (active), pero en este caso vamos hacer uso del (inactive), y esta classe lo unico que hace es ponerle (dissplay: none;) para que no aparesca, en tonces lo que vamos hacer es a la clase 

<div class="desktop-menu">

le vamos a poner una subclasse inative, de esta manera.

<div class="desktop-menu inactive">

esto en el html, y en el css justo deabjo del body, vamos a utlizar esta classe, de esta manera.

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

    .inactive {
      display: none;
    }

```   

Si rrecargamos veremos como desaparece nuestro menu, gracias a esta classe y a este display, ahora bien, lo que podemos hacer es que este menu aparesca o desaparesca, utilizando JS, y como podemos hacer esto?

Lo que vamos hacer es que vamos a seleccionar este elemento del html

 <li class="navbar-email">platzi@example.com</li>


En tonces nos vamos a ir a nuestro archivo JS, y vamos a trabajar en esto.

Vamos a crear una variable donde vamos a llamar nuetro elemento html y le vamos a llamar (menuEmail) y vamos a llamar al (document.querySelector(); ) o podemos utlizar el metodo que nosotros queramos, y con esta vamos a seleccionar la classe que queremos seleccionar, ene este caso sera ('.navbar-email'), de esta manera estaremos seleccionando el elemnto al que queremos dar click, lo siguiente que debemos hacer es llamar el metodo (addEventListener) para ejecutar algo cuando le demos click, y lo que quqeremos hacer cuando le demos click a ese elemento, y lo que queremos que pase es que aparesca nuestro menu, cuando le damos click al correo, menuEmail.addEventListener('click'), y para que aparesca nuestro menu vamos a utlizar la funcion (show), en este caso (showDesktopMenu), para que aparesca, pero como lo que queremos no es solo que aparesca, si no tambien que desaparesca, en tonces utlizaremos la funcion (toggle)que significa (intercambiar en ingles), en este caso (toggleDesktopMenu) 

```js

menuEmail.addEventListener('click', toggleDesktopMenu);

```

y para que esto funcione debemos de crear la funcion, por que si corremos este codigo asi talcual, nunca va a funcionar, debemos de crear la funcion con el nombre que ya le hemos asignado (toggleDesktopMenu) y aqui es don de vamos a hacer que aparesca y desaparesca la classe (inactive) de nuestra classe (desktop-menu) aparesca o desaparesca, para ahora si, ejecutar el codigo que queremos, esta sera la funcion.

```js

funtion toggleDesktopMenu() {

}

```


Ahora bien debemos de seleccionar a este elemento que tenga la classe (desktop-menu), para poder colocarle o quitarle classes, en tonces vamos a seleccionarala.

```js

const dsektopMenu = document.querySelector('.desktopMenu');

```

cone esto le desimos que seleccione a cualquier elemento que tenga la clase (.desktopMenu) por eso le hemos puesto un punto adelante, para saber que esta es la clase.

De esta manera va a ir nuestro codigo asta el momento.



```js

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktopMenu');

menuEmail.addEventListener('click', toggleDesktopMenu);

funtion toggleDesktopMenu() {

}

```

Ahora lo que debemos hacer es que tenemos que decirle a la function que es lo que debe hacer, dependiendo de lo que queremos, y lo qye debemos hacer es llamar a 

```js

desktopMenu.classList.toggle();

```

Y aqui le decimos que ponga o quite la classe (inactive)


```js

desktopMenu.classList.toggle('inactive');

```

Recapitulemos, le estamos poniendo por defecto la classe (inactive) a nuestro (desktopMenu), y luego lo que estamos haciendo es que cada ves que le den click a este elemento del email en el menu, vamos a ejecutar esta functio.


```js

funtion toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');

}

```

Y esta function lo que hace es ejecutar la function desktopMenu.classList.toggle, que quita o pone la classe (inactive) dependiendo de si ya la tiene o no la tiene. 

Asta el momento nuestro codigo esta de esta manera.



```js

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktopMenu');

menuEmail.addEventListener('click', toggleDesktopMenu);

funtion toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');

}

```


Si vamos al navegador y probamos si funciona, nos daremos cuenta de que no funciona, por que?
Habramos el inspector de elementos, vemos que no aparece ningun error, pero tampoco aparese nuestro desktopMenu, volvamos al codigo y veamos que fue lo que paso, nuestro querySelector esta aparentemente bien, pero para confirmarlo, vamos hacer un console, y le vamos a poner (Click) para ver almenos si estamos recibiendo el evento de Click.

```js
console.log('Click')

```

Entonces 

```js

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktopMenu');

menuEmail.addEventListener('click', toggleDesktopMenu);

funtion toggleDesktopMenu() {
  console.log('Click');
  desktopMenu.classList.toggle('inactive');

}

```

Pero tampoco vemos ese console.log en el inspector, que rraro, que estara pasando?. 

Vamos hacer un console.log para ver si el archivo de JS esta funcionando, para esto aremos un console.log al final del codigo JS.


```js

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktopMenu');

menuEmail.addEventListener('click', toggleDesktopMenu);

funtion toggleDesktopMenu() {
  console.log('Click');
  desktopMenu.classList.toggle('inactive');

}

console.log('JS funcionando');


```

Si vamos a la consola, nos daremos cuenta de que no funciona, pero por que sera?

Es muy facil la respuesta, y es que nosotros no hemos mandar llamar nueetro codigo JS en nuestro codigo HTML, y esto es lo que debemos hacer, vamos a mandar llamar nuestro script en HTML.


```JS

<script src="./fusion.js"></script>


```

Ahora si vemos en la consola como se refleja nuestro archivo JS funcionando. 

Y para terminar con esta clase, debemos de ponerle a este navbar un cursor pointer, para que cuando pongamos el mause por encima del correo, se combierta en una manito y el ususario pueda darle un click, y esto de esta manera.

```js

.navbar-email:hover {
      color: var(--hospital-green);
      cursor: pointer;
      font-size: var(--sm);
      margin-right: 12px;
    }

```

Y conesto hemos terminado la clase numero 19 del curso.

-------------------------------------------------------


Clase 20 del curso


ya hicimos la primera parte de la fusion de nuestro menu, pero nos falta revisar la parte mobile, y saber si nuestro menu sigue siendo responsive, y que componenetes debemos agragar por hay.

Si tomamaos el codigo tal cual lo hemos dejado, nos daremos cuenta de que nuestro menu hambuerguesa no nos muestra nada, aunque si es responsive, cuando lo angostamos la pantalla, no se muestra el resto de menu que necesitamos ver en la parte mobile.

Pero si vamos a la clase nuemero 8, veremos que tenemos esa inplemenetacion, que debemos hacer?
Agarrar el codigo de esta clase numero 8 y fusionarlo con ele codigo que nosotros ya tenemos.

Vamos al lio, para saber que es lo que debemos hacer.

En primera instancia vamos a chequear el codigo y lo que debamos trasladar a nuestro codigo lo aremos, nos vamos a traer esta parte del codigo, y lo vamos a poner justo debajo del 

<div classe="descktop-menu inactive"><div>

y esto estara dentro de la etiqueta de <nav> de esta manera.


```js

<div class="mobile-menu">
    <ul>
      <li>
        <a href="/">CATEGORIES</a>
      </li>
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
        <a href="/">Other</a>
      </li>
    </ul>

    <ul>
      <li>
        <a href="/">My orders</a>
      </li>
      <li>
        <a href="/">My account</a>
      </li>
    </ul>

    <ul>
      <li>
        <a href="/" class="email">platzi@example.com</a>
      </li>
      <li>
        <a href="/" class="sign-out">Sign out</a>
      </li>
    </ul>
  </div>
  </nav>

```


Luego vamos a poner el Css para que si se rompe algo, no se vea tan mal.

```js


.mobile-menu {
      padding: 24px;
    }
    .mobile-menu a {
      text-decoration: none;
      color: var(--black);
      font-weight: bold;
      /* margin-bottom: 24px; */
    }
    .mobile-menu ul {
      padding: 0;
      margin: 24px 0 0;
      list-style: none;
    }
    .mobile-menu ul:nth-child(1) {
      border-bottom: 1px solid var(--very-light-pink);
    }
    .mobile-menu ul li {
      margin-bottom: 24px;
    }
    .email {
      font-size: var(--sm);
      font-weight: 300 !important;
    }
    .sign-out {
      font-size: var(--sm);
      color: var(--hospital-green) !important;
    }


```


Este lo vamos a poner justo antes de que comienzan los mediaqueries, si recargamos veremos que no se ve de la mejor manera, por que debemos de darle algunos stylos mas y ponerlo en la posicion que deberdad queremos, y vamos hacer lo que hicimos en la parte anterior.

Vamos a ponerle un (position: absolute; y un top: 60px;), que fue lo que le dimos a la parte anterior del menu.


OK una ves visto esto, como podemos hacer para que cuando el usuario le de click al menu hamburguesa, aparesca o desaparesca. el resto del menu, en su forma mobile?.

Puesapartir de aqui lo que vamos hacer es comenzar a trabajar con JavaScript par que esto se haga realidad.

Lo primero que debemos crear en JS, es un selector, recordemos que asta este momento tenemos nuestro codigo JS de esta manera.


```js

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    console.log('Click')
  desktopMenu.classList.toggle('inactive');

}

console.log('JS funcionando');

```

En tonces crearemos nuestro selector para el Mobile Menu, para hacer que aparesca o desaparesca con la misma clase (inactive), y en este caso le vamos a poner el nombre de la variable, y este sera (mobileMenu) y de esta maisma manera para mandarla a llamar sera de la misma manera pero con el punto delante, recoordemoslo.

```js

const mobileMenu = document.querySelector('.mobile-menu');

```

Pero tambien necesitamos un selector para ese menu hamburguesa, en tonces como vamos a llamar a nuestro menu Hamburguesa, recordemos que tenemos una imagen con el icono, y esta se llama (icon_menu.svg), y tiene la classe "menu", pero en este caso nosotros vamos a llamarle a nuestra variable (menuHamIcon).

```js

const menuHamIcon = document.querySelector('.desktop-menu');

```

Tambien debemos crear una nueva llamada para el evento, y en este caso sera 

```js

menuHamIcon.addEventListener('click', toggleMobileMenu);

```

Y debemos crear la function con el mismo nombre como la hemos llamado (toggleMobileMenu), vamos a quitar los consol.log que tenemos, por que ya no los necesitamos, y dentro de esta nueva function vamos a hacer lo mismo que hicimos con el desktopMenu. 


```js

function toggleMobileMenu() {
   mobileMenu.classList.toggle('inactive');
}


```


```js

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');

}

function toggleMobileMenu() {
  mobileMenu.classList.toggle('inactive');
}


```

De esta manera vemos como nuestro menu hamburguesa aparece y desaparece cuando clickeamos al Icono del menu hamburguesa, pero ahora lo que debemos hacer es trabajar en los mediaqueries, por que tambien esta viendose en desktop, y lo que necesitamos es que cuando cuando estemos en desktop, no se vea el menu hamburguesa, trabajemos en esto,

En los estilos ya tenemos un mediaquerie lla inplementado para que se ejecute cuando estamos a (max-width: 640px) maximo de 0 asta 640px, en tonces que necesitamos para cuando estemos en chiquito?.
Esconder este desktop menu que nos estorba, para esto lo que vamos hacer es que al mediaquerie que ya tenemos le vamos a decir que necesitamos poner en .desktop-menu, un display: none;


```js

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
      .desktop-menu {
        display: none;
      }
    }


```

Y como vemos, si en desktop, sacamos el desktop-menu y angostamos a manera mobile, desaparecera el menu gracias a este mediaqueries, ahora hagamos lo mismo para mobile, necesitamos que cuando estemos en mobile pueda aparecer y desaparecer, pero que cuando vamos al deskto-menu, automaticamnete  desaparesca, para esto lo que vamos hacer es crear otro mediaqueries como el que ya tenemos, pero en ves que tenga (max-width) que tenga (min-width), pero en este caso vamos a ponerle en ves de 640px, le pondremos 641px, esto pra evitar conflictos. 


```js

@media (min-width: 641px) 


```

Ahora bien que mas debemos hacer? 
Tenemos que quitar este mobile-menu, y para esto vamos a aplicar el mismo metodo, aplicaremos un (display: none;).


```js
@media (min-width: 641px) {
      .mobile-menu {
        display: block;
      }
      
    }



```

Con esto, hemos terminado esta clase numero 20 del curso.



-----------------------------------------------------------------------------------------------------

Clase numero 21, trabajaremos con Carrito de Compras


Ya tenemos el menu listo, pero tenemos un elemento aun sin funcionar, y es nuestro carrito de compras, debemos hacer que cuando estemos en desktop aparesca conel asai del carrito de compras, y cuando estemos en mobile es carrito ocupe todo el espacio posible.

Lo que debemos hacer es que este componente funcione y se integre de la mejor manera con el resto de componentes, para esto vamos a ir a la clase numero 13, y tomaremos el codigo que necesitemos y lo traeremos a nuestro codigo para integrarlo con el resto.


```js

<aside class="product-detail">
    <div class="title-container">
      <img src="./icons/flechita.svg" alt="arrow">
      <p class="title">My order</p>
    </div>

    <div class="my-order-content">
      <div class="shopping-cart">
        <figure>
          <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
        </figure>
        <p>Bike</p>
        <p>$30,00</p>
        <img src="./icons/icon_close.png" alt="close">
      </div>

      <div class="shopping-cart">
        <figure>
          <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
        </figure>
        <p>Bike</p>
        <p>$30,00</p>
        <img src="./icons/icon_close.png" alt="close">
      </div>

      <div class="shopping-cart">
        <figure>
          <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
        </figure>
        <p>Bike</p>
        <p>$30,00</p>
        <img src="./icons/icon_close.png" alt="close">
      </div>

      <div class="order">
        <p>
          <span>Total</span>
        </p>
        <p>$560.00</p>
      </div>

      <button class="primary-button">
        Checkout
      </button>
    </div>
  </div>
  </aside>

```

Tengamos en cuenta que esta seria un <aside> y no lo vamos a meter dentro del menu osea dentro del <nav>, esto lo dejaremos fuera, si recargamos y vamos al navegador, pues vamos a ver un codigo roto por que no le hemos puesto el css correspondiente, por lo tanto traigamonos el css.

```js

.product-detail {
      width: 360px;
      padding: 24px;
      box-sizing: border-box;
      position: absolute;
      right: 0;
    }
    .title-container {
      display: flex;
    }
    .title-container img {
      transform: rotate(180deg);
      margin-right: 14px;
    }
    .title {
      font-size: var(--lg);
      font-weight: bold;
    }
    .order {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 16px;
      align-items: center;
      background-color: var(--text-input-field);
      margin-bottom: 24px;
      border-radius: 8px;
      padding: 0 24px;
    }
    .order p:nth-child(1) {
      display: flex;
      flex-direction: column;
    }
    .order p span:nth-child(1) {
      font-size: var(--md);
      font-weight: bold;
    }
    .order p:nth-child(2) {
      text-align: end;
      font-weight: bold;
    }
    .shopping-cart {
      display: grid;
      grid-template-columns: auto 1fr auto auto;
      gap: 16px;
      margin-bottom: 24px;
      align-items: center;
    }
    .shopping-cart figure {
      margin: 0;
    }
    .shopping-cart figure img {
      width: 70px;
      height: 70px;
      border-radius: 20px;
      object-fit: cover;
    }
    .shopping-cart p:nth-child(2) {
      color: var(--very-light-pink);
    }
    .shopping-cart p:nth-child(3) {
      font-size: var(--md);
      font-weight: bold;
    }
    .primary-button {
      background-color: var(--hospital-green);
      border-radius: 8px;
      border: none;
      color: var(--white);
      width: 100%;
      cursor: pointer;
      font-size: var(--md);
      font-weight: bold;
      height: 50px;
    }

```

Y recordemos que tambien tenemos un mediaqueries para este componente, pero nosotros lo vamos a integrar con los que ya tenemos.

```js

@media (max-width: 640px) {
      .product-detail {
        width: 100%;
      }
    }

```

Solo tomaremos esta parte.

```js 

.product-detail {
        width: 100%;
      }


```



Y la integraremos con los mediaqueries que ya tenemos para solo utlizar un solo mediaqueries, en este caso aqui.

```js

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
      .desktop-menu {
        display: none;
      }
      .product-detail {
        width: 100%;
      }
    }



```    

Si recargamos veremos que ya tenemos estos estilos aplicados y todo se ve de buena manera, incluso si vemos la parte mobile, se adapta todo vastante bien.

Tenemos algunos detalles de stilo que debemos mejorar, como por ejemplo que el <aside> esta muy abajo y queremos subirlo un poco, para esto vamos air a la consola y vamos a inspeccionar que estilos tiene aplicados y si los podemos modificar.

Lo primero es que tenemos este codigo.


```js

.product-detail {
      width: 360px;
      padding: 24px;
      box-sizing: border-box;
      position: absolute;
      right: 0;
    }

``` 

y le vamos a modificar el (padding: 24px), y le vamos a decir que conserve estos 24px a los lados, pero arriba y abajo lo vamos a dejar en cero (padding: 0 24px) asi.

```js

.product-detail {
      width: 360px;
      padding: 0 24px;
      box-sizing: border-box;
      position: absolute;
      right: 0;
    }

```

Ahora debemos hacer que este <aside> aparesca o desaparesca, dependiendo de lo que necesitamos.

Lo que debemos hacer es que de la misma manera que en el JS creamos una variable para el menu-hamburguesa, debemos crear una nueva para el <aside>, y en este caso le vamos a llamar a esa functio (menuCarritoIcon).

```js

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');

```

Y por que hemos tomado este nombre de clase?, en realidad tenemos un <li> y ete contiene la imagen del carrito de compras, y para que sea interactivo lo que vamos a tomar es el padre que en este caso es el <li> y por eso tomaremos su clase para el carrito de compras

```js

<li classe="navbar-shopping-cart">

```

esto es lo que vamos a seleccionar en nuestro querySelector, 


Ahora como siguien instancia vamos a tomar el (product-detail) y vamos a crear una nueva variable.

```js
<aside class="product-detail">

```

Vamos al JS  y creamos de esta manera.

```js

const aside = document.querySelector('.product-detail');

```

Que sigue?, lo mismo que hemos esta haciendo en la clases anteriores, vamos mandar a llamar esta variable, osea que el codigo JS que tenemos estaria de esta manera.

```js

const menuEmail = document.querySelector('.navbar-email'); 
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
   desktopMenu.classList.toggle('inactive');

}

function toggleMobileMenu() {
  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
  aside.classList.toggle('inactive');
}



```

Fijemonos en una cosa, si estamos en mobile y habrimos el menu-mobile, se rompe todo, primero que todo para diferenciar un poco una cosa de la otra, vamos a ponerle un background-color: var(--white); esto en nuestro .product-detail
Y de la misma manera se lo vamos a poner a nuestro (mobile-menu).

Si de modo mobile habrimos el carrito y tambien abrimos el menu, al menos ya no se solapan, pero deberiamos quitar este carrito de compras si esta abierto y tratamos de abrir el menu mobile, esto podriamos solucionarlo de varias formas, pero en este caso lo que vamos hacer es cerrarlo, y para esto lo vamos hacer con JS.

Aqui en la function toggleCarritoAside tenemos que hacer un condicional, vamos a pregunatar si nuestro if (mobileMenu.classList.contains('inactive') tiene la clase (inactive), si si la tiene, pues no tenemos que hacer nada.
osea, si tratamos de abrir el carrito de compras, pero el mobile-menu esta cerrado, pues no pasa nada, podemos abrir nuestro carrito sin problemas, y vamos a hacerlo de una manera muy descriptiva.

anterior mente habiamos hablado un poco hacerca de este metodo (contains).

Esto significa que mobile esta abierto.

```js

if (mobileMenu.classList.contains('inactive'));

```

en tonces para que nos quede un poco mas claro, vamos a guardar esto en una variable para si esta abierto el carrito, y aremos otra si esta cerrado, para ser mas descriptivo le pondremos la palabra (is) delante para preguntarle (si la variable mobile esta abierta), esta abierto nuestro menuMobile? estamos preguntando, de la misma manera estamos preguntando si tiene la clase (inactive).

de hecho y pensandolo un poco mejor esto ('inactive')  no funciona del todo, por que le estamos preguntando si tiene la clase ('inactive'), si, si la tiene, es decir si esto (isMobileMenuOpen) es true, nuestro menu esta cerrado, osea, si si tiene la clase ('inactive'), esta cerardo.

En tonces para saber si esta abierto, deberiamos negar esta condicion de aca (  !mobileMenu.classList.contains('inactive');)

Es decir, si mi mobileMenu esta Open, es por que no tenemos la clase ('inactive')


```js
const isMobileMenuOpen = mobileMenu.classList.contains('inactive');

const isAsideOpen = aside.classList.contains('inactive');

```

Tambien lo podriamos ahcer a la inversa cambiando el nombre de nuestras variables, no preguntar si esta abierto, si no preguntar si esta cerrado, de esta manera.

```js

const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

const isAsideClosed = aside.classList.contains('inactive');

```

Ahora ya tenemos estas dos variables para hacer las condicionales que necesito, ya no vamos hyacer simplemente un (toggle), ahora tenemos que hacer una carroseria de condicionales para saber si este esta abierto, en tonces cerrar el otro, en fin.

en tonces vamos a preguntar si esta cerrado y mandamos llamar esta condicion (toggleCarritoAside()) en tonces deberiamos abrirlo.

Y si no esta cerrado, significa que esta abierto, en tonces si esta abierto, tenemos que cerrarlo, esta es la parte mas facil, cerrarlo es como sinplemente como agarrar esta clase 

aside.classList.add('inactive');

No ponerle que sea (toggle), si no ponerle (add) que significa como aderirle o ponerle, y esto diria si esta abierto solo cerrarlo, no es mas.

Pero si, si esta cerrado, en tonces tenemos que abrirlo, y aqui entra otro condicional, 
si nuestro mobileMenu, no tiene la clase (inactive), es decir si no esta cerrado, vamos a tener vastantes problemas. 





```js
function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isAsideClosed = aside.classList.contains('inactive');

  //aside.classList.toggle('inactive');

  if (isSideClosed) {
    //abrir el aside
  } else {
     aside.classList.add('inactive');
  }
}

```

Tenemos que abrir el aside, pero no solo tenemos que hacer esto y ya, tambien debemos que preguntar, si el mobileMenu esta Open, hay que cerrarlo, en tonces hagamos este condicional tambien.

Vamos a preguntar si (isMobileMenuClosed) si, si esta cerrado, pues no tenemos que hacer nada, pero si esta abierto , (!isMobileMenuClosed) en tonces vamos a cerrarlo,  pero realmente en ves de hacer toda esta RUTA TEDIOSA, podriamos hacerlo de una manera mucho mas rapida. 

Cada vez que querramos abrir el carrito toggleCarritoAside(), si le damos click, vamos a cerrar el menu mobile, y ya dependiendo de si estaba abierto o cerrardo, este menu le añadimos o le quitamos la classe (inactive) a nuetro carrito.

```js

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isAsideClosed = aside.classList.contains('inactive');

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  }

  aside.classList.toggle('inactive');

}

```

Si vamos al navegador y recargamos, veremos que ahora si se esta cumpliendo que cuando vamos a abrir el carrito, el menu mobile se cierra punto.

Pero si queremos hacer lo contrario, que es, si tenemos abierto el carrito y queremos abrir el menu mobile?

Debemos hacer la misma logica pero a la inversa en la function del (toggle) de nuestro mobileMenu, pero ya no vamos a preguntar si nuestro menu estaba cerrado, vamos a preguntar si mi carrito, mi aside esta cerrado,  

```js

function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains('inactive');

  if (!isAsideClosed) {
    aside.classList.add('inactive');
  }

  mobileMenu.classList.toggle('inactive');
}


```

OK, asta aqui todo esta funcionando de maravilla, por que en la parte Mobile pudimos integrar tanto el Aside como el Carrito, cuando se abre uno se cierra el otro, y viseversa.

Ahora bien tenemos que integrar esta misma funcionalidad, en la parte del Desktop, si vemos el Menu-Desktop lo tenemos por debajo del carrito de compras, misma logica.

Vamos a preguntar primero en el (toggleDestockMenu) que si cuando le damos a este boton donde vemos el correo electronico si esta abierto nuestro aside, y si si esta abierto, le vamos a poner la clase (inactive).

```js

function toggleDesktopMenu() {
  const isAsideClosed = aside.classList.contains('inactive');

  if (!isAsideClosed) {
    aside.classList.add('inactive');
  }

   desktopMenu.classList.toggle('inactive');

}

```

Y super si vamos al navegador veremos que esta funcionando correctamente, si utlizamos el uno, se cierra el otro y de forma viseversa, ahora vamos hacer lo contario.

Si provamos veremos que pareciera que no pasa nada, pero vemos que hay sigue nuestro Desktop menu, esto podriamos dejarlo asi, tambien cerrar nuestro Desktop-menu, esto lo dejaremos a consideracion.

y de esta manera hemos terminado con la clase numero 21 del curso.

--------------------------------------------------------


CLASE NUMERO 21 DEL CURSO
LISTA DE PRODUCTOS: HTML A PARTIR DE ARRAYS.

Ya tenemos nuestro menu listo con todas sus variaciones, el menu en Mobile, en Desktop, y el carrito de compras funcionando.

Y ahora lo que vamos agregar, es la lista de productos, a lo que final van a llegar los ususarios a buscar, para poder hacer su compra, es una tienda online, en tonces vamos hacer que aparesta la lista de productos.

Vamos a ver como con un solo componente, un solo producto, podemos hacer que se replique las veces que hagan falta, para que tengamos la lista completa, sin tanto JS y tanto HTML jarcodiado, para ver que funciona con varios productos.

En este caso vamos a trabajar con la clase numero 6 donde tenemos la lista de productos, en esta lista vemos como uno de sus estilos es utlizar css-grid, esto para hacerlo lo mas responsive posible, para sosportar las diferentes pantallas que habitualmente utlizamos.

Ahora bien, lo que debemos hacer es meter todo esto en nuetro HTML, para poder trabajar, tanto el HTML  como el CSS, y etse es el codigo que tenemos asta el momento.

HTML

```js

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./fusion.css">
  <title>YardSale: tienda online de cositas chidas</title>
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

    <div class="desktop-menu inactive">
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

    <div class="mobile-menu inactive">
      <ul>
        <li>
          <a href="/">CATEGORIES</a>
        </li>
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
          <a href="/">Other</a>
        </li>
      </ul>
  
      <ul>
        <li>
          <a href="/">My orders</a>
        </li>
        <li>
          <a href="/">My account</a>
        </li>
      </ul>
  
      <ul>
        <li>
          <a href="/" class="email">platzi@example.com</a>
        </li>
        <li>
          <a href="/" class="sign-out">Sign out</a>
        </li>
      </ul>
    </div>
  </nav>

  

  <aside class="product-detail inactive">
    <div class="title-container">
      <img src="./icons/flechita.svg" alt="arrow">
      <p class="title">My order</p>
    </div>

    <div class="my-order-content">
      <div class="shopping-cart">
        <figure>
          <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
        </figure>
        <p>Bike</p>
        <p>$30,00</p>
        <img src="./icons/icon_close.png" alt="close">
      </div>

      <div class="shopping-cart">
        <figure>
          <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
        </figure>
        <p>Bike</p>
        <p>$30,00</p>
        <img src="./icons/icon_close.png" alt="close">
      </div>

      <div class="shopping-cart">
        <figure>
          <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
        </figure>
        <p>Bike</p>
        <p>$30,00</p>
        <img src="./icons/icon_close.png" alt="close">
      </div>

      <div class="order">
        <p>
          <span>Total</span>
        </p>
        <p>$560.00</p>
      </div>

      <button class="primary-button">
        Checkout
      </button>
    </div>
  </div>
  </aside>

  <!-- Lista de productos -->

  <section class="main-container">
    <div class="cards-container">

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
    </div>
  </section>

  <script src="./fusion.js"></script>
</body>
</html>

```

CSS

```js

/* Estilos Generales */
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

    .inactive {
      display: none;
    }

    /* NavBar (General) */
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
    .navbar-email:hover {
      color: var(--hospital-green);
      cursor: pointer;
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

    /* Menu en Desktop */

    .desktop-menu {
      position: absolute;
      background: var(--white);
      top: 60px;
      right: 0;
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

/*Menu en Mobile*/


    .mobile-menu {
      background-color: var(--white);
      position: absolute;
      top: 60px;
      cursor: pointer;
      padding: 24px;
    }
    .mobile-menu a {
      text-decoration: none;
      color: var(--black);
      font-weight: bold;
      /* margin-bottom: 24px; */
    }
    .mobile-menu ul {
      padding: 0;
      margin: 24px 0 0;
      list-style: none;
    }
    .mobile-menu ul:nth-child(1) {
      border-bottom: 1px solid var(--very-light-pink);
    }
    .mobile-menu ul li {
      margin-bottom: 24px;
    }
    .email {
      font-size: var(--sm);
      font-weight: 300 !important;
    }
    .sign-out {
      font-size: var(--sm);
      color: var(--hospital-green) !important;
    }

    /* Aside (product detail y carrito de compras) */

    .product-detail {
      background-color: var(--white);
      width: 360px;
      padding: 0 24px;
      box-sizing: border-box;
      position: absolute;
      right: 0;
    }
    .title-container {
      display: flex;
    }
    .title-container img {
      transform: rotate(180deg);
      margin-right: 14px;
    }
    .title {
      font-size: var(--lg);
      font-weight: bold;
    }
    .order {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 16px;
      align-items: center;
      background-color: var(--text-input-field);
      margin-bottom: 24px;
      border-radius: 8px;
      padding: 0 24px;
    }
    .order p:nth-child(1) {
      display: flex;
      flex-direction: column;
    }
    .order p span:nth-child(1) {
      font-size: var(--md);
      font-weight: bold;
    }
    .order p:nth-child(2) {
      text-align: end;
      font-weight: bold;
    }
    .shopping-cart {
      display: grid;
      grid-template-columns: auto 1fr auto auto;
      gap: 16px;
      margin-bottom: 24px;
      align-items: center;
    }
    .shopping-cart figure {
      margin: 0;
    }
    .shopping-cart figure img {
      width: 70px;
      height: 70px;
      border-radius: 20px;
      object-fit: cover;
    }
    .shopping-cart p:nth-child(2) {
      color: var(--very-light-pink);
    }
    .shopping-cart p:nth-child(3) {
      font-size: var(--md);
      font-weight: bold;
    }
    .primary-button {
      background-color: var(--hospital-green);
      border-radius: 8px;
      border: none;
      color: var(--white);
      width: 100%;
      cursor: pointer;
      font-size: var(--md);
      font-weight: bold;
      height: 50px;
    }

    /* Lista de productos */

    .cards-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, 240px);
      gap: 26px;
      place-content: center;
      margin-top: 30px;
    }
    .product-card {
      width: 240px;
    }
    .product-card img {
      width: 240px;
      height: 240px;
      border-radius: 20px;
      object-fit: cover;
    }
    .product-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 12px;
    }
    .product-info figure {
      margin: 0;
    }
    .product-info figure img {
      width: 35px;
      height: 35px;
    }
    .product-info div p:nth-child(1) {
      font-weight: bold;
      font-size: var(--md);
      margin-top: 0;
      margin-bottom: 4px;
    }
    .product-info div p:nth-child(2) {
      font-size: var(--sm);
      margin-top: 0;
      margin-bottom: 0;
      color: var(--very-light-pink);
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
      .desktop-menu {
        display: none;
      }
      .product-detail {
        width: 100%;
      }
      .cards-container {
        grid-template-columns: repeat(auto-fill, 140px);
      }
      .product-card {
        width: 140px;
      }
      .product-card img {
        width: 140px;
        height: 140px;
      }
    }

    @media (min-width: 641px) {
      .mobile-menu {
        display: none;
      }
      
    }

```

JAVASCRIPT

```js

const menuEmail = document.querySelector('.navbar-email'); 
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
  const isAsideClosed = aside.classList.contains('inactive');

  if (!isAsideClosed) {
    aside.classList.add('inactive');
  }

   desktopMenu.classList.toggle('inactive');

}

function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains('inactive');

  if (!isAsideClosed) {
    aside.classList.add('inactive');
  }

  mobileMenu.classList.toggle('inactive');
}


function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  }

  aside.classList.toggle('inactive');
}

```

Si vamos al navegador y recargamos, veremos que funciona bastante bien, pero debemos agregarle algunos stilos, como por ejemplo las cards no tienen suficiente margen respeto al menu.

Vamos agregarle estilos a la .card-container, y vamos a decirle que tenga un margin-top: 30px, .

OK, una ves tengamos listo el codigo, y sabiendo que se maneja bien, vamos a hacer cambios como por ejemplo, vamos a ir a nuestro codigo HTML, y vamos a borrar todas las card esepto una.

```js

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


```

En mi caso yo no las voy a borrar, voy a dejarlas comentadas y lo que voy hacer es que JS haga magia por mi, para que esta card aparesca las veces que lo necesitemos.

Es mas vamos hacer algo mas loco, vamos a quitar la card que tenemos, y vamos a hacer que JS lo cree desde cero por nosotros.

En la vida real hablemos por ejemplo de tiendas tan grandes como son Amazon, no tinen sus productos en su pagina HTML, esto seria inhumano, lo que tenemos que hacer es que toda esa informacion de los productos, los guardamos en una base de datos, y nuestro BACKEND es la que va a acceder a esa informacion por nosotros, atarave s de una API Rest, le permite a nuestro frontend que haga consultas, para que nos podamos traer la lista de productos que nosotros necesitemos, y toda esta informacion que nos podamos traer, la podremos insertar en nuestro codigo, gracias a la manipulacin dinamica del DOM, en nuestro HTML.

Ahora lo que vamos hacer es hacer como que ya tenemos esa informacion, como si nos la trajeramos de nuestro BACKEND.

Vamos a comenzar creando una variable debajo del resto de codigo JS que tenemos, y le vamos a decir que queremos que esta variable (const) se llame (productList) y esta va a ser igual a un array = [];


```js

const productList = [];

```

Este sera el array que nos devolveria nuestro propio codigo JS cuando hicieramos las consultas a a la API REST, pero mientras tanto vamos a crearla nosotros mismos manualmente.

vamos a crear un productList.push{}; esto para agregarle un nuevo elemento, y dentro del array vamos agregarle un nuevo objecto, una pregunata que nos habiamos hecho antes, era que si podiamos combinar arrays con objetos?, la respuesta es que si podemos hacerlo.

En tonces hacemos un productList.push({}) para agrgarle un nuevo elemento, que tenga las distintas cualidades que necesitan nuestros productos como son, una imagen, un precio, un nombre, y esto es lo que vamos a agregar en los diferentes producto que tenemos, de esta manera.


```js
const productList = [];
productList.push({
  name: 'Bike',
  price: 120
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


```

En tonces  si vamos al navegador y recargamos pues no nos va a mostrar nada, pero si vamos a la consola y escribimos (productList) y esto  es lo que nos devuelve la consola

productList
0
: 
{name: 'Bike', price: 120, image: 'https://images.pexels.com/photos/276517/pexels-pho….jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
length
: 
1
[[Prototype]]
: 
Array(0)


La consola nos esta mostrando cuantos arrays y sus detalles tenemos, lo que vamos hacer es copiar poner por el momento mas arrays al que ya tenemos.

```js

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


productList.push({
  name: 'Bike',
  price: 360,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
  name: 'Bike',
  price: 185,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
  name: 'Bike',
  price: 128,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

```

Si rrecargamos vamos a ver un array  mucho mas grande con mas informacion y ahora si tuvieramos diferentes URL de la s imagenes, el HTML no nos mostarria el mismno producto varias veces, si no, diferentes procductod con sus correspondientes informacion.

Ahora lo que debemos hacer es insertar estos arrays a nuestro HTML, y para esto debemos recorrer este array

```js

const productList = [];

```

Y podemos hacer esto de dos maneras, podemos utilizar un ciclo for pero de una manera mas facil sin necesidad de hacer (que i es = a 0, que i es >= a la cantidad de elementos de nuestro array), no.
Vamos a utlizar un atajo con esta sintaxis, 

```js

for (product of productList)

```

Osea vamos a hagarrar nuestro array (productList), la lita de elementos por la que queremos iterar, y con esta sintaxis de for (product  osea el nombre de cada elemneto de nuestro array, (of) nuestro array directamnete, como tenemos un array de productos pus cada producto va a tener el nombre (product), esa es la sintaxis.

```js

for (product of productList) {

}

```

Y dentro de este (for) ya tenemos adceso a cada uno de los productos, y podemos hacer un console.log de cada uno de mis productos, como por ejemplo 

```js

for (product of productList) {
    console.log(product.name)
}

```

Si hacemos esto en la consola, fijemosnos en lo que paso aqui, esto es lo que nos arrojo la consola.



for (product of productList) {
    console.log(product.name)
}
VM579:2 Bike
VM579:2 Pantalla
VM579:2 Pantalones
VM579:2 Zapatos
undefined

Me inprimio en cada linea distinta el nombre de cada producto que por el momento tenemos en nuestro array, en tonces este elemento (product.name) product, es cada  objecto que tengamos en los arrays

```js

productList.push({
  name: 'Pantalla',
  price: 360,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

```

y ya con esto vamos a tener la informacion necesaria para incertar distintos elementos HTML a nuetra aplicacion utlizando JS.

Y hay otra manera de hacer esto, ya no utilizando el (for of), si no utlizando el (for in) (in) de incertar, y si en el console.log ponemos solo (product), ya este product no va a ser el producto como tal, si no que va a ser el indice, lo miosmo que si hicieramos un for normalito que (i es = a 0), es lo mismo pero de una manera mas facil.

```js

for (product in productList) {
    console.log(product)
}
VM752:2 0
VM752:2 1
VM752:2 2
VM752:2 3
undefined

```

Pero me gusta trabajar mas con con el (for of) por que no me arroja el indice, si no que me arroja directamente el elemnto del arry, y esto nos ahorra un paso mas.

En tonces lo que vamos hacer es que por cada producto (of) vamos hacer algo, recoordemos que en clases pasadas ya habiamos visto el (document.createElement), este lo que va a ser es ayudarnos a crear cada elemento de nuestro HTML, pero utlizando JS, en tonces lo que debemos hacer es ir elemento por elemento a crearlos pero no nos vamos a detner asta crearlos. 


```js

for (product of productList) {
    document.createElement()
}

```

En tonces para esto lo que vamos a hacer es que vamos a copiar este elemento del HTML.

```js

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

```
Y este codigo Html, lo vamos a pegar en nuestro archivo JS, y lo vamos a peguer arriba del codigo (for) con el que estabamos trabajando, 

```js


/* <div class="product-card">
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
      </div> */

for (product of productList) {
    document.createElement()
}

```

Quiero tener la referencia del HTML que quiero construir, pero ahora utilizando JS, en tonces lo primero que tengo que crear es un <div> que tenga la clase (productCard) en tonces lo vamos a llamar de esta manera 

const productCard = document.createElement('div') 

y le vamos a decir a este productCard que le vamos a agregar una clase, de esta manera productCard.classList.add('product-card), la misma clase que le tenemos en el HTML, 



for (product of productList) { 
   const productCard = document.createElement('div')
   productCard.classList.add('product-card)
}

OK, que sigue ahora vamos a tenerle que agregar una imagen, en tonces vamos a crear una constante (img) y esta sera igual a document.createElement('img') y a esta imagen no tenemos que agregarle una clase, tenemos que agregarle un (src), pero tengamos en cuenta que este (src) no va a ser el mismo (src) talcual como el que tenemos en el HTML, si no, la propiedad (image) de cada uno de los elementos que reprecentan un objecto, dentro del array de productos, recoordemos que  

product es = en cada una de estas iteraciones a un objecto que tiene el {name, price, image} en tonces tenemos que utilizar el product.image para metercelo a nuestro (src) para nuestra imagen, en otras palabras vamos a decir que vamos a llamar a 
img.setAttribute y vamos a decirle que vamos a modificar su atributo (src) y y vamos agregarle ya no aqui un string directamente con la URL de la imagen ('https://') no, ahora vamos agregrale lo que sea que venga en (product.image).

const img = document.createElement('img');
img.stAttribute('scr', product.image);
// product = {name, price, image} -> product.image

Asta el momento el codigo JS estaria de esta manera.


```js

for (product of productList) { 
   const productCard = document.createElement('div');
   productCard.classList.add('product-card');

   const img = document.createElement('img');
   img.stAttribute('scr', product.image);
   // product = {name, price, image} -> product.image
}

```

Ahora bien, lo que debemos hacer lo mismo con la informacion dinamica, de la misma manera como son, el precio, y el nombre del producto que vamos a comprar, pero vamos paso a paso.

despues de la imagen tenemos un un contenedor <div> que tiene la clase product-info, esto sera muy parecido del (product-card).

<div class="product-info"></div>

En tonces vamos a crearlos de la misma manera, pero cambiando por ejemplo, (productCard), por (productInfo), y el resto de cosas tambien, dependiendo de la clase que debemos utilizar.

```js

const productInfo = document.createElement('div');
   productInfo.classList.add('product-info');

```

Ahora necesitamos tomar el div donde esta el precio y el nombre, pero este <div> no tiene clase, como lo hacemos, podemos crearle algun nombre, en este caso, vamos adecirle
(productInfoDiv), como aqui tenemos dos informaciones diferentes, una para el precio, y otro para el nombre, debemos crear dos constantes, pero ya que hemos llegado aqui, de una ves podemos meterle el texto que necesitemos, y para esto podemos utilizar (innerText, appen, innerHTML), la que nosotros queramos.
Por ejemplo a product.Price.innerText vamos a llamarle un simbolo de dollar, digamos que los precios son en dollares, en tonces. product.Price.innerText = '$', ademas a esto le vamos a concatenar recoordemos que utlizamos el mas para esto (+), en tonces.

product.Price.innerText = '$' + product.price;

recoordemos el (product) del siclo for, y (price) por que asi biene mi objecto.

Y de la misma manera vamos a crear, pero en este caso para el (name), y en este caso ya no necesitamos concatenar nada, solo le vamos a decir que el innerText va a ser de lo que sea que venga, en este caso del (name) del producto .

product.Name.innerText = product.name;



const productInfoDiv = document.createElement('div');

const productPrice = document.createElement('p');
product.Price.innerText = '$' + product.price;

const productName = document.createElement('p');
product.Name.innerText = product.name;

Asta este punto, nuestro codigo estaria de esta manera.


```js

for (product of productList) { 
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

  const img = document.createElement('img');
     img.stAttribute('scr', product.image);
     // product = {name, price, image} -> product.image

  const productInfo = document.createElement ('div');
   productInfo.classList.add('product-info');

  const productInfoDiv = document.createElement('div'); 

  const productPrice = document.createElement('p');
  product.Price.innerText = '$' + product.price;

  const productName = document.createElement('p');
  product.Name.innerText = product.name;

}

```

Ahora bien, asta el momento tenemos un monton de maquetacion, despues de haber creado todos los elementos, lo que vamos hacer es devolvernos, para cada elemento insertarselo a su elemneto papa, y llegar al final y cada uno de estos productos a nuestro HTML, exactamente al 
<div class="cards-container"></div>

por que este es el papa container.

Por el momento sigamos, vamos a poner el <figure>
le decimos que 

const productInfoFigure = document.createElement('figure');

Y recordemos que tambien tenemos una imagen, en tonces por debajo pondremos nuestra imagen, y a esta imagen debemos hacerle tambien una insercion del atributo (src), 
img.setAttribute('src', product.image);

Pero fijemosnos que en el HTML
<img src="./icons/bt_add_to_cart.svg"> no va a ser dinamica, no vamos a recibir de nuestro array de productos, de cual va a ser la informacion de cual es el Icono que queremos mostrar ahy, osea siempre va a ser el mismo, por lo tanto le vamos a poner la ruta. 

const productImageCard = document.createElement('img');
img.setAttribute('src', './icons/bt_add_to_cart.svg');

```js

const productInfoFigure = document.createElement('figure');

const productImageCard = document.createElement('img');
img.setAttribute('src', './icons/bt_add_to_cart.svg');

```

OK, ya hemos llegado al final, y debemos de devolvernos, por el momento nuestro codigo estaria de esta manera.

```js

for (product of productList) { 
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

  const img = document.createElement('img');
     img.stAttribute('scr', product.image);
     // product = {name, price, image} -> product.image

     const productInfo = document.createElement ('div');
     productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div'); 
  
    const productPrice = document.createElement('p');
    product.Price.innerText = '$' + product.price;
  
    const productName = document.createElement('p');
    product.Name.innerText = product.name; 

    const productInfoFigure = document.createElement('figure');

    const productImageCard = document.createElement('img');
    img.setAttribute('src', './icons/bt_add_to_cart.svg');

    
}

```

OK, ya que estamos al final, vamos a decirle a nuestro (productInfoFigure) que (.appendChild) que nos sirve para agregar nuevos elementos a un documento existente o para mover un elemento de la página, en tonces en este caso vamos a meterle a nuestro (productImgCart).

productInfoFigure.appendChild(productImgCart);

En tonces vamos hacer exactamen lo mismo, vamos a decirle a nuestro (Div) que haga un (appendChild) de nuestro (productPrice)
y tambien le vamos a decir al (Div) que haga un appendChild de nuestro (productName), esto de esta manera.

productInfoDiv.appendChild(productPrice);
productInfoDiv.appendChild(productName);

Ahora bien debemos insertar nuestro (productInfoDiv) como nuestro (productInfoFigure), dentro del (productInfo).

En tonces dentro de (productInfo) vamos hacer (appendChild),  de nuestro (productInfoDiv) y tambien de nuestro (productInfoFigure) en este orden.

productInfo.appendChild(productInfoDiv);
productInfo.appendChild(productInfoFigure);

Y ya casi tenemos todo completamente listo, nos falta insertar nuestro (productInfo), y nuestro (productImage) dentro del (productCart).


```js

for (product of productList) { 
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

  const productImg = document.createElement('img');
     productImg.stAttribute('scr', product.image);
     // product = {name, price, image} -> product.image

     const productInfo = document.createElement ('div');
     productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div'); 
  
    const productPrice = document.createElement('p');
    product.Price.innerText = '$' + product.price;
  
    const productName = document.createElement('p');
    product.Name.innerText = product.name; 

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);


    const productInfoFigure = document.createElement('figure');

    const productImageCard = document.createElement('img');
    img.setAttribute('src', './icons/bt_add_to_cart.svg');

    //Apartir de aqui nos devolvemos

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    
}

```

En tonces llamemos al (productCart.appendChild) y le insertamos nuestro (productImg), primero vamos a insertar la imagen y luego el info de esta manera.

productCart.appendChild(productImg);
productCart.appendChild(productInfo);

y despues de todo este codigo, ya tenemos listo nuestro (productCart), para ahora si insertarlo en nuestro HTML, pero primero, asi quedara nuestro codigo JS, asta el momento.

```js

const menuEmail = document.querySelector('.navbar-email'); 
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

//Para el Desktop

function toggleDesktopMenu() {
  const isAsideClosed = aside.classList.contains('inactive');

  if (!isAsideClosed) {
    aside.classList.add('inactive');
  }

   desktopMenu.classList.toggle('inactive');

}

// Para el responsive

function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains('inactive');

  if (!isAsideClosed) {
    aside.classList.add('inactive');
  }

  mobileMenu.classList.toggle('inactive');
}

//Carrito de Compras

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  }

  aside.classList.toggle('inactive');
}

//Product List

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
  name: 'Pantalla',
  price: 360,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
  name: 'Pantalones',
  price: 185,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
  name: 'Zapatos',
  price: 128,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

for (product of productList) { 
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

  const productImg = document.createElement('img');
     productImg.stAttribute('scr', product.image);
     // product = {name, price, image} -> product.image

     const productInfo = document.createElement ('div');
     productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div'); 
  
    const productPrice = document.createElement('p');
    product.Price.innerText = '$' + product.price;
  
    const productName = document.createElement('p');
    product.Name.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);


    const productInfoFigure = document.createElement('figure');

    const productImageCard = document.createElement('img');
    img.setAttribute('src', './icons/bt_add_to_cart.svg');

    //Apartir de aqui nos devolvemos

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCart.appendChild(productImg);
    sproductCart.appendChild(productInfo);
    
    
}

```

Vamos a insertar este codigo a nuestro HTML, hagamos lo mismo del (appendChild) pero en el HTML, con la clase ("cards-container")

<div class="cards-container">

y como vamos atener que trabajar con este <div> en tonces vamos a tener que seleccionarlo, y ponerlo donde tenemos todas las constantes o variables, del JS.

const cardsContainer = document.querySelector('.cards-container');

```js

const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

```

Y al final de todo el codigo JS, vamos a decirle a ese (cardsContainer) que haga un (appendChild) de nuestro (productCard), ose de nuestro producto ya maquetado.

cardsContainer.appendChild(productCard);


```js

 //Apartir de aqui nos devolvemos

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);


    productCart.appendChild(productImg);
    productCart.appendChild(productInfo); 
    
    cardsContainer.appendChild(productCard);
    
    
}

```

Ahora bien, es momento de ir a nuestro codigo en el navegador, rrecargamos y guardamos y veamos que nos dispara nuestra consola.

y por supuesto se an visualizado las imagenes en el navegador, pero como? si en nuestro HTML tenemos ese codigo incluso comentado

RECORDEMOS:

Cuando estabamos en la seccion de funciones, comentamos que unos de los usos de las funciones, era poder reutilizar codigo, este es el mas evidente, pero hay otro, y es (La organizacion).

Este siclo (for) esta tirado en nuestro codigo, hay un monton de celectores, de addEventListener, de funciones, tenemos un Array definiendo informacion de nuestro producto, y de repente estamos pasando a rrecorer ese producto.

De esta forma hemos creado nuestra lista de productos, no solo copiando y pengando la lista de componentes de nuestro HTML, si no que creamos nosotros mismos por nuestra cuenta desde JS esa maquetacion de cada uno de los productos de nuestra lista.

De esta manera terminamos la clase numero 22 del curso.

--------------------------------------------

# DETALLES DE UN PRODUCTO, CLASE NUMERO 23 DEL CURSO.

Para esta clase, lo que vamos hacer es tomar la clase doce.html que la que tiene la barriata que quiero abrir como detalle de cada producto, cuando le clikiemos a alguno de nuestros productos va a parecer esa barrita. 

Vamos a copiar el HTML a nuestro codigo de estudio, y este lo vamos a pegar justo debajo del <aside> que ya tenemos.

```js

<aside class="product-detail">
    <div class="product-detail-close">
      <img src="./icons/icon_close.png" alt="close">
    </div>
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
    <div class="product-info">
      <p>$35,00</p>
      <p>Bike</p>
      <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
      <button class="primary-button add-to-cart-button">
        <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
        Add to cart
      </button>
    </div>
  </aside>

```

Ya nos hemos dado cuenta del primer inconveniente en esta parte, y es que tenemos dos componentes del los <aside> con la misma clase.

<aside class="product-detail">

Como aremos para arreglar esto, si vemos tambien en nuestros estilos hay una clase (product-detail), pero estos eran para el carrito, no para los detalles del producto, hay cosas que se pueden compartir pero son distintos, y si chequeamos nuestro JS, tambien veremos que tenemos una variable de nuestro <aside> que contiene esa clase (product-detail), pero ahora tenemos dos componentes distintos con la misma clase. 

Para esto vamos a utlizar una solucion muy censilla.

Vamos aquitar la clase (product-detail)
<aside class="product-detail inactive"> de los dos <aside>, sin miedo, pero a cada <aside> le vamos a poner su propio identificador, al primer <aside> le vamos a dejar la class="inactive" y le vamos a llamar (shoppingCardContainer), y al otro le vamos a llamar (productDetail), y todo quedara asi.

<aside class="product-detail inactive">

```js
//<aside class="product-detail inactive">
<aside id="shoppingCardContainer" class="inactive">

//<aside class="product-detail inactive"> 
<aside id="productDetail" class="">

```

Tengamos en cuenta de que como vamos hacer estos cambios, se va a roper todo, en JS ya no va a funcionar este selector 

```js
const aside = document.querySelector('.product-detail');

```
Por que ya no existe ninguna clase que se llame asi, lo mismo que en nuestro Css, y Html, y ademas en los @mediaqueries, y si vamos al navegador veremos que todo e un caos, como solucionamos este error?

Atodo lo que le llamabamos (product-detail) tanto en el Css, como en el JS, vamos a llamarle ahora (aside) asi de simple, a todo lo que tenga la etiqueta <aside> le vamos a dar estos estilos.

```js

aside {
      background-color: var(--white);
      width: 360px;
      padding: 0 24px;
      box-sizing: border-box;
      position: absolute;
      right: 0;
    }

```

En tonces vamos a cambiar el nombre de las etiquetas, en Css, y JS vamos a cambiar la variable aside, pero tengamos en cuenta que esta variable en JS, ya no vamos a seleccionar a (product-detail), si no que este en especifico dl que estamos hablando, no se referia a cualquier <aside>, si no que referia al primer <aside>, el que ahora tiene el id="shoppingCardContainer".

En tonces esta es la variable que vamos a crear, en todas partes donde diga (aside) voy a llamarlo (shoppingCardContainer) y la clase ya no va a ser (product-detail), si no que lo vamos a llamar por su id ('#shoppingCardContainer') 

```js

/* const aside = document.querySelector('.product-detail'); */

const shoppingCardContainer = document.querySelector('#shoppingCardContainer');

```

En todas partes donde se utlize la palabra <aside> la vamos a cambiar por (shoppingCardContainer), si guardamos y recargamos, veremos como todo sigue funcionando sin ningun obstaculo, y ya lo tenemos por separado, desligado el uno del otro almenos en el Html, y en el Css, de nuestro otro <aside>, el de (product-detail) detalles de un producto.

Ahora vamos a tomar los stilos Css, si nosotros le quitamos esa class="inactive", sigue estando dentro de un <aside> aun que se rope, pero vemos que esta es una buena noticia, por que los stilos para el aside se estan repitiendo para todos los asides, ya no esta estorbando tanto, pero sigue hacienlo falta varios estilos, 

pero fijemosnos, siempre ignoramos el (:root {}) y el (body).
por que esos estilos ya los tenemos y no hace falta copiarlos de la clase numero doce, solo deberiamos centrarnos en lo referente al aside, pero tambien tenemos otros estilos que ya tenemos repetidos.

Ahora bien, si al segundo <aside> le quitamos la class="inactive", se va a perder la imagen pero seguiremos viendo el icono para cerrar cualquier ventana esto en 
<div class="product-detail-close">
tiene los estilos que necesitamos, osea que si se estan aplicando los etilos que le hemos puesto, pero la imagen no se esta replicando.

Esto es por que en nuestro (productDetail), en los estilos de los detalles del producto, seguimos llamando a nuestro (product-detail)
osea que esta clase la tenemos que cambiar, toda clase llamada (product-detail) la cambiaremos por el id="productDetail" del Html, recordemos aque anteriormente habiamos cambiado la clase por un id.

Ahora si guardamos y recargamos y quitamos la class="inactive", veremos como se carga nuetra imagen, ahora vamos a solucionar algunos estilos, vemos tambien algunso estilo un poco raros que no nos esta ayudando a estilizar nuestra aplicacion, por que se estan repitiendo esos estilos, por ejemplo habaldo del (product-info). 

Recordemos que nosotros con JS creamos un div que tenia la class="product-info" que le daba unos estilos a los elemento como el (precio, nombre etc).

Pero en nuestros detalles del producto, osea (product-detail) tenemos otro <div> con esa misma clase que esta dando otros estilos y esto hace que se rompa todo, en tonces lo que debemos hacer es especificarle al uno y al otro, que no le eden esos estilos a todos las clases que tengan por nombre (product-info), si no que le den los estilos del (product-info) de la lista de productos, unicamente si estan en la lista de productos, y lo mismo con el otro.

en tonces vamos a solucionar esto, nos vamos a ir al (productDetail), y todas las partes donde diga (product-info) vamos a sumarles (#productDetail) este Id,  para que no se le aplique los estilos a todos los products info, si no a todos los que esten dentro del contenedor #productDetail. 

Veamos que dentro del <div> (product-card) tenemos otro <div> con  (product-info), y es otro (product-info) casi distinto al que tenemos en el (detalle de producto), pero tiene la misma clase, debemos solucionar esto, como lo vamos hacer?

Debemos de buscar los estilos de nuestro (product-card) y buscar esos (.product-info) distintos a los que ya tenemos, y debemos especificarles que deben de estar dentro de 
nuestros (product-card) para que sigan funcionando solo debemos sumarle la clase

(.product- card .product-info)

recargamos y vamos al navegador, quitamos la clase (inactive) del (productDetail), y vemos como ya nos esta apareciendo correctamnete.

Otra cosa que alcanzamos a ver es que en la clase numero doce del curso, no teniamos(margin) para nuestro contenedor, para nuestro elemento <aside>, sin embargo en los estilos que tenemos en el <aside>, fijemonos que si le estamos dando un (padding: 0 24px), y este es que nos esta rompiendo todo, no en el carrito, 

Para esto lo que vamos hacer es quitarle el padding a el elemento que esta dentro de (Aside (product detail y carrito))


Y vamos a crear un nuevo selector llamado 
(#shoppingCartContainer) y le vamos a poner este padding asi 

```js

#shoppingCartContainer {
  padding: 0 24px;
}

```

Tengamos en cuenta que este padding, se lo vamos a poner al (shoppingCardContainer), ahora bien si vamos al navegador, guardamos y recargamos, veremos como funciona.

Lo siguiente que vamos hacer es que este <aside> no interrumpa al carrito o al menumobile, pero esto lo aremos que aparesca con JS.

Antes de terminar con esta clase hemos notado que tenemos un error en el Css que se nos olvido corregir, si vamos a la version mobile y extendemos el menu, veremos que no esta ocupando todo el espasio, a pesar de que estamos en la version mobile, si lo agrandamos veremos que desaparece, pero si lo achiquitamos, no esta ocupando todo el espacio posible.

Vamos a corregir esto por que no esta funcionando del todo bien, como lo aremos?

Si seleccionamos nuestro mobile-menu, como el fondo estaba en blaco, pues no se alcanzaba a visualizar que esto estubiera fallando, para esto bamos a darle un (left: 0;), esto para que ocupe todo el espacio desde la izquierda, ahora queremos que ocupe todo el espacio, para que nada nos interrumpa, para esto le daremos un (width: 100%;).

```js

.mobile-menu {
      background-color: var(--white);
      position: absolute;
      top: 60px;
      left: 0;
      width: 100%;
      cursor: pointer;
      padding: 24px;
    }

```

Asi de esta manera, ahora vemos que no hay ningun producto estorbando.

OK, ya logramos que nuestra clase (productDetail) tenga ese <aside> funcionando, con los estilos que necesitabamos incluso en mobile, pero ahora como hacemos que se habra y se cierre cuando le demos click a nuestras imagenes, y mas importante todabia, vamos a darle click al carrito, esto es lo que vamos a solucionar en la siguiente clase.

--------------------------------------------



# INTERACCION ENTRE TODOS LOS COMPONENTES

Clase numero 24 del curso


Ya agregamos nuestro componente de (productDetail) a nuestro Html, y pudimos hacer que nuestro Css funcionara a pesar que teniamos dos elementos muy parecidos, ahora loque tenemos que hacer es que este nuevo elemento o componente que agregamos a nuestra aplicacion, aparesca o desaparesca cuando le demos click a los productos que agregamos a nuestro Html utlizando JS apartir de un Array de productos, y no solo esto, si no que debemos hacer que funcione, y ahora debemos hacer lo mismo pero con los (Detalles de un producto).

Esto sera un condicional bastante pesado y complicado, pero vamos a crearlo.

hagamos lo mas facil, si le damos Click a la imagen de un producto, se deberia habrir el (productDetail), osea que deberiamos quitar la classe (inactive), en tonces lo que debemos hacer, es ir a nuestro archivo JS, y crear un (addEventListener) para cada uno de mis imagenes, para que habran el (productDetail), pero tenemos un pequeño problema, si nosotros tramos de habrir alguna de estas imagenes, vamos a fallar, recoordemos que nuestro Html, esta basio, tenemos un bloque de codigo, comentado, pero esto no funciona precisamente por que esta comentado, en tonces como hacemos para seleccionarlo desde nuestro JS, recoordemos que aun que no lo allamos puesto en el Html, nuestros ususarios si lo estan biendo gracias a nuestro (renderProducts) en donde por cada elemento de un array, estamos creando todos estos elementos, incluyendo la imagen, aqui tenemos esta imagen, y recoordemos que la estamos tratando como si fuera cualquiera otra seleccion de elementos Html, podemos obtener su propiedad (setAttributes), (classList), (innerText), (appendChild), y a lo que nosotros queramos.

En tonces segun esta informacion, tambien podemos adceder y darle eventos, es decir si estamos creando un elemento Html desde JS, a ese elemento, creado ficticiamente por JS, tambien podemos darle (addEventListener).

En tonces si aqui, le edecimos que de la imagen llame a su (productImg.addEventListener) y que escuche su evento de (click) y que ejecute un (console.log) cada que lo llamemos.


```js

productImg.addEventListener ('click', console.log);

```

Si hacemos esto, y volvemos a nuestro navegador, habrimos la consola, veremos que cada ves que clickemos en una imagen, me retorna un console.log, es decir.

Como eventualmente esta imagen (productImg.addEventListener), mas abajo, la incertamos en nuestro Html


```js

 productInfoFigure.appendChild(productImgCart);

productCard.appendChild(productImg);
    productCard.appendChild(productInfo); 

```

Cuando los usuarios le den click, gracias a este (addEventListener), pues podemos ejecutar lo que nosotros queramos, como por ejemplo ese (console.log).

Ahora que deberiamos hacer en ves de este console.log?
Deberiamos abrir ese <aside> de (productDetail), lo que esperamos es que cuando le demos click a nuestro carrito, aparese, desaparese y asi susesivamente, lo mismo con otros elementos, pero si le damos click a una imagen, y esta abierto nuestro <aside>, cuando le demos click a la imagen, deberiamos cerrarlo?

A mi me parese que no, cundo le damos click a una imagen, deberia abrirse y ya, y despues lo cerramos con otro botom, para esto debemos utilizar la funcion (open), no (toglee), que seria abrir y serrar, necesitamos solo que se abra y ya.

En tonces, donde tenemos el console.log, vamos a llamar la funcion (open), y le vamos a poner por nombre (openProductDetailAside), esta sera el nombre de nuestra funcion, y esta unicamente va a abrir  el <aside> del (productDetail), en tonces vamos a crear esa function asi.

```js

productImg.addEventListener ('click', openProductDetailAside);

```

Con esta funcion lo que va a hacer es, unicamente que abra, que muestre nuestro <aside> del (togleeDetail).

RRECOORDEMOS:

Que debemos crear el selector, de la misma manera que tenemos un (shoppingCardContainer), debemos de tener un (productDetailContainer) y este sera igual al Id que le dimos a nuestro <aside> (productDetail), este lo pondremos justo debajo del (shoppingCartContainer) asi.

```js

const productDetailContainer = document.querySelector('#productDetail');


```



 Ahora vamos a crear esa function, y a esta le vamos a llamar de la misma manera que llamamos a el selector (productDetailContainer), y esta la pondremos debajo de la function toggleCarritoAside.

 Lla que tenemos el elemento seleccionado que queremos abrir, pues unicamente utilizabamos el elemento (classList) y ademas vamos a utlizar la clase (remove('inactive') ) remove, por que queremos quitqrle la clase (inactive) para que aparesca y ya no este inactivo, de esta manera

 productDetailContainer.classList.remove('inactive')

function openProductDetailAside() {

}

```js

function openProductDetailAside() {
  productDetailContainer.classList.remove('inactive')
}

```

Y dentro de esta unicamente deberiamos llamar ese selector


Ahora hemos visto como cuando le clickeamos a una imagen, esta se abre, pero como hacemos para que cuando no queramos ver esta imagen, se cierre?.

para esto vamos a darle vida al circulo de cierre que tenemos en el <aside> para saber cual es lo inspecionamos y sabemos que esta en el (product-detail-close), en tonces debemos hacer lo mismo que acabamos de hacer para que se abra, pero en este caso a la inversa.

Lo primero es crear el selector y este lo pondremos justo debajo de (menuCarritoIcon), y le decimos que quqeremos una costante de nombre (productDetailCloseIcon) y esta sera igual a document.querySelector y este seleccione cualquier elemento que tenga la clase ('.product-detail-close').

```js

const productDetailCloseIcon = document.querySelector('.product-detail-close');

```

De esta manera.

Lla que tenemos este elemento asi como los otros Iconos que tenemos, vamos hacer lo mismo, vamos a crearle un (addEventListener) de ('click') pero ya no vamos a llamar a (toggleCarritoAside) si no que vamos a llamar (closeProductDetailaside), este lo pondremos justo debajo del (menuCarritoIcon.addEventListener('click', toggleCarritoAside);)

```js

productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

```

Ahora debemos llamar la function para que esto funcione, y esto sera, una function que se llamara (closeProductDetailAside) y ahora no le pondremos la classe (inactive) como antes (productDetailContainer.classList.remove('inactive')),  en este caso no le vamos a quitar la classe inactive, si no que se la voy a poner, con (add) para que mi elemento pase a estar (inactivo) de esta manera, 
(productDetailContainer.classList.add('inactive'));

y este lo pondremos justo debajo de la function (openProductDetailAside)

```js

function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive')
}

```

Si guardamos y recargamo, veremos como se abre la imagen y por supuesto, tambien vemos como se cierra, pero rrecordemos el nombre de la classe, ya no estamos probando elementos individuales, debemos hacer que funcionen todos en conjunto, y si abrimos nuestro carrito de compras, veremos que !NO FUNCIONA!

Si tenemos abierto nuestro (productDetail) se pone por encima de nuestro carrito, incluso si lo tratamos de abrir despues de que tengamos una imagen abierta, debemos arreglar esto. 

Si nuestro productDetail estaba abierto antes de que trataramos de abrir nuetro carrito de compras, deberiamos cerrar es productDetail, y lo mismo al rreves, pues vamos al lio por que debemos hacer mas condicionales para solucionar esto, y empezaremos por el carrito.

Ya teniamos un condicional vastante parecido al que vamos a utlizar que es este.

```js

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  }

  shoppingCardContainer.classList.toggle('inactive');
}

```


RRECOSDEMOS

Si teniamos nuestro menu-mobile abierto y tratabamos de abrir nuestro carrito, serrabamos nuestro menu-mobile, debemos hacer lo mismo pero ya no, solo en mobile, si no en todas partes, 

En tonces bamos a utlizar este mismo condicional, pero ya no con el mobile-menu, si no que con el otro <aside> el de productDetail. 

En tonces vamos a preguntar si (isProductDetailClose) es igual y tiene la classe (inactive) = productDetailContainer.classList.contains('inactive'), si si la tiene, es por que esta cerrado, en tonces si no esta cerrado, es por que esta abierto, y si esta abierto y stamos tratando de abrir otro elemento, en tonces es que queremos cerrar ese que estaba abierto desde antes.

```js

const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive');
  }

```



Esta condicional la bamos a poner en el carrito de compras asi.


```js

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

```

Si guardamos y recargamos, vemos que por supuesto funciona, y funciona a la inversa tambien, pero esta pasando que cuando serramos la imagen con el botom de cerrar, nuesto menu se carrito de compras se queda abierto, cual es el problema?, si tenemos abierto el carrito, y tratamos de abrir nuestro product detail, deberiamos cerrar el carrito si es que esta abierto, de que manera podemos hacer con esto?

Lo que vamos hacer para solucinar esto, es preguntar en mi (function openProductDetailAside) ya no, si estaba abierto, si no, si mi (shoppingCart) estaba abierto, 

```js

/* Function para que cuando le demos click a la imagen, aparesca */

function openProductDetailAside() {
  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
  
  if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive'); 
  }


  productDetailContainer.classList.remove('inactive');
}

```

Incluso podemos simplificarlo mucho mas, sin importar si estaba abierto o no estaba abierto, no importa.

Vamos a cerrarlo cada vez que intentemos abrir nuestro (productDetailContainer), esto lo podemos hacer por que no estamos haciendo un (toggle), si estubieramos haciendo un (toggle), rrecordemos que no estamos haciendo un (toggle) si no que estamos haciendo un (open) y un (close) por separado, si tubieramos un (toggle) esta logica seria super dificil.

Lo que podemos hacer es, siempre que tengamos abierto nuestro (productDetailAside), bamos a cerrar cualquier cosa que tengamos abierto.

En tonces vamos mandar llamar mi (shoppingCartContainer) a su lista de clases (classList) y le vamos a decir que siempre que tratemos de abrir un nuevo producto, le pongamos la clase inactive ( add('inactive') )

```js

shoppingCartContainer.classList.add('inactive');

``` 

recordemos que esto lo podemos hacer por que aqui estamos tratando de abrir, nuestro detalle de productos.

```js

function openProductDetailAside() {
  shoppingCardContainer.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');
}

``` 

En el caso de resto de functione que abren y cierran cosas, sera (toggle) no un (open) y un (close), vamos aprobar si esto funciona, vamos a abrir una imagen, y luego intentaremos abrir un carrito de compra y veamos si la imagen se cierra.

Ahora bien, probemos en la parte mobile si funciona, 

vamos abrir un carrito, y sobre este abramos un productDetail, y intentemos abrir el menu en Detail, pues no funciona.

Si tenemos abierto nuestro productDetail, y queremos abrir otra cosa, debemos cerrar antes de eso, nuestro productDetail.

En tonces vamos a ir a la function (toggleMobileMenu), antes de abrir o cerrar, si le damos click, al mobileMenu, vamos a preguntar, si ya teniamos este (productDetail) abierto y vamos a cerrarlo.

Vamos aver si por ejemplo simplemente cerrarlo, o es mas, para cerrarlo, podemos llamar simplemente al (closeProductDetailAside), vamos a decirle que se llame automaticamente, esto significa que cada ves en mobile que le demos al boton menu, vamos acerrar cualquier otra cosa que este abierta, por ejemplo, el producDetail.

closeProductDetailAside();

```js

function toggleMobileMenu() {
  const isAsideClosed = shoppingCardContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCardContainer.classList.add('inactive');
  }

  closeProductDetailAside();

  mobileMenu.classList.toggle('inactive');
}

``` 








