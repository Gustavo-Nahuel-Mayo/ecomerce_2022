

function cardDescription(props){
    return(
        <div className="card__body">
            <img src={props.img}/>
            <h2>{props.parrafo}</h2>
        </div>
    )
}

export default cardDescription;