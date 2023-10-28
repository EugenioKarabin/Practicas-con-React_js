import { useFetch } from './componentes/useFetch'
import Paginacion from './componentes/Paginacion'
import Persona from './componentes/Persona'
import Modal from './componentes/Modal'
import { useState } from 'react'    
import { FaEdit, FaTrashAlt } from 'react-icons/fa'

function App() {
  
  const { datos, loading, error, handleCancelRequest } = useFetch("https://my-json-server.typicode.com/EugenioKarabin/persona/personas?_start=0&_limit=5")
  const [estadoModal, cambiaEstado] = useState({opcion:null,estado:false,elemento:0})


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">CRUD React</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link" 
                            aria-current="page" 
                            href="#"
                            onClick={() => cambiaEstado({opcion:"Agregar",estado:true})}>
                                Agregar Persona
                        </a>
                        </li>
                    </ul>
                     <div className="navbar-nav me-5 mb-2 mb-lg-0">
                        <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" 
                              href="#" 
                              id="navbarDropdown" 
                              role="button" 
                              data-bs-toggle="dropdown" 
                              aria-expanded="false"
                              >                          
                              Consultar por
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">ID</a></li>
                                <li><a className="dropdown-item" href="#">Nombre</a></li>
                                <li><a className="dropdown-item" href="#">Apellido</a></li>
                                <li><a className="dropdown-item" href="#">Email</a></li>
                            </ul>
                        </div>
                    </div>   

                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                        <button className="btn btn-outline-success" onClick={() => cambiaEstado({opcion:"Consultar",estado:true})}>
                          Buscar
                        </button>
                    </form>
                </div>
            </div>
      </nav>
      {error && <div className='d-flex justify-content-start 100vw'><p>Error: {error}</p></div>}
      {
        loading && <><div className='d-flex justify-content-center 100vw'><h2>Loading...</h2></div>
        <div className='d-flex justify-content-center 100vw'><button className="btn" onClick={handleCancelRequest}>Cancelar Consulta</button></div></>
      }
      <section className='container'>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Email</th>
              <th scope="col">Acción</th>
            </tr>
          </thead>
          <tbody>
            {datos?.map((persona) =>
            <tr key={persona.id} >
              <Persona 
              id={persona.id} 
              nombre={persona.first_name} 
              apellido={persona.last_name} 
              email={persona.email}
              />
              <td>
                <button className='btn btn-primary' onClick={() => cambiaEstado({opcion:"Modificar",estado:true, elemento:persona.id})}>
                  <FaEdit/>                
                </button>
                {" "}
                <button className='btn btn-danger' onClick={() => cambiaEstado({opcion:"Eliminar",estado:true, elemento:persona.id})}>
                  <FaTrashAlt/>
                </button>
              </td>
            </tr>
            )}
          </tbody>
        </table>
      </section>
      <Paginacion pagina={2} total={4} onChange={(pagina)=>{
        alert(pagina)
      }}/>

      <Modal 
        titulo={estadoModal.opcion}
        opcionEleg={estadoModal.estado}
        modificaOpcion={cambiaEstado}
        indice={estadoModal.elemento}
      />
    </>

  );
}

export default App;
