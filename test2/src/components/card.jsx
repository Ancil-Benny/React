function Card({movie}){
    return (
        <div>
            <h1 className="card-title">{movie.title}</h1>
            <h3 className="card-desc">{movie.desc}</h3>
            <button className="card-btn">Show</button>
        </div>
    )
}

export default Card;