import React from 'react';
import './ProductoCardDetalle.css';

const ProductoCardDetalle = ({ id,nombre, img, precioOriginal, precioFinal, descuento, cantidad,caracteristicas }) => {
  if (!id) return <div className="no-producto">Selecciona un producto para ver detalles.</div>;

  return (
    <div className="contenedor-producto">
      <div className="imagen">
        <img src={img} />        
      </div>

      <div className="detalles">
        <h2>{nombre}</h2>
        <p>Caracteristicas</p>
        <ul className="specs">
          {caracteristicas.map((item, index) => (
            <li key={index}>• {item}</li>
          ))}
        </ul>      
        <div className="seccion-precio">
          <span className="descuento">{descuento}%</span>
          <span className="precio-final">${precioFinal.toLocaleString()}</span>
          <span className="precio-original">${precioOriginal.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductoCardDetalle;