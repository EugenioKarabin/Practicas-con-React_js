import React, {useState} from "react";


export default function Persona(props){

  return(
    <>
      <th scope="row">{props.id}</th>
      <td>{props.nombre}</td>
      <td>{props.apellido}</td>
      <td>{props.email}</td>
    </>
  )
}
