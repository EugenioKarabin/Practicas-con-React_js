import React, {useState} from 'react'

const Navegador = () => {

  return (
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
  )
}

export default Navegador