export default function Paginacion(props){

    const getPaginas = () => {
        const resultado = []
        for(let i=0; i<props.total; i++){
            let pag=i+1;
            <li className="page-item active">
                resultado.push(
                    <a onClick={props.onChange} className="page-link" href="#">{pag}</a>
                )
            </li>
        }
    }

    return(
        <div  className="d-flex justify-content-center">
            <span>Página {props.pagina} de {props.total}</span>
            <ul className="pagination">
            <li className="page-item disabled">
                <a className="page-link" href="#">&laquo;</a>
            </li>
                {getPaginas()}
            <li className="page-item">
                <a className="page-link" href="#">&raquo;</a>
            </li>
            </ul>
        </div>
    )
}