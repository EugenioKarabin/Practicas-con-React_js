import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { my_alert } from './funcHelpers'
import { Modal } from "bootstrap"

const CrudPersonas = () => {

  const url="https://my-json-server.typicode.com/EugenioKarabin/persona/personas"

  const [personas,setPersonas] = useState([])
  const [id,setId] = useState("")
  const [nombre,setNombre] = useState("")
  const [apellido,setApellido] = useState("")
  const [email,setEmail] = useState("")
  const [operacion,setOperacion] = useState(1)
  const [titulo,setTitulo] = useState("")

  useEffect(() => {
    getPersonas()
  },[])

  const getPersonas = async () => {
    const resp = await axios.get(url)
    setPersonas(resp.data)
  }

  const abreModal = (opcion,id,nombre,apellido,email) => {
    setId('')
    setNombre('')
    setApellido('')
    setEmail('')
    setOperacion(opcion)
    if(opcion===1){
      setTitulo('Agregar Persona')
    }else if(opcion===2){
      setTitulo('Modificar Datos')
      setNombre(nombre)
      setApellido(apellido)
      setEmail(email)
    }
  }
  window.setTimeout(function(){
    document.getElementById('nombre').focus();
  },500)

  const validar = () => {
    let parametros
    let metodo
    if(nombre.trim()===""){
      my_alert("Ingrese el nombre de la persona",'warning')
    }else if(apellido.trim()===""){
      my_alert("Ingrese el apellido de la persona",'warning')
    }else if(email.trim()===""){
      my_alert("Ingrese el correo electrónico de la persona",'warning')
    }else{
      if(operacion===1){
        parametros={first_name:nombre.trim(),last_name:apellido.trim(),email:email.trim()}
        metodo='POST'
      }else{
        parametros={id:id,first_name:nombre.trim(),last_name:apellido.trim(),email:email.trim()}
        metodo='PUT'
      }
      enviarSolicitud(metodo,parametros)
    }
  }

  const enviarSolicitud = async(metodo,parametros) => {
    await axios ({method:metodo, url:url, data:parametros}).then((res) => {
      let tipo = res.data[0]
      let msj = res.data[1]
      my_alert(msj,tipo)
      if(tipo==='success'){
        document.getElementById('btnCerrar').click()
        getPersonas()
      }
    })
    .catch((error) => {
      my_alert('Error en la solicitud','error')
      console.log(error)
    })
  }

  return (
    <div className='App'>
      <div className='container-fluid'>
        <div className='row mt-3'>
          <div className='col-md-4 offset-md-4'>
            <div className='d-grid mx-auto'>
              <button onClick={()=>abreModal(1)} className='btn btn-dark' data-bs-toggle='modal' data-bs-target='#modalPersona'>
                <i className='fa-solid fa-circle-plus'></i> Agregar Persona
              </button>
            </div>
          </div>
        </div>

        <div className='row mt-3'>
          <div className='col-12 col-lg-8 offset-lg-2'>
            <div className='table-responsive'>
              <table className='table table-bordered'>
                <thead>
                  <tr><th>Nombre</th><th>Apellido</th><th>Email</th><th>Accion</th></tr>
                </thead>
                <tbody className='table-group-divider'>
                  {personas.map((persona) =>
                    <tr key={persona.id}>
                      <td>{persona.first_name}</td>
                      <td>{persona.last_name}</td>
                      <td>{persona.email}</td>
                      <td>
                        <button onClick={()=>abreModal(
                                                2,
                                                persona.id,
                                                persona.first_name,
                                                persona.last_name,
                                                persona.email
                                        )} className='btn btn-warning' data-bs-toggle='modal' data-bs-target='#modalPersona'>
                          <i className='fa-solid fa-edit'></i>
                        </button>
                        &nbsp;
                        <button className='btn btn-danger'>
                          <i className='fa-solid fa-trash'></i>
                        </button>
                      </td>
                    </tr>
                  )}

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div id= 'modalPersona' className='modal fade' aria-hidden='true'>
        <div className='modal-dialog'>
          <div className='moda-content'>
            <div className='modal-header'>
              <label className='hs'>{titulo}</label>
              <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='close'></button>
            </div>
            <div className='modal-body'>
              <input type="hidden" id='id'/>
              <div className='input-group mb-3'>
                <span className='input-group-text'><i className="fa-solid fa-file-signature"></i></span>
                <input type="text" id='nombre' className='form-control' placeholder='Nombre' value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
              </div>
              <div className='input-group mb-3'>
                <span className='input-group-text'><i className='fa-solid fa-file-signature'></i></span>
                <input type="text" id='apellido' className='form-control' placeholder='Apellido' value={apellido} onChange={(e)=>setApellido(e.target.value)}/>
              </div>
              <div className='input-group mb-3'>
                <span className='input-group-text'><i className='fa-solid fa-at'></i></span>
                <input type="text" id='email' className='form-control' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
              </div>
              <div className='d-grid col-6 mx-auto'>
                <button onClick={() => validar()} className='btn btn-success'>
                  <i className='fa-solid fa-floppy-disk'></i> Guardar
                </button>
              </div>
            </div>
            <div className='modal-footer'>
              <button type='button' id='btnCerrar' className='btn btn-secondary' data-bs-dismiss='modal'>Cerra</button>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default CrudPersonas