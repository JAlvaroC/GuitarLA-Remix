import React from 'react'

export default function Curso({curso}) {
    console.log(curso);
    const {contenido,imagen,titulo}=curso
  return (
    <section className='curso'>
        <style jsx='true'>
            {`
                .curso{
                    backgroud-color:red,
                    backgroud-image:linear-gradient(to rigth,rgb(0 0 / .65),rgb(0 0 0 / .7)),url(${imagen.data.attributes.url})
                }

            `            }
        </style>
       <div className='contenedor curso-grid'>
        <div className='contenido'>
            <h2 className='headig'>{titulo}</h2>
            <p className='texto'>{contenido}</p>

        </div>
        </div> 
    </section>
  )
}
