import { useState } from "react";

function Person(){
    const [person, setPerson] = useState({id: 1, name: 'Puja'})
    const [age, setAge] = useState(29);


    return (
        <div>
            <h2>Person Details</h2>
            <p>ID: {person.id}</p>
            <p>Name: {person.name}</p>
            <p>Age: {person.id}</p>
        </div>
    )
    
}

