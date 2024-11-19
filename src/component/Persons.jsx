import persons from '../data/personsData';
import Card from './Card';


const handleClick = (id) => {
    console.log(`Card ${id} was clicked`);
  }

function Persons(){
    return (
        <div className='persons'>
            {persons.map((person)=> <Card 
                key={person.id}
                firstname={person.firstname} 
                title={person.title} 
                age={person.age} 
                animal={person.animal}
                appClick={() => handleClick(person.id)} 
            />)}
        </div>
    )
}

export default Persons;