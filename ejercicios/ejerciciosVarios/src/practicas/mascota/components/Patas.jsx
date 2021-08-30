import React from 'react';
import Form from "react-bootstrap/Form"
import Nombre from "./Nombre"
import Sexo from "./Sexo"


const Patas = () => {

	return (
		<>
			<Nombre />
			<Sexo />

			<div className="container my-3  form-control"
				style={{ backgroundColor: "silver" }}>
				<h1 className="text-center"># DE PATAS </h1>

				<form>
					<Form.Select
						aria-label="Floating label select example "
						className="my-3"
					//onChange={selectAreaType}
					>
						<option>-</option>
						<option value="2" > 2 patas</option>
						<option value="4" > 4 patas</option>
						<option value="mas" >mas de 4 patas</option>
					</Form.Select>
					<div>
						<button
							className="btn btn-primary my-4">Next</button>
					</div>
				</form>
			</div>
		</>

	)

};
export default Patas;