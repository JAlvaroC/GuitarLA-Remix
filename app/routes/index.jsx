// import React from 'react'
import { useLoaderData } from '@remix-run/react';
import ListadoGuitarras from '~/components/listado-guitarras';
import ListadoPosts from '~/components/listado-posts';
import {getGuitarras} from '~/models/guitarras.server'
import {getPosts} from '~/models/posts.server'
import stylesGuitarras from '~/styles/guitarra.css'
import stylesPosts from '~/styles/blog.css'
import { getCurso } from '~/models/curso.server';
import Curso from '~/components/curso';
import stylesCurso from '~/styles/curso.css'
export function meta(){
  
}
export function links(){
  return  [
    {
    rel:'stylesheet',
    href:stylesGuitarras
  },
  {
    rel:'stylesheet',
    href:stylesPosts
  },
  {
    rel:'stylesheet',
    href:stylesCurso
  }
  ]
}
export async function loader(){
  const [guitarras,posts,curso]=await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso()
  ])
  const data={
    guitarras:guitarras.data,
    posts:posts.data,
    curso:curso.data
  }
  return data
}

function Index() {

  const {guitarras,posts,curso}=useLoaderData()
  // console.log(datos)
  return (
    <>
        <main className='contenedor'>
        <ListadoGuitarras
          guitarras={guitarras}  
        />

        </main>
        <Curso
          curso={curso.attributes}
        />
        <section className='contenedor'>
          <ListadoPosts
            posts={posts}
          />

        </section>
    </>
  )
}

export default Index