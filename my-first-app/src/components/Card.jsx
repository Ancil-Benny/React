function CardComponent({movie}){
    return (
        <div>
            <h3 className="card-heading">{movie.title}</h3>
            <h4 className="card-desc">{movie.desc}</h4>
            <button className="card-btn">SHOW</button>
        </div>
    );
}
export default CardComponent;