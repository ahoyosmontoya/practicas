import React, { useState } from 'react'


const Cuadrado = () => {
	const [lado1, setLado1] = useState();
	const [lado2, setLado2] = useState();
	const [calculoCu, setCalculoCu] = useState();

	const InputSide1 = (e) => {
		setLado1(e.target.value)
	}
	const InputSide2 = (e) => {
		setLado2(e.target.value)
	}
	const calculoCuadrado = () => {
		setCalculoCu(lado1 * lado2)
	}

	return (

		<div className="container mt-5 text-center col-md-6">
			Calcular el area del Cuadrado
			<input placeholder="Digite lado 1"
				className="form-control mt-3 "
				type="number"
				onChange={InputSide1}
			></input>
			<input placeholder="Digite lado 2"
				className="form-control mt-3 "
				type="number"
				onChange={InputSide2}
			></input>
			<button className="form-control mt-3 btn btn-primary"
				onClick={calculoCuadrado}
			>Calcular Area : </button>{calculoCu}


		</div>
	)
};
export default Cuadrado;
