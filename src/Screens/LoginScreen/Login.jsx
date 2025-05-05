import React from 'react';
import Campo from "../../Components/Campo/Campo";
import Boton from "../../Components/Boton/Boton";
import CampoPassword from "../../Components/CampoPassword/CampoPassword";
import "./Login.css";

const  Login = () => {
  return (
    <div className='Contenedor-Login'>
        <div className="Login">
            <h2>Iniciar Sesión</h2>
            <form>
                <Campo htmlfor="Email" id="Email" tipo="email" texto="Email" placeholder="john.doe@example.com" />
                <CampoPassword texto="Contraseña" placeholder="Password" />

                <Boton texto="Iniciar Sesión" /> 
            </form>
        </div>
    </div>
  );
}

export default Login;