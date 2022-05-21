import React, { useState } from 'react';

const AddComanda = ({ updateList }) => {

  const [newComanda, setNewComanda] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    // // Forma 1
    // const comandaToAdd = {
    //   [name]: value
    // };
    // const nuevoEstadoTemporal = {...newComanda, comandaToAdd};
    // setNewComanda(nuevoEstadoTemporal);

    // Forma 2
    setNewComanda((values) => ({...values, [name]: value}));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('envío formulario', event);

    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const dataToSend = JSON.stringify(newComanda);

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: dataToSend,
      redirect: 'follow'
    };

    const response = await fetch('http://localhost:3001/comanda/', requestOptions);
    console.log('Response is', response);

    updateList();

  };

  return (
    <>
    <h3>AddComanda</h3>
    <form onSubmit={handleSubmit}>
      <label>
        Camarero:
        <input type="text" name="camarero" onChange={handleChange} />
      </label><br/>
      <label>
        Productos:
        <input type="text" name="productos" onChange={handleChange} />
      </label>
      <br/>
      <input type="submit" value="Añadir comanda" />
    </form>
    </>
  )
}

export default AddComanda;