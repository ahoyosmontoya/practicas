import React, { useState } from 'react'


const Triangulo = () => {

	const [base, setBase] = useState(0);
	const [calculoT, setCalculoT] = useState();
	const [altura, setAltura] = useState(0);

	const ImputBase = (e) => {
		setBase(e.target.value)
	}
	const ImputAltura = (e) => {
		setAltura(e.target.value)
	}

	const calculoTriangulo = () => {

		setCalculoT(base * altura / 2)
	}


	return (
		<div className="container text-center mt-5">
			Calcular el area del Triangulo

			<div className="container text-center col-md-5 my-10">
				<input
					placeholder="digite el base"
					className="form-control mt-3 "
					type="number"
					onChange={ImputBase}
				></input>
				<input placeholder="digite altura"
					className="form-control mt-3 col-md-8 "
					type="number"
					onChange={ImputAltura}
				></input>
				<button
					className="form-control mt-3 btn btn-primary"
					onClick={calculoTriangulo}
				>Calcular Area: </button>{calculoT}
			</div>
		</div>
	)
};
export default Triangulo;