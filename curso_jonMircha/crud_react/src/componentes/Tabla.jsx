import React from 'react'
import Persona from './Persona'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'

const Tabla = ({datos}) => {
  return (
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
  )
}

export default Tabla