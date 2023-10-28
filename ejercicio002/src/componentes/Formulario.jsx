import React, {useState} from "react";
import styled from 'styled-components';
import { Tooltip, Toast, Popover } from 'bootstrap'

function FormularioAgregar(){

    return(
        <form action="">
            <label htmlFor="nombre">Nombre: </label>
            <input type="text" name="nombre" id="nombre"/>
            <label htmlFor="apellido">Apellido: </label>
            <input type="text" name="apellido" id="apellido"/>
            <label htmlFor="email">Email: </label>
            <input type="text" name="email" id="email"/>
            <button>Agragar</button>
        </form>
    )
}

function FormularioModificar({ind}){

    return(
        <form action="">
            <p>{ind}</p>
            <label htmlFor="nombre">Nombre: </label>
            <input type="text" name="nombre" id="nombre"/>
            <label htmlFor="apellido">Apellido: </label>
            <input type="text" name="apellido" id="apellido"/>
            <label htmlFor="email">Email: </label>
            <input type="text" name="email" id="email"/>
            <button>Agragar</button>
        </form>
    )
}

function FormularioEliminar({ind}){

    return(
        <form action="">
            <p>{ind}</p>
            <label htmlFor="nombre">Nombre: </label>
            <input type="text" name="nombre" id="nombre"/>
            <label htmlFor="apellido">Apellido: </label>
            <input type="text" name="apellido" id="apellido"/>
            <label htmlFor="email">Email: </label>
            <input type="text" name="email" id="email"/>
            <button>Agragar</button>
        </form>
    )
}

function FormularioConsultar({ind}){

    return(
        <form action="">
            <p>{ind}</p>
            <div className="form-floating">
                <input type="text" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label forName="floatingPassword">Password</label>
            </div>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label forName="floatingInput">Email address</label>
            </div>
            <button>Agragar</button>
        </form>
    )
}

export default function Formulario({opcion,elemento}){

    if(opcion==="Agregar"){
        return <FormularioAgregar/>
    }else if(opcion==="Modificar"){
        return <FormularioModificar ind={elemento}/>
    }else if(opcion==="Eliminar"){
        return <FormularioEliminar ind={elemento}/>
    }else if(opcion==="Consultar"){
        return <FormularioConsultar ind={elemento}/>
    }

}