import React, { useState, useEffect } from 'react';

import AddComanda from './AddComanda/AddComanda';

const Comandas = () => {
  // Usamos un useState para almacenar la info de todas las comandas en un array
  const [comandas, setComandas] = useState([]);

  // Creamos una función que haga la petición al backend para obtener las comandas
  const getComandas = async function() {
    // Hacemos una petición GET con fetch
    const comandasInfo = await fetch('http://localhost:3001/comanda');
    // Procesamos la información recibida para que sea manipulable por JavaScript, con
    // el método .json()
    const parsedInfo = await comandasInfo.json();

    // Una vez tenemos la información, la guardamos en el estado del componente
    setComandas(parsedInfo.data);
  };

  // Utilizamos el useEffect para que se ejecuta 1 sola vez, llamando a la función getComandas
  useEffect(() => {
    getComandas();
  }, []);
  
  return (
    <div>
      <h1>Comandas</h1>
      <h2>Comandas Registradas</h2>
      {
        // Como la variable del estado "comandas" contiene un array, podemos utilizar un .map para
        // recorrer sus elementos y pintarlos. El .map nos permite también obtener la posición (index)
        // de cada elemento en el array, lo cual es útil para asignarle una 'key' única a cada elemento
        comandas.map( (comanda, index) => {
          return (
            <div className='comanda' key={index}>
              <h4>Comanda {comanda.id}</h4>
              <p>Camarero: {comanda.camarero}</p>
              <p>Productos: {comanda.producto}</p>
            </div>
          )
        } )
      }
      <div>
        <h2>Añadir nueva comanda</h2>
        <AddComanda updateList={getComandas} />
      </div>
    </div>
  )
}

export default Comandas;
