// import React from 'react'
import { Outlet, 
  useOutletContext
} from '@remix-run/react';
// import Guitarra from '~/components/guitarra';
// import ListadoGuitarras from '~/components/listado-guitarras';
// import {getGuitarras} from '~/models/guitarras.server'
// import React from 'react'
import styles from '~/styles/guitarra.css'

// TODO: <OUTLET /> PERMITE INYECTAR CONTENIDO EN OTRO COMPONENTE
// FIXME: <INVESTIGAR > SOBRE OUTLET
//  *! todo: this is warning coments or alert coment  (alerta o advertencia)
//  * TODO:  this is todo i will do it later1 (aviso o actividad para despues)
//  / this is userbuld custom coment (quien realizo el comentario)
//  *? this query coment sholud we use or not (una pregunta)
//  /* this is very important coment */( comentario muy importante)

// del  this coment is deleted
// done this coment done 
// COLLAPSE
// * @param 
// useFunc asdasdasdasd

//BUG ESTO ES UN PROBLEMA


// export  function meta() {
//   return {
//     title:'GuitarLA - Tienda de Guitarras',
//     description:'GuitarraLA -Nuestra coleecion publicada'
//   }
// }
// NOTE: <OUTLET/> PERMITE INYECTAR CONTENIDO EN OTRO COMP
//  ARRIBA: CSOMO ESTAS 
export  function links() {
  return [
    {
      rel:'stylesheet',
      href:styles
    }
  ]
}

// export async function loader(){
//   const guitarras=await getGuitarras()
//   console.log('tienda data',guitarras);
//   return guitarras.data
// }

function Tienda() {

  // const data=useOutletContext()
  // console.log(data)

  // const guitarras=useLoaderData()

  // console.log('Tienda',guitarras)
  return (
    <main className='contenedor'>
        {/* <h2 className='heading'>
          Nuestra Coleccion
        </h2>
          {
            guitarras?.length &&(
              <div className='guitarras-grid'>
                  {
                    guitarras.map(guitarra=>(
                      <Guitarra
                        key={guitarra?.id}
                        guitarra={guitarra?.attributes}
                      />
                    ))
                  }
              </div>
            )
          }
      */}
      {/* <ListadoGuitarras
      guitarras={guitarras}
      /> */}
      <Outlet
      
      context={useOutletContext()}
      />

    </main>
    )
}

export default Tienda