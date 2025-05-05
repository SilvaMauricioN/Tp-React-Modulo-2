import React from 'react'
import ProductCart from '../../Components/ProductCart/ProductCart'
import { getProductById } from '../../services/productService'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'


import './DetalleProductoScreen.css'

const DetalleProductoScreen = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchProduct = async () => {
        try {
            const res = await getProductById(id)
            if (res) {
                setProduct(res)
            } else {
                setError('Producto no encontrado')
            }
        } catch (err) {
            setError('Error al cargar el producto')
        } finally {
            setLoading(false)
        }
    }

    fetchProduct()
  }, [id])


  if (loading) return <p>Cargando...</p>
  if (error) return <p>{error}</p>
  if (!product) return null

  // const productData = {
  //   nombre: 'Smart TV 42" Sansei Android TDS2442FICH',
  //   img: "https://http2.mlstatic.com/D_NQ_NP_829761-MLU72675779829_112023-O.webp", 
  //   precioOriginal: 419.999,
  //   precioFinal: 294.999,
  //   descuento: 30,
  //   cantidad: 15,
  // };

  return (
    <div className='Contenedor'>
        <h1>Detalle de producto </h1>
        <ProductCart {...product}></ProductCart>
    </div>
  )
}
export default DetalleProductoScreen