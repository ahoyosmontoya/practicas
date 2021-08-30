import React from 'react';
import Row from "react-bootstrap/Row"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Nombre from "./Nombre"




const Sexo = () => {
	return (
		<>
			<Nombre />

			<div className="row container  form-control"
				style={{ backgroundColor: "silver" }}>
				<h1 className="text-center">SEXO </h1>


				<Form.Group as={Row} className="mb-3" >
					<Col sm={2}>
						<Form.Check
							label="Hembra"
							name="formHorizontalRadios"
							id="formHorizontalRadios1" />
						<Form.Check
							label="Macho"
							name="formHorizontalRadios"
							id="formHorizontalRadios1"
						/>
					</Col>
				</Form.Group >

				<div>
					<button
						className="btn btn-primary my-4">Next</button>
				</div>
			</div>
		</>
	)
};
export default Sexo;