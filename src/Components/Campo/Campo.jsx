import React from "react";
import "./Campo.css"

const Campo = ({htmlfor,id, tipo, texto, placeholder }) => {
  return (
    <div className="CampoEntrada">
      <label className=""
        htmlfor={htmlfor}
        >{texto}
      </label>

      <input
        id={id}         
        type={tipo}
        placeholder={placeholder}
        className=""        
      />
    </div>  
  );
};

export default Campo;
