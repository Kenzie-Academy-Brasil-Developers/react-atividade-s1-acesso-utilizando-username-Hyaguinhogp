import { useState } from 'react';
import './App.css';
import GetUserComponent from './components/GetUserComponent';
import WelcomePage from './components/WelcomePage';

function App() {

  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let [user, setUser] = useState('');

  return (
    <div className='app-container'>
      {
        isLoggedIn ? 
          (<WelcomePage user={user} setIsLoggedIn={setIsLoggedIn} />) 
        : 
          (<GetUserComponent setUser={setUser} setIsLoggedIn={setIsLoggedIn} />)
      }
    </div>
  );
}

export default App;
