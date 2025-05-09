import React, { useState } from "react";
import Campo from "../../Components/Campo/Campo";
import Boton from "../../Components/Boton/Boton";
import CampoPassword from "../../Components/CampoPassword/CampoPassword";
import "./Formulario.css"


const Formulario = () => {

  const [valoresFormEstado, setValoresFormEstado] = useState()

  const datosForm = { 
    Nombre: "Nombre",
    Apellido:"Apellido",
    Email: "Email",
    Telefono:"Tel"
  }

  const handleSubmitContactoForm = (event) => {
    event.preventDefault()
    event.target
    console.dir(event.target.className)

    const datosContactoForm = new FormData(event.target)
    
    const contactoFormValores = {}

    for (let campo in datosForm){
      contactoFormValores[datosForm[campo]] = datosContactoForm.get(datosForm[campo])
    }
    setValoresFormEstado(contactoFormValores)
  }
  console.log(valoresFormEstado)

  return (
    <div className="Contenedor">
      <div className="Formulario">
        <h2>Crear una cuenta</h2>
        <p>Ingresa tus datos para registrarte</p>
        
        <form onSubmit={handleSubmitContactoForm}>
          <div className="GrupoEntrada">
            <Campo htmlfor="Nombre" id="Nombre" tipo="text" texto="Primer Nombre" placeholder="john" name={datosForm.Nombre}/>
            <Campo htmlfor="Apellido" id="Apellido" tipo="text" texto="Apellido" placeholder="doe" name={datosForm.Apellido} />
          </div>

          <Campo htmlfor="Email" id="Email" tipo="email" texto="Email" placeholder="john.doe@example.com" name={datosForm.Email} />
          <Campo htmlfor="Tel" id="Tel" tipo="tel" texto="Telefono" placeholder="+1 (555) 000-000" name={datosForm.Telefono} />

          <CampoPassword texto="Contraseña" placeholder="Password" />
          <CampoPassword texto="Confirmar Contraseña" placeholder="Confirmar Password" />

          <Boton texto="Registrar" />       
        </form>
      </div>
    </div>
  );
};

export default Formulario;
