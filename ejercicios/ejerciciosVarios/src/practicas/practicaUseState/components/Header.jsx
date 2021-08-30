import React from 'react';
import { useState } from 'react';
import Observacion from "./Observacion";


const Header = () => {

	const [nombre, setNombre] = useState();
	const InputName = (e) => {
		setNombre(e.target.value);
	}

	const [welcome, setWelcome] = useState();
	const checkHello = (e) => {
		setWelcome(e.target.checked);
		// aqui la funcion debe actuar sobre el cambio en e checkbox
	}

	return (
		<div className="container mt-8 text-center">
			<input type="text" placeholder="digite Nombre" onChange={InputName}></input >
			<div className="mt-3 container">
				<input type="Checkbox" onChange={checkHello} ></input>  show Welcome
				{/* muestro nombre, pero no el text area */}
				{/* <div> {nombre}</div> */}
			</div>
			{
				welcome ? <Observacion nombre={nombre} /> : <> </>
			}

		</div >
	);
}; export default Header;