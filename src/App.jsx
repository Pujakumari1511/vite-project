import './App.css'
import Card from './component/Card';

import { useState } from 'react';
import Persons from './component/Persons';
import Button from './component/Button';


function App() {
const [isLoggedIn, setIsLoggedIn] = useState(true);

const toggleLogIn = () => {
  setIsLoggedIn((prevState) => !prevState);  // prevState work correctly every time, even when state changes happen fast rather than (!isLoggedIn)
}

  return (
    <div>
      <header>App for practicing React</header>
      <main>
        <Button text={isLoggedIn ? "Log out" : "Log in"} onClick={toggleLogIn}/>
 
        {/* <button className="in-out-button" onClick={toggleLogIn}>{isLoggedIn ? "Log out": "Log in"}</button> */}
        {isLoggedIn ? <Persons/> : <><p>Please log in to see the list</p></>} 
         
      </main>
    </div>
  )   
}

export default App;
