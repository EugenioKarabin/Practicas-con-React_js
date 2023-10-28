export default function Musica(props){
    
    return(
        <div container>
            <div className="row" d-flex>
                <div className="col-3 imagen-grande"><img className="img-thumbnail" src={props.url}></img></div>
                <div className="col-6">
                    <div className="row">
                        <div className="col">{props.albumId}</div>
                        <div className="col">{props.id}</div>
                    </div>
                    <div className="row">{props.title}</div>
                </div>
                <div className="col-3 imagen-chica"><img className="img-thumbnail"  src={props.thumbnailUrl}></img></div>
            </div>
        </div>
    )
}
