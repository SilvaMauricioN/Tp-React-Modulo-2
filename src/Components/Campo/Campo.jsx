import React from "react";
import "./Campo.css"

const Campo = ({htmlfor,id, tipo, texto, placeholder,name }) => {
  return (
    <div className="CampoEntrada">
      <label className=""
        htmlFor={htmlfor}
        >{texto}
      </label>

      <input
        id={id}         
        type={tipo}
        placeholder={placeholder}
        name={name}
        className=""        
      />
    </div>  
  );
};

export default Campo;
