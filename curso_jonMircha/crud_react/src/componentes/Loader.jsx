import React from 'react'
import "./Loader.css"
import styled from 'styled-components'

export const Loader = () => {
    return (
        <Contenedor>
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </Contenedor>
    )
}

const Contenedor = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100dvh;
`
