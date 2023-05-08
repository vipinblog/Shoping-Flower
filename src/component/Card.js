function Card (props){
    return (
        <div>
            <img src={props.imgLink} alt=''/>
            <h2>{props.title}</h2>
            
        </div>
    )
}
export default Card;