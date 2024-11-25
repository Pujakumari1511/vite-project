import { useNavigate, useParams } from "react-router-dom";
import Button from "../component/Button"
import persons from "../data/personsData";

const SinglePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const person = persons.find((person) => person.id === parseInt(id));



    return (
        <div>
            <h2>Single page for {person.firstname}</h2>
            <p>Title: {person.title}</p>
            <p>Age: {person.age}</p>
            <p>Animal: {person.animal}</p>
            <Button text='Back to list' onClick={() => navigate(-1)} />
        </div>
    );
};

export default SinglePage;