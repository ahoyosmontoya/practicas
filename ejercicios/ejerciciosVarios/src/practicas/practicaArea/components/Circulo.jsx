import React, { useState } from 'react'


const Circulo = () => {
	const [radio, setRadio] = useState();
	const [calculoC, setCalculoC] = useState();

	const pi = 3.1416;
	const ImputRadio = (e) => {
		setRadio(e.target.value)
	}
	const calculoCirculo = () => {
		const elevado = Math.pow(radio, 2)

		setCalculoC(pi * elevado)
	}
	return (
		<div className="container mt-5 text-center">
			Calcular el area del Circulo
			<input
				placeholder="digite el radio"
				className="form-control mt-3 "
				type="number"
				onChange={ImputRadio}>
			</input>
			<button
				className="form-control mt-3 btn btn-primary"
				onClick={calculoCirculo}
			>Calcular Area :
			</button>{calculoC}


		</div>
	)
};
export default Circulo;

