// import React from 'react'

import { fetch } from "@remix-run/node"

export async  function getGuitarras() {
    // const respuesta = await fetch( `${process.env.API_URL}/guitarras?populate=imagen`)
    // const respuesta = await fetch( `${process.env.API_URL}/guitarras/4?populate=*`)
    const respuesta = await fetch( `${process.env.API_URL}/guitarras?populate=*`)
    const resultado = await respuesta.json()
  
    // console.log('desde loader')
    console.log("resultado", resultado) 
  return resultado
}

export async function getGuitarra(url){
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=*`)
    return await respuesta.json()
}