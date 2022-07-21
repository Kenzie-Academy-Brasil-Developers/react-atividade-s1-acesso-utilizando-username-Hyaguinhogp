import SucessPopup from '../SuccessPopup';
import './styles.css'

const WelcomePage = ({ user, setIsLoggedIn}) => {

    function handleLogout() {
        setIsLoggedIn(false);
    }

    return(
        <div className='home-page__container'>
            <SucessPopup />
            <h1 className='home-page__title'>Bem vindo, {user}!</h1>
            <button className='home-page__button' onClick={handleLogout}>SAIR</button>
        </div>
    );
}

export default WelcomePage;