import Guitarra from "./guitarra";

export  default function ListadoGuitarras({guitarras}) {
  console.log('Listado Guitarras',guitarras);
  return (
     <>
;<h2 className='heading'> Nuestra coleccion</h2>

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
     </>
  )
}

