import React from 'react';
import Nombre from "./Nombre"
import Sexo from "./Sexo"
import Patas from "./Patas"
import Color from "./Color"

const Descripcion = () => {
	return (
		<>
			<Nombre />
			<Sexo />
			<Patas />
			<Color />

			<div className="container my-3  form-control"
				style={{ backgroundColor: "silver" }}>
				<h1 className="text-center">DATOS DE LA MASCOTA </h1>
				<ol>
					<li>Nombre:</li>
					<li>Sexo:</li>
					<li>Número de patas:</li>
					<li>Color:</li>
					<li>Nombre:</li>
				</ol>

			</div>
		</>

	)

};
export default Descripcion;

