import './Card.css'

function Card(props){
  return (
    <div className="cards">
      <p><b>{props.firstName}</b></p>
      <p className={props.age<15 ? 'title-red': 'title-green'}><b>Title:</b> {props.title}</p>
      <p><b>Age:</b> {props.age}</p> 
      <p><b>Animal:</b> {props.animal}</p> 
      
    </div>

  )
}
  
export default Card;