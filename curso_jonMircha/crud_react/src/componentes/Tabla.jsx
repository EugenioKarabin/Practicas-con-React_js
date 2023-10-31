import React, {useState} from 'react'
import Persona from './Persona'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'

const Tabla = ({datos,setOpcion,setDataEdit}) => {

  return (
    <>
      <section className='container'>
        <table className="table">
          <thead>
            <tr>
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
              nombre={persona.first_name} 
              apellido={persona.last_name} 
              email={persona.email}
              />
              <td>
                <button className='btn btn-primary' onClick={() => {
                                                                    setOpcion("Modificar")
                                                                    setDataEdit(persona)
                                                                  }}>
                  <FaEdit/>                
                </button>
                {" "}
                <button className='btn btn-danger' onClick={() => {
                                                                    setOpcion("Eliminar")
                                                                    setDataEdit(persona)
                                                                  }}>
                  <FaTrashAlt/>
                </button>
              </td>
            </tr>
            )}
          </tbody>
        </table>
      </section>
    </>
  )
}

export default Tabla