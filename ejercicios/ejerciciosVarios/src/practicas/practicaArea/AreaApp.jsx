import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Circulo from './components/Circulo';
import Triangulo from './components/Triangulo';
import Cuadrado from './components/Cuadrado';


const AreaApp = () => {
	const [areaOption, setAreaOption] = useState("")

	const selectAreaType = (e) => {
		setAreaOption(e.target.value)
	}

	const renderArea = () => {

		switch (areaOption) {
			case "Triangulo":
				return <Triangulo />

			case "Cuadrado":
				return <Cuadrado />

			case "Circulo":
				return <Circulo />

			default:
				return <div>No se ha hecho la  selección</div>
		}
	}

	return (
		<div className="container text-center col-md-6 ">
			"Introduce la figura a la que quieres calcular el area: Triangulo, Retangulo o Circulo"
			<Form.Select aria-label="Floating label select example " className="mt-10" onChange={selectAreaType}>
				<option>-</option>
				<option value="Triangulo" >Triangulo</option>
				<option value="Cuadrado" >Cuadrado</option>
				<option value="Circulo" >Circulo</option>
			</Form.Select>
			{
				renderArea()
			}
			<div className="mt-5">las areas fueron:</div>
			<ol className="mt-2">
				<li>triangulo :</li>
				<li>cuadrado :</li>
				<li>circulo :</li>
			</ol>

		</div >
	);

};
export default AreaApp;