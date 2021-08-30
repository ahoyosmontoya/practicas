import React from 'react';

const Observacion = ({ nombre, x }) => {
	return (

		<div className="container mt-3">
			<label>
				Bienvenido: {nombre}
			</label>
			{x}
		</div>
	);
};
export default Observacion;