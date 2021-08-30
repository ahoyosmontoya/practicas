import React from 'react';
import Sexo from "./Sexo"


const Nombre = () => {

	// const [nombre, setNombre] = useState();
	// const introName = (e) => {
	// 	setNombre(e.target.value)
	// }

	// const [next1, setNext1] = useState()
	// const Next = () => {
	// 	{
	// 		nombre ? <Sexo nombre={nombre} /> : <> </>
	// 	}
	// }
	return (
		<div className="container mt-5 my-3 text-center form-control"
			style={{ backgroundColor: "silver" }}>
			<h1 className="text-center">NOMBRE </h1>


			<input
				type="text row "
				placeholder="digite el mombre de la mascota "
				className="col-md-3 mt-3"
			// onChange={introName}
			/>
			<div>
				<button
					className="btn btn-primary my-4"
				// onClick={Next}
				>Next</button>

			</div>
			<Sexo />
		</div>
	)

};
export default Nombre;