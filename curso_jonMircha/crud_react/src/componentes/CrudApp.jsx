import React, {useState,useEffect} from 'react'
import Navegador from './Navegador'
import Tabla from './Tabla'
import { helpHttp } from '../helpers/helpHttp'
import { Mensaje } from './Mensaje'
import { Loader } from './Loader'
import Formulario from './Formulario'
import VentanaModal from './VentanaModal'

const CrudApp = () => {
  
  const [bd,setBd] = useState(null)
  const [error,setError] = useState(null)
  const [loading,setLoading] = useState(false)
  const [dataEdit,setDataEdit] = useState(null)
  const [opcion,setOpcion] = useState(null)
  const [bgColor,setBgColor] = useState(null)
  const [estadoModal,setEstadoModal] = useState(true)
  

  let api = helpHttp(),
  url = "https://my-json-server.typicode.com/EugenioKarabin/persona/personas?"

  useEffect(() => {
    setLoading(true)
    api.get(url).then((res) => {
      if(!res.err){
        setBd(res)
        setError(null)
      }else{
        setBd(null)
        setError(res)
        setBgColor("#dc3545")
      }
      setLoading(false) 
    })
  }, []);

  const agragaPersona = (datos) => {
    datos.id = Date.now()
    api.post(url,{body:datos}).then((res) => {
      console.log(res)
      if(!res.err){
        setBd([...bd,res])
      }else{
        setError(res)
      }
    })

  }
  const editaPersona = (datos) => {}
  const eliminaPersona = (datos) => {}

  return (
        <>
          <Navegador setOpcion={setOpcion} setEstadoModal={setEstadoModal}/>
          {loading && <Loader/>}
          {error && (<Mensaje 
                        msg={`Error ${error.status}: ${error.statusText}`}
                        bgColor={bgColor}
                        />
                        )}
          {bd && <Tabla datos={bd} setOpcion={setOpcion} setDataEdit={setDataEdit} setEstadoModal={setEstadoModal}/>}
          {opcion && <VentanaModal estadoModal={estadoModal} setEstadoModal={setEstadoModal} opcion={opcion}/>}
        </>
  )
}

export default CrudApp