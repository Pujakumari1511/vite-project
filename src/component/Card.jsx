import './Card.css'

function Card({firstname, title, age, animal}){
  return (
    <div className="cards">
      <p><b>{firstname}</b></p>
      <p className={age<15 ? 'title-red': 'title-green'}><b>Title:</b> {title}</p>
      <p><b>Age:</b> {age}</p> 
      <p><b>Animal:</b> {animal}</p> 
      
    </div>

  )
}
  
export default Card;