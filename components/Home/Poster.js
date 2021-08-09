const Poster = (props) =>{
    return(
        <div className={`poster ${props.class}`}>
           <p>{props.p1}</p>
           <p>{props.p2}</p>
        </div>
    )
}
export default Poster;