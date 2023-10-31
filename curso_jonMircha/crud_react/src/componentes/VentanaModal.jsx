import React, {useState} from "react";
import styled from 'styled-components';
import { Modal } from "bootstrap";
import Formulario from "./Formulario";

const VentanaModal = ({estadoModal, setEstadoModal, opcion, }) => {

    return (
        <>
            {estadoModal &&
            <Fondo>
                <ContenedorModal>
                    <Encabezado>
                        <h3>{opcion}</h3>
                    </Encabezado>
                    <BotonCerrar onClick={() => setEstadoModal(!estadoModal)}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                            </svg>
                        </div>
                    </BotonCerrar>
                    <Formulario setEstadoModal={setEstadoModal}/>
                </ContenedorModal>
            </Fondo>
            }
        </>
    );
}

export default VentanaModal

const Fondo = styled.h1`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.5);
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ContenedorModal = styled.div`
    width: 600px;
    min-height: 100px;
    background: #fff;
    position: relative;
    border-radius: 5px;
    box-shadow: rgba(100,100,111,.2) 0px 7px 29px 0px;
    padding: 20px;
`

const Encabezado = styled.div`
    display: flex;
    aling-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #e8e8e8;

    h3 {
        fond-weight: 500;
        font-size: 16px;
        color: #1766dc;
    }
`

const BotonCerrar = styled.button`
    position: absolute;
    top: 10px;
    right: 20px;
    width: 30px;
    height: 30px;
    border: none;
    background: none;
    cursor: pointer;
    transition: .3s easy all;
    border-radius: 5px;
    color: #1766dc;

    &:hover {
        background: #f2f2f2;
    }

    div {
        position: relative;
        display: flex;
        aling-aitems: center;
        border: none;
        background: none;
    }

    svg {
        width: 100%;
        height: 100%;
    }
`