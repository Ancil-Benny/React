function CardComponent({movie}){
    function show(){
        alert("shown a button");    
    }
    return (
        <div className="card-card">
            <h3 className="card-heading">{movie.title}</h3>
            <h4 className="card-desc">{movie.desc}</h4>
            <button className="card-btn" onClick={show}>SHOW</button>
        </div>
    );
}
export default CardComponent;