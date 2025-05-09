import React from "react";
import "./Boton.css"

const Boton = ({ texto }) => {
  return <button type="submit" className="BotonRegistro">{texto}</button>;
};

export default Boton;