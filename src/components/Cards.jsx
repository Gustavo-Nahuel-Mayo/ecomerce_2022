

function Info(){
    return(
        <div className="wrapper">
            <Card
                img="https://educacion30.b-cdn.net/wp-content/uploads/2019/02/girasoles-978x652.jpg"
                title="Jabon1"
                description="Es un jabon normal"
                price="45.00"/>

        </div>

    )
}

function Card(props){
 return(
    <div className="card" id="cardid">
        <img src={props.img} className="card__img"/>
        <div className="card__body">
            <h2 className="card__title">{props.title}</h2>
            <p className="card__description" >{props.description}</p>
            <h3 className="card__price">{props.price}</h3>
            <a href={props.info}>
                <button className="card__btn2">Leer mas</button>
            </a>
            {/*
            <a href={props.pago}>
                <button className="card__btn" >Add to cart</button>
            </a>
 */}


        </div>
    </div>
 )   
}

export default Card;
