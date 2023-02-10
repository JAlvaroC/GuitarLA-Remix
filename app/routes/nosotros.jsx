import imagen from "../../public/img/nosotros.jpg" 
import styles from '~/styles/nosotros.css'
import { useOutletContext } from "@remix-run/react"
//NOTE:{ useOutletContext} <Nuevo/> Es un estado global Recibimos lo que mnadamos por contexto ya que es su ruta secundaria a


export  function meta(){
  return(
      {
          // charset:'utf-8',
          title:'GuitarLa- Sobre Nosotros',
          description:'Venta de guitarras,blog de musica'
          // viewport:'width=device-width,initial-scale=1'
      }
  )
}
export  function links(){
  return(
      {
          rel:'stylesheet',
          href:styles
      },{
          rel:'preload',
          href:imagen,
          as:'image'

      }
  )
}

function Nosotros() {
  const data=useOutletContext()
  console.log(data)
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">
        Nosotros
      </h2>
      <div className="contenido">
          <img src={imagen} alt="imagen sobre nosotros" />
          <div>
            <p>Officiis sint iste est dolor ullam aliquam quisquam expedita blanditiis fugiat mollitia, quae vero nobis itaque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas deserunt magni architecto voluptates exercitationem 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas deserunt magni architecto voluptates exercitationem 
            officiis sint iste est dolor ullam aliquam quisquam expedita blanditiis fugiat mollitia, quae vero nobis itaque.</p>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae impedit cumque ullam minima ab voluptatem aspernatur,
            architecto nobis quisquam expedita ipsam, mollitia accusantium vero accusamus, illo ut harum? Esse, nulla.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quo quibusdam officiis alias cupiditate adipisci
            error distinctio sed cum earum. Possimus est quo pariatur doloremque minus molestiae sunt ullam voluptas.</p>
          </div>
      </div>
    </main>
  )
}

export default Nosotros