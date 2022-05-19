import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from '../Home/Home';
import Comandas from '../Comandas/Comandas';

const Main = () => {
  return (
    <div>
      <h1>Restaurante</h1>
      <p>Bienvenido a la aplicación de gestión de Comandas</p>
      {/* Para poder hacer uso de lo que viene a continuación tienes que haber
      instalado antes react-router-dom: npm i react-router-dom
      E importar los módulos correspondientes, como ves en la línea 2 de este archivo */}
      <BrowserRouter>
        <Routes>
          {/* Cada una de las Route es una dirección a la que vamos a poder acceder.
          --> path indica la ruta. / es la raíz. Si ponemos 'comandas' significa que cuando
          alguien acceda a localhost:3000/comandas estará accediendo a esa ruta.
          --> element es el componente que se va a mostrar en esa ruta */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="comandas" element={<Comandas />} />
        </Routes>
        <div className='menu'>
          {/* Cuando usamos react-router-dom, los enlaces no los ponemos con la etiqueta <a href...>
          de HTML, ya que esto provoca que la página recargue toda la información y no queremos eso.
          En su lugar, usamos la etiqueta <Link to="ruta">Texto Enlace</Link> */}
          <ul>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="comandas">Comandas</Link> </li>
          </ul>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default Main;
