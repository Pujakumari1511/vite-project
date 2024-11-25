import { useNavigate } from 'react-router-dom';
import persons from '../data/personsData';
import Card from './Card';
import { LogIn } from './LogIn';
import './Persons.css';

function Persons(){
    const navigate = useNavigate();

    const handleNavigate = (id) => {
        navigate(`/${id}`)
        console.log(id);
      }
    return (
        <div className='persons'>
            {persons.map((person)=> <Card 
                key={person.id}
                firstname={person.firstname} 
                title={person.title} 
                age={person.age} 
                animal={person.animal}
                onClick={() => handleNavigate(person.id)}
            />)}
        </div>
    )
}

export default Persons;