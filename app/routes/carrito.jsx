// import { useOutletContext } from '@remix-run/react'
// import { useEffect, useState } from 'react'
// // import { useOutletContext } from 'react-router-dom'
// import {ClientOnly} from  'remix-utils'


// import styles from'~/styles/carrito.css'

// export function links(){
//     return[
//       {
//       rel:'stylesheet',
//       href:styles
//     }
      
//   ]
// }
// export  function meta() {
// return{
//   title:'GuitarraLA - Carrito de compras',
//   description:'Venta de Guitarras, música, blog carrito de compras, tienda',
// }
// };


// export default function Carrito() {
  
//   const {carrito,actualizarCantidad,eliminarGuitarra} = useOutletContext()
//   // console.log('mostrar',carrito);
//   const [total, setTotal] = useState(0)
  

//   useEffect(()=>{
//     const calcularTotal = carrito.reduce((total,producto)=>
//       total+(producto.cantidad*producto.precio),0
//     )
//     setTotal(calcularTotal)
    
//   },[carrito])

//   return (
//     <ClientOnly fallback={'....cargando'}>
//       {
//         ()=>(

    

//     <main className='contenedor'>
//       <h1 className='heading'> Carrito de compras</h1>
//       <div className='contenido'>
//         <div className='carrito'>
//           <h2>Articulos</h2>
//           {carrito?.length===0
//           ?
//             'Carrito Vacio'
//           :(
//           carrito?.map(producto=>
//               <div key={producto.id} className="producto">
//                 <div>
//                   <img src={producto.imagen} alt={`Imagen del producto ${producto.nombre}`}/>
//                 </div>
//                 <div>
//                   <p className="nombre">{producto.nombre}</p>

//                   <p className="precio">$
//                     <span>{producto.precio}</span>
//                   </p>
//                   <p className="cantidad">
//                     Cantidad: 
//                     </p>
//                     {/* <span>{producto.cantidad}</span> */}
//                     <select
//                       value={producto.cantidad}
//                       className="select"
//                       onChange={e=>actualizarCantidad({
//                         cantidad:+e.target.value,
//                         id:producto.id
//                       })}
//                     >
                      
//                       <option value="1">1</option>
//                       <option value="2">2</option>
//                       <option value="3">3</option>
//                       <option value="4">4</option>
//                       <option value="5">5</option>
//                     </select>
                 
//                   <p className="precio">
//                     SubTotal:$
//                     <span>{producto.precio*producto.cantidad}</span>
//                   </p>
//                 </div>
//                 <button
//                 onClick={()=>eliminarGuitarra(producto.id)}
//                 type='button'
//                 className='btn_eliminar'
//                 >
//                   X
//                 </button>
//               </div>
//               )
//             )}
//         </div>
//       </div>
//       <aside className='resumen'>
//         <h3>Resumen del Pedido</h3>
//         <p>Total a pagar: ${total}</p>
//       </aside>
//     </main>
//         )
//       }

//     </ClientOnly>
//   )
// }
// import { useOutletContext } from '@remix-run/react'
// import { useEffect, useState } from 'react'
// // import {ClientOnly } from 'remix-utils'
// // import { useOutletContext } from 'react-router-dom'

// import styles from'~/styles/carrito.css'

// export function links(){
//     return[
//       {
//       rel:'stylesheet',
//       href:styles
//     }
      
//   ]
// }
// export  function meta() {
// return{
//   title:'GuitarraLA - Carrito de compras',
//   description:'Venta de Guitarras, música, blog carrito de compras, tienda',
// }
// };


// export default function Carrito() {
  
//   const {carrito,actualizarCantidad,eliminarGuitarra} = useOutletContext()
//   // console.log('mostrar',carrito);
//   const [total, setTotal] = useState(0)
  

//   useEffect(()=>{
//     const calcularTotal = carrito.reduce((total,producto)=>
//       total+(producto.cantidad*producto.precio),0
//     )
//     setTotal(calcularTotal)
    
//   },[carrito])

//   return (
   
