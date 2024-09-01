Aplicando rutas anidadas
=============
- Este proyecto lo estoy realizando dentro del curso **Front End III** de la carrera [Certified Tech Developer](https://www.digitalhouse.com/ar/productos/programacion/certified-tech-developer "Certified Tech Developer") 
- **Periodo :** Julio - Septiembre 2024
> En este proyecto se practica react

Una primera solución rápida es copiar el código de nuestro navbar y pegarlo en cada uno de los componentes. Pero en una aplicación muy grande, con miles de componentes, esto sería muy tedioso. Debería haber una forma más fácil de mostrarlo siempre sin tener que copiar el
código, ¿no? Por suerte para nosotros sí la hay.
Para poder compartir componentes entre rutas podemos utilizar una implementación llamada rutas anidadas. Veamos un ejemplo en código:

    //index.js o main.js
    import {BrowserRouter, Routes,Route} from "react-router-dom"
    import Home from './Home'
    import About from './About'
    import Faqs from './Faqs'

    ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<App/>} >
    <Route path='home' element={<Home/>} />
    <Route path='about' element={<About/>} />
    <Route path='faqs' element={<Faqs/>} />
    </Route>
    </Routes>
    </BrowserRouter>
    </React.StrictMode>)

Ahora, todas nuestras rutas son hijas de una ruta principal con path “/” y todas las rutas anidadas a esta comenzarán con el mismo path que su parent route y tendrán componentes en común (por ejemplo, el navbar).
Solo debemos realizar una modificación en App:

    //App.js
    import { Outlet} from "react-router-dom"
    import Footer from "./Footer"
    import Navbar from "./Navbar"

    function App() {
    return (
    <div>
    <Navbar/>
    <Outlet />
    <Footer/>
    </div>
    )}

Agregamos a nuestro navbar (que solamente contiene los links que teníamos antes) un footer (también homogéneo a todas las páginas) y un nuevo componente, propio de React Router, denominado outlet. Su única función es servir como placeholder para luego renderizar el contenido correspondiente a cada ruta hija. En ejecución, este componente se
cambiará por el que sea correspondiente a la URL actual.

¡Vamos a probar! Ya tenemos nuestro navbar y footer renderizando en cada página.

**Realizado por :** Sammy Gigi Cantoral Montejo (sgcm14)

<img src ="https://raw.githubusercontent.com/sgcm14/sgcm14/main/sammy.jpg" width="200">