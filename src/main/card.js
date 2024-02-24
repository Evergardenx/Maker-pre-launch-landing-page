const Card = (props) => {
    let className = props.limebg ? 'limebg' : ''
    return (
        <div className={`card ${className}`}>
            <div className="cards__img">
                <img src={props.src} alt={props.alt} />
            </div>
            <div className="cards__info">
                <h3 className="cards__info__heading">{props.title} </h3>
                <p className="cards__info__description"> {props.description}</p>                      
            </div>
            <div className="products">
                <h3 className="products__title">{props.subtitle} <span>{props.subtitle2}</span></h3>
                <ul className="products__list">
                    <li className="products__list__item"><span>&#10003;</span>{props.item1}</li>
                    <li className="products__list__item"><span>&#10003;</span>{props.item2}</li>
                    <li className="products__list__item"><span>&#10003;</span>{props.item3}</li>
                    <li className="products__list__item"><span>&#10003;</span>{props.item4}</li>
                </ul>
            </div>
        </div>
    )
}
export default Card