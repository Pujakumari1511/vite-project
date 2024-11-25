import { useState } from "react";
import Persons from './Persons'

export const LogIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const toggleLogIn = () => {
    setIsLoggedIn((prevState) => !prevState); // prevState work correctly every time, even when state changes happen fast rather than (!isLoggedIn)
  };
  return (
    <div>
      <header>App for practicing React</header>
      <main>
        <button onClick={toggleLogIn}>
          {isLoggedIn ? "Log out" : "Log in"}
        </button>
        {isLoggedIn ? (
          <Persons />
        ) : (
          <>
            <p>Please log in to see the list</p>
          </>
        )}
      </main>
    </div>
  );
};
