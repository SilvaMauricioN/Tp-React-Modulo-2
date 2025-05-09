import React from "react";
import Iconos from "../Iconos/Iconos";
import "./CampoPassword.css"

const CampoPassword = ({ htmlfor,id,texto,placeholder }) => {
  
	return (
	<div className="ContenedorPassword">
		<label htmlFor={htmlfor} className="TituloCampo">{texto}</label>
		<input id={id} type="password" placeholder={placeholder} className="EntradaPassword"/>
		<button type="button" className="BotonOjo">
			<Iconos.EYE className="Icono"/>
		</button>		
	 </div>
	);
}
export default CampoPassword; 