//     <main className='contenedor'>
//       <h1 className='heading'> Carrito de compras</h1>
//       <div className='contenido'>
//         <div className='carrito'>
//           <h2>Articulos</h2>
//           {carrito?.length===0
//           ?
//             'Carrito Vacio'
//           :(
//           carrito?.map(producto=>
//               <div key={producto.id} className="producto">
//                 <div>
//                   <img src={producto.imagen} alt={`Imagen del producto ${producto.nombre}`}/>
//                 </div>
//                 <div>
//                   <p className="nombre">{producto.nombre}</p>

//                   <p className="precio">$
//                     <span>{producto.precio}</span>
//                   </p>
//                   <p className="cantidad">
//                     Cantidad: 
//                     </p>
//                     {/* <span>{producto.cantidad}</span> */}
//                     <select
//                       value={producto.cantidad}
//                       className="select"
//                       onChange={e=>actualizarCantidad({
//                         cantidad:+e.target.value,
//                         id:producto.id
//                       })}
//                     >
                      
//                       <option value="1">1</option>
//                       <option value="2">2</option>
//                       <option value="3">3</option>
//                       <option value="4">4</option>
//                       <option value="5">5</option>
//                     </select>
                 
//                   <p className="precio">
//                     SubTotal:$
//                     <span>{producto.precio*producto.cantidad}</span>
//                   </p>
//                 </div>
//                 <button
//                 onClick={()=>eliminarGuitarra(producto.id)}
//                 type='button'
//                 className='btn_eliminar'
//                 >
//                   X
//                 </button>
//               </div>
//               )
//             )}
//         </div>
//       </div>
//       <aside className='resumen'>
//         <h3>Resumen del Pedido</h3>
//         <p>Total a pagar: ${total}</p>
//       </aside>
//     </main>
//   )
// }


import { useEffect, useState } from 'react'
import { useOutletContext } from '@remix-run/react'
import { ClientOnly } from 'remix-utils'
import styles from '~/styles/carrito.css'

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export function meta() {
    return {
        title: 'GuitarLA - Carrito de Compras',
        description: 'Venta de guitarras, música, blog, carrito de compras, tienda'
    }
}

function Carrito() {
    const [total, setTotal] = useState(0)
    const { carrito, actualizarCantidad, eliminarGuitarra } = useOutletContext()

    useEffect(() => {
        const calculoTotal = carrito.reduce( (total, producto) => total + (producto.cantidad * producto.precio), 0)
        setTotal(calculoTotal)
    }, [carrito])

    return (
        <ClientOnly fallback={'cargando...'}>
            {() => (
            <main className="contenedor">
                <h1 className="heading">Carrito de Compras</h1>

                <div className="contenido">
                    <div className='carrito'>
                        <h2>Articulos</h2>

                        {carrito?.length === 0 ? 'Carrito Vacio' : (
                            carrito?.map( producto => (
                                <div key={producto.id} className='producto'>
                                    <div>
                                        <img src={producto.imagen} alt={`Imagen del producto ${producto.nombre}`} />
                                    </div>

                                    <div>
                                        <p className='nombre'>{producto.nombre}</p>
                                        <p>Cantidad:</p>

                                        <select
                                            value={producto.cantidad}
                                            className="select"
                                            onChange={ e => actualizarCantidad({
                                                cantidad: +e.target.value,
                                                id: producto.id
                                            })}
                                        >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>

                                        <p className='precio'>$ <span>{producto.precio}</span></p>
                                        <p className='subtotal'>Subtotal: $ <span>{producto.cantidad * producto.precio}</span></p>
                                    </div>

                                    <button
                                        type='button'
                                        className='btn_eliminar'
                                        onClick={() => eliminarGuitarra(producto.id) }
                                    >X</button>
                                </div>
                            ))
                        )}
                    </div>

                    <aside className="resumen">
                        <h3>Resumen del Pedido</h3>
                        <p>Total a pagar: ${total}</p>
                    </aside>
                </div>
            </main>
            )}
        </ClientOnly>
    )
}

export default Carrito
