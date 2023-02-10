
export async  function getPosts() {
    // const respuesta = await fetch( `${process.env.API_URL}/guitarras?populate=imagen`)
    // const respuesta = await fetch( `${process.env.API_URL}/guitarras/4?populate=*`)
    const respuesta = await fetch( `${process.env.API_URL}/posts?populate=*`)
    const resultado = await respuesta.json()
  
    // console.log('desde loader')
    // console.log("resultado", resultado) 
  return resultado
}

export async function getPost(url){
  const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=*`)
  
  return await respuesta.json()
}