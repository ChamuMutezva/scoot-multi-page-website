const Card = (props) => {
    return (
        <div className="card">
            <div className="card__wrapper"><img className="card__img" src={props.src} alt="" /></div>
            <div className="card__splitter">
                <h3 className="card__title">{props.title}</h3>
                <p className="card__content">{props.content} </p>
            </div>
        </div>
    )
}
export default Card