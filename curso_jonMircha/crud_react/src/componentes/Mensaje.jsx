import React from 'react'
import styled from 'styled-components'

export const Mensaje = ({msg,bgColor}) => {
    
    let style = {
        padding: "1rem",
        marginBottom: "1rem",
        textAlign: "center",
        color: "#fff",
        fontWeight: "bold",
        background: bgColor,
    }

    return (
        <div style={style}>
            <p>{msg}</p>
        </div>        
    )
}    
