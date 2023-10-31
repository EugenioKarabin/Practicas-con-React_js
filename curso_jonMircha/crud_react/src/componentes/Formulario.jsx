import React, {useState,useEffect} from 'react'
import styled from 'styled-components';
import { Tooltip, Toast, Popover } from 'bootstrap'

const iniciaForm={
    id:null,
    nombre:"",
    apellido:"",
    email:""
}

const Formulario = ({setEstadoModal}) => {

    const [form,setForm] = useState({iniciaForm})

    const inputControl = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })

    }

    const submitControl = (e) => {
        e.preventDefault()

        if(!form.nombre||!form.apellido||!form.email){
            alert("Datos incompletos")
            return
        }
    }
    const resetControl = (e) => {
        setForm(iniciaForm)
        seleccion=null
        setEstadoModal(!setEstadoModal)
    }

    return (
        <div>
            <form onSubmit={submitControl}>
                <label htmlFor="nombre">Nombre: </label>
                <input type="text" 
                name="nombre" 
                id="nombre" 
                onChange={inputControl} 
                value={form.nombre}/>
                <label htmlFor="apellido">Apellido: </label>
                <input type="text" name="apellido" id="apellido" onChange={inputControl} />
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" id="email" onChange={inputControl} />
                <input type="submit" value="Aceptar"/>
                <input type="reset" value="Limpiar" onClick={resetControl}/>
            </form>
        </div>
    )
}

export default Formulario

