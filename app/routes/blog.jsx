import { Outlet} from '@remix-run/react'
import React from 'react'
// import ListadoPosts from '~/components/listado-posts'
// import Post from '~/components/post'
// import { getPosts } from '~/models/posts.server'
import  styles  from "~/styles/blog.css"

export function links(){
  return[
    {
      rel:'stylesheet',
      href:styles
    }
  ]
}
// export async function loader(){
//   const posts=await getPosts()
//   console.log(posts)
//   return posts?.data
// }
function Blog() {

  // const posts=useLoaderData()
  return (
    <main
    className='contenedor'
    >
      <Outlet/>


    </main>
  )
}

export default Blog
