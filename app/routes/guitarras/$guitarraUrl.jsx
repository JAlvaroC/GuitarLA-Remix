
import { useLoaderData, useOutletContext } from '@remix-run/react';
import { useState } from 'react';
import { getGuitarra } from '~/models/guitarras.server'
// import styles from '~/styles/guitarra.css'

export async function loader({params}){
    // console.log(request);
    // console.log(params);
    const {guitarraUrl}=params
    // console.log('impreso',guitarraUrl)
    const guitarra=await getGuitarra(guitarraUrl)
    // console.log(guitarra);
    // return guitarra.data[0].attributes.nombre
    if (guitarra.data.length === 0) {
      throw new Response('',{
        status:404,
        statusText:'Guitarra No Encontrada'
      })
    }
    return guitarra
}
// NOTE: {{userLoaderData} remi-run or react-dom Este proporciona el valor devuelto por su cargado de ruta .
export function meta({data}){
  // console.log('meta',data.data);
  if (!data) {
    return{
      title:'GuitarLA- Guitarra No encontrada',
      descripcion:`Guitarras , venta de guitarras,guitarra no encontrada`
      
    }
  }
  return {
    title:`GuitarLA - ${data?.data[0]?.attributes.nombre}`,
    descripcion:`Guitarras , venta de guitarras,guitarra ${data.data[0].attributes.nombre}`
  }
}
// export function links(){
//   return[
//     {
//       rel:'stylesheet',
//       href:styles
//     }
//   ]
// }

function Guitarra() {

    // const {sumar}=useOutletContext()
    const {agregarCarrito}=useOutletContext()
    const [cantidad, setCantidad] = useState(0)
    const guitarra=useLoaderData();
    // console.warn( guitarra.data[0].attributes.nombre)
    // console.log( guitarra.data[0].attributes)

    const {nombre,descripcion,Imagen,precio} = guitarra.data[0].attributes
    // console.log(Imagen.data.attributes.url)
    // console.log({guitarra.data[0].atrtibutes});
    // console.warn(nombre)
    const handleSubmit = e => {
       e.preventDefault();
       if (cantidad<1){
         alert('Debes seleccionar una cantidad')
         return
       }

       const guitarraSeleccionada={
        id:guitarra.data[0].id,
        imagen:Imagen.data.attributes.url,
        nombre,
        precio,
        cantidad,
        // nombre:


        
       }
      //  console.log(guitarraSeleccionada);
       
      agregarCarrito(guitarraSeleccionada)
    };
    // sumar()

  return (
    <div className='guitarra'>
      <img className='imagen' src={Imagen.data.attributes.url}
       alt={`Imagen de la guitarra ${nombre}`}/>
      <div className='contenido'>
          <h3 className='nombre'>{nombre}</h3>
          <p className='texto'> {descripcion} </p>
          <p className='precio'>{precio}</p>
          <form onSubmit={handleSubmit} className='formulario'>
            <label htmlFor="cantidad">Cantidad</label>
            <select 
              // NOTE: Hay varias formas de recibir un evento y convertirlo en entero (+,parseInt,Number-...etc)
              // onChange={e=>setCantidad(parseInt(e.target.value))}
              onChange={e=>setCantidad(+e.target.value)}
            id="cantidad">
              <option value="">--Seleccione--</option>
              <option value="1" id="">1</option>
              <option value="2" id="">2</option>
              <option value="3" id="">3</option>
              <option value="4" id="">4</option>
              <option value="5" id="">5</option>
            </select>
            <input
              type="submit"
              value="Agregar al carrito"
            />

          </form>
      </div>
    </div>
  )
}

export default Guitarra