import {
    Meta,
    Links,
    Outlet,
    Scripts,
    LiveReload,
    useCatch,
    Link

}from '@remix-run/react'
import { useEffect, useState } from 'react'
import Header from '~/components/header'
import styles from '~/styles/index.css'
import Footer from './components/footer'

export  function meta(){
    return(
        {
            charset:'utf-8',
            title:'GuitarLa-Remix',
            viewport:'width=device-width,initial-scale=1'
        }
    )
}

export function  links(params) {
    return [
    {
        rel:'stylesheet',
        href:'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
    }   ,
    {
        rel:'stylesheet',
        href: styles
    },{
        rel:'preconnect',
        href:'https://fonts.googleapis.com'
    },{
        rel:'preconnect',
        href:'https://fonts.gstatic.com',
        crossOrigin:"true"
    },{
        rel:'preconnect',
        href:'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap'
    }]
}

export default function App() {
// function sumar(){
//     console.log(2+2)
// }
    const carritoLS=
    typeof window !=='undefined'
    ?JSON.parse(localStorage.getItem('carrito'))??[]
    :null
    const [carrito,setCarrito] =useState(carritoLS)

    useEffect(() => {
        //   console.log('use effect');
        // NOTE: Localstorage es una API que vive en el navegador,por ello ejecuta dentro de useEffect(cliente),fuera se ejec. en servidor y cliente
        localStorage.setItem('carrito',JSON.stringify(carrito))
        console.log('render')

    }, [carrito])
    
    const agregarCarrito = (guitarra) => {
       //content
       console.log('agregando carrito',guitarra)
        if (carrito.some(guitarraState=>guitarraState.id===guitarra.id)) {
            console.log('ya existe');
            // NOTE:Otra Forma ITERAR SOBRE EL CARRITO Y ACTUALIZAR LA CANTIDAD
            // for (let i = 0; i < carrito.length; i++) {
            //     if(carrito[i].id===guitarra.id){

            //         console.log('Enncontrado',carrito[0+i].id, carrito[0+i].id)
            //         console.log('tamaño',carrito.length)
            //         console.log(carrito[0].cantidad)
            //         console.log(guitarra.cantidad)
            //         carrito[i].cantidad=carrito[i].cantidad+guitarra.cantidad
            //         // secarrito[0].cantidad+guitarra.cantidad
            //         console.log(carrito[0+i].cantidad)
            //     }
            // }
            const carritoActualizado=carrito.map(guitarraState=>{
                if (guitarraState.id===guitarra.id) {
                    // guitarraState.cantidad+=guitarra.cantidad
                    guitarraState.cantidad=guitarra.cantidad
                    
                }
                return guitarraState
            })
            console.log('carritoActualizado',carritoActualizado)
            setCarrito(carritoActualizado)

            
        }else{
            setCarrito([...carrito,guitarra])

        }
       
    };
    const actualizarCantidad = (guitarra) => {
       console.log('actualizar guitarra ',guitarra)
        const carritoActualizado =carrito.map(
            guitarraState=>{
                if(guitarraState.id===guitarra.id){
                    // guitarraState.cantidad+=guitarra.cantidad
                    guitarraState.cantidad=guitarra.cantidad
                }
                return guitarraState
            }
        )
        setCarrito(carritoActualizado)
    
    };
    
    const eliminarGuitarra = (id) => {
       //content
    //    console.log('elimnar',id)
    console.log('llego');
    
    const carritoActualizado=carrito.filter(guitarraState=>
        guitarraState.id!==id
        
        )
        console.log('llego carrito' ,carritoActualizado);
        // return carritoActualizado
        setCarrito(carritoActualizado)
    };
    

    return(
        
        <Document>
            {/* <h1>Hola Mundo</h1> */}
            <Outlet
            // NOTE: Puedes pasar funciones,state,string,numero(todo) context permite pasar a lo componentes anidado sin necesidad de props(unidad) funcioana por defecto para primer nivel de rutas
                context={
                    {
                        // guitarLa:"GuitarLA",
                        // auth:true,
                        // sumar,
                        agregarCarrito,
                        carrito,
                        actualizarCantidad,
                        eliminarGuitarra
                        
                    }
                }
            />
        </Document>    
    )
}

function  Document({children}) {
    return(
        <html lang="es">
            <head>
                <Meta/>
                <Links/>
            </head>
            <body>
                <Header/>
                {children}
                <Footer/>
                <LiveReload/>
                <Scripts/>

            </body>
        </html>
    )
}
// Manejo de errores
export function CatchBoudary(){
    const error =useCatch()
    return(
        <Document>
            <p className='error' >
                {error.status} {error.statusText}
            </p>
        </Document>
    )
}
export function ErrorBoudary({error}){
    return(
        <Document>
            <p className='error' > {error.status} {error.statusText}     </p>
                <Link to="/" className='c'>
                    Tal vez quieras volver a la pagina prcipal
                </Link>
      
        </Document>
    )
}