import React from 'react';
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Nombre from "./Nombre"
import Sexo from "./Sexo"
import Patas from "./Patas"




const Color = () => {
	return (
		<>
			<Nombre />
			<Sexo />
			<Patas />

			<div className="container mt-5 my-3 form-control"
				style={{ backgroundColor: "silver" }}>
				<h1 className="text-center">COLOR </h1>


				<Form.Group as={Row} className="mb-3">
					<Col sm={2}>
						<Form.Check
							type="radio"
							label="Negro"
							name="formHorizontalRadios"
							id="formHorizontalRadios1"
						/>
						<Form.Check
							type="radio"
							label="Blanco"
							name="formHorizontalRadios"
							id="formHorizontalRadios2"

						/>
						<Form.Check
							type="radio"
							label="Blanco-Negro"
							name="formHorizontalRadios"
							id="formHorizontalRadios3"

						/>
						<Form.Check
							type="radio"
							label="Cafe"
							name="formHorizontalRadios"
							id="formHorizontalRadios4"

						/>
						<Form.Check
							type="radio"
							label="Gris"
							name="formHorizontalRadios"
							id="formHorizontalRadios5"

						/>
					</Col>
				</Form.Group>

				<div>
					<button
						className="btn btn-primary my-4">Next</button>
				</div>
			</div >
		</>

	)

};
export default Color;