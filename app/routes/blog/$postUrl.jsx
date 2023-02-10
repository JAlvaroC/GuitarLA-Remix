import {  useLoaderData } from '@remix-run/react';
import {getPost} from '~/models/posts.server';
import { formatearFecha } from '~/utils/helpers';
// import styles from '~/styles/blog.css';

// export function link(){
//     return{
//         rel:'stylesheet',
//         href:styles
//     }
// }
export function meta({data}){
    // console.log('meta',data.data);
    if (!data) {
      return{
        title:'GuitarLA- Guitarra No encontrada',
        descripcion:`Guitarras , venta de guitarras,guitarra no encontrada`
        
      }
    }
    return {
      title:`GuitarLa - ${data.data[0].attributes.titulo}`,
      descripcion:`Guitarras , venta de guitarras,guitarra ${data.data[0].attributes.titulo}`
    }
  }
export  async function loader({params}){
    const {postUrl}=params
    console.log(postUrl);
    const post=await getPost(postUrl)
    console.log(post)
    if(post.data.length===0){
        throw new Response('',{
            status:404,
            statusText:'Entrada no encontrado'
        })
    }
    return post
}
export default function Post(){
    const post=useLoaderData()
    console.log(post);
    const {titulo,contenido,imagen,publishedAt}=post.data[0].attributes
    return(
        <article
        className='post mt-3'
        >
        <img 
        className='imagen'
        src={imagen.data.attributes?.url} 
        alt={`imagen blog ${titulo}`} />
        <div className='contenido'>
            <h3>{titulo}</h3>
            <p
            className='fecha'
            >{formatearFecha(publishedAt)}</p>
            <p
            
            className='texto'
            >
                {contenido}
            </p>

        </div>
            
        </article>
    )
}
