import React from 'react'
import { useState } from 'react';


const Formulario = () => {

  //se hace hook con un objeto  
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [cedula, setCedula] = useState("")
  const [enviar, setEnviar] = useState("")


  const handleImputChange1 = (e) => {
    setNombre(e.target.value)
  }
  const handleImputChange2 = (e) => {
    setApellido(e.target.value)

  }
  const handleImputChange3 = (e) => {
    setCedula(e.target.value)

  }

  const enviarDatos = (e) => {
    setEnviar(e.target.value)
    //para evitar el procesamiento autom automatico de losformularios

    Event.preventDefault(e);
  }

  return (
    <>
      <div className="text-center"> Formulario 1</div>
      <form className="row" onSubmit={enviarDatos}>
        <div className="col-md-3 mt-5" >
          <input
            placeholder="Ingrese el nombre"
            className="form-control"
            type="text"
            name="nombre"
            onChange={handleImputChange1}
          ></input>
        </div>
        <div className="col-md-3  mt-5" >
          <input
            placeholder="Ingrese el apellido"
            className="form-control"
            type="text"
            name="apellido"
            onChange={handleImputChange2}

          ></input>
        </div>
        <div className="col-md-3  mt-5" >
          <input
            placeholder="Número de cedula"
            className="form-control"
            name="cedula"
            type="number"
            onChange={handleImputChange3}

          ></input>
        </div>
        <div className="col-md-3  mt-5" >
          <button className="btn btn-primary" type="submit" >Enviar</button>
        </div>


      </form>

      <h4>Datos: {nombre}  {apellido} {cedula} {enviar}</h4>

    </>
  )

};

export default Formulario;