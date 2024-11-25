import './Card.css'
import Button from './Button';
import { useState } from 'react';

function Card({firstname, title, age, animal}){
  const [animalValue, setAnimalValue] = useState(animal);
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((prev) => !prev);
  const handleChange = (e) => setAnimalValue(e.target.value);
  
  return (
    <div className="cards">
      <p><b>{firstname}</b></p>
      <p className={age<15 ? 'title-red': 'title-green'}><b>Title:</b> {title}</p>
      <p><b>Age:</b> {age}</p> 
      {isEditing ? (
        <input className={'animal-edit-textarea'} type="text" value={animalValue} onChange={handleChange} />
      ) : (
      <p><b>Animal:</b> {animalValue}</p> 
      )}
      <div>
        <Button onClick={toggleEdit} text={isEditing ? "save" : 'Edit'} /> 
      </div >  
    </div>
  );
}
  
export default Card;