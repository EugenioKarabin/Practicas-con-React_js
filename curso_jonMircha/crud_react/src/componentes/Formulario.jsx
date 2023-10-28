import React, {useState,useEffect} from 'react'
import styled from 'styled-components';
import { Tooltip, Toast, Popover } from 'bootstrap'

const iniciaForm={
    id:null,
    nombre:"",
    apellido:"",
    email:""
}

const Formulario = () => {

    const [form,setForm] = useState({iniciaForm})

    const inputControl = (e) => {}
    const submitControl = (e) => {}
    const resetControl = (e) => {}

  return (
    <div>
        <h3>Agragar</h3>
        <form onSubmit={submitControl}>
            <label htmlFor="nombre">Nombre: </label>
            <input type="text" 
            name="nombre" 
            id="nombre" 
            onChange={inputControl} 
            value={form.nombre}/>
            <label htmlFor="apellido">Apellido: </label>
            <input type="text" name="apellido" id="apellido" onChange={inputControl} value={form.apellido}/>
            <label htmlFor="email">Email: </label>
            <input type="text" name="email" id="email" onChange={inputControl} value={form.email}/>
            <input type="submit" value="Aceptar"/>
            <input type="reset" value="Limpiar" onClick={resetControl}/>
        </form>
    </div>
  )
}

export default Formulario

