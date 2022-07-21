import { useState } from 'react';
import './styles.css'

const GetUserComponent = ({ setUser, setIsLoggedIn }) => {

    let [userInput, setUserInput] = useState('');

    function handleLogin(userInput) {
        setUser(userInput);
        setIsLoggedIn(true);
    }

    return (
        <form className="get-user__form" action="submit">

            <input
                type="text"
                placeholder="Insira seu nome"
                onChange={(event) => setUserInput(event.target.value)}
                className="get-user__input" />

            <button 
            className="get-user__button" 
            type="submit" 
            onClick={(event) => {
                event.preventDefault();
                handleLogin(userInput);
            }}>Acessar com nome</button>
        </form>
    );
}

export default GetUserComponent;