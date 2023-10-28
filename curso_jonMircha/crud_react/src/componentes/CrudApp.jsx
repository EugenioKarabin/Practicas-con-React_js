import React, {useState} from 'react'
import { UseFetch } from './UseFetch'
import Navegador from './Navegador'
import Tabla from './Tabla'

const CrudApp = () => {

  const { datos, loading, error, handleCancelRequest } = UseFetch("https://my-json-server.typicode.com/EugenioKarabin/persona/personas?_start=0&_limit=5")
  const [estadoModal, cambiaEstado] = useState({opcion:null,estado:false,elemento:0})

  return (
        <>
          <Navegador/>
          {error && <div className='d-flex justify-content-start 100vw'><p>Error: {error}</p></div>}
          {
            loading && <><div className='d-flex justify-content-center 100vw'><h2>Loading...</h2></div>
            <div className='d-flex justify-content-center 100vw'><button className="btn" onClick={handleCancelRequest}>Cancelar Consulta</button></div></>
          }
          <Tabla datos={datos}/>
        </>
  )
}

export default CrudApp