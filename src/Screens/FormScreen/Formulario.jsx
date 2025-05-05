import React from "react";
import Campo from "../../Components/Campo/Campo";
import Boton from "../../Components/Boton/Boton";
import CampoPassword from "../../Components/CampoPassword/CampoPassword";
import "./Formulario.css"


const Formulario = () => {
  return (
    <div className="Contenedor">
      <div className="Formulario">
        <h2>Crear una cuenta</h2>
        <p>Ingresa tus datos para registrarte</p>
        
        <form>
          <div className="GrupoEntrada">
            <Campo htmlfor="Nombre" id="Nombre" tipo="text" texto="Primer Nombre" placeholder="john" />
            <Campo htmlfor="Apellido" id="Apellido" tipo="text" texto="Apellido" placeholder="doe" />
          </div>

          <Campo htmlfor="Email" id="Email" tipo="email" texto="Email" placeholder="john.doe@example.com" />
          <Campo htmlfor="Tel" id="Tel" tipo="tel" texto="Telefono" placeholder="+1 (555) 000-000" />

          <CampoPassword texto="Contraseña" placeholder="Password" />
          <CampoPassword texto="Confirmar Contraseña" placeholder="Confirmar Password" />

          <Boton texto="Registrar" />       
        </form>
      </div>
    </div>
  );
};

export default Formulario;
