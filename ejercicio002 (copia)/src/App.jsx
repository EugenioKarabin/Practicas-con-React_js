import { useState, useEffect } from 'react'
{/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'*/}
import Menu from './Menu'
import Musica from './Musica'
import musicaJson from './musica.json'
import Paginacion from './Paginacion'
import useFetch from './assets/useFetch'
import axios from "axios"
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

function App() {

  const { datos, loading } = useFetch("https://jsonplaceholder.typicode.com/photos")
  const registros = []
  return (
    <>
      <Menu/>
      <section className='row'>
        <div className='container col-7'>

          {loading && <div>loading...</div>}
          {datos?.map((musica) => 
            {registros.push({id:musica.id,album:musica.albumId,titulo:musica.title,imagenGrande:musica.url,imagenChica:musica.thumbnailUrl})}
            <Musica key={musica.id} albumId={musica.albumId} id={musica.id} title={musica.title} url={musica.url} thumbnailUrl={musica.thumbnailUrl}/>
          )}
                
        </div>
        <div className='col-3'></div>
      </section>
      <Paginacion pagina={2} total={4} onChange={(pagina)=>{
        alert(pagina)
      }}/>
    </>
  )
}

export default App
