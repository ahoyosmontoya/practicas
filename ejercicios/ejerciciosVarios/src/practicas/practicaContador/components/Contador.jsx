import React, { useState } from 'react';

const Contador = () => {

  const [count, setCount] = useState(0);
  const setContador = () => {
    setCount(count + 1)

  }
  return (
    <div className="container my-5 text-center">

      <p>Usted ha clickeado {count} Veces</p>
      <button onClick={setContador} className="btn btn-danger">
        Click aqui
      </button>
    </div>
  );
};
export default Contador