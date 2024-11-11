import persons from '../data/personsData';
import Card from './Card';

function Persons(props){
    return (
        <div className='persons'>
            {persons.map((person)=> <Card 
                key={person.id}
                firstName={person.firstname} 
                title={person.title} 
                age={person.age} 
                animal={person.animal} 
            />)}
        </div>
    )
}

export default Persons;