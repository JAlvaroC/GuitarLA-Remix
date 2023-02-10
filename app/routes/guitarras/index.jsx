// import React from 'react'
import { useLoaderData } from '@remix-run/react';
// import Guitarra from '~/components/guitarra';
import ListadoGuitarras from '~/components/listado-guitarras';
import {getGuitarras} from '~/models/guitarras.server'
// import React from 'react'
// import styles from '~/styles/guitarra.css'


export  function meta() {
  return {
    title:'GuitarLA - Tienda de Guitarras',
    description:'GuitarraLA -Nuestra coleecion publicada'
  }
}

// export  function links() {
//   return [
//     {
//       rel:'stylesheet',
//       href:styles
//     }
//   ]
// }

export async function loader(){
  const guitarras=await getGuitarras()
  console.log('tienda data',guitarras);
  return guitarras.data
}

function Tienda() {

  const guitarras=useLoaderData()

  console.log('Tienda',guitarras)
  return (
    
    <ListadoGuitarras
    guitarras={guitarras}
    />


    )
}

export default Tienda