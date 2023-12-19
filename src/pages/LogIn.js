import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import '/Users/nirdeshjungpandey/react-auth-starter/front-end/src//css/LogIn.css';



export const LogIn = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const history = useHistory();
    const onLogInClicked = async() =>{
        // Your conditions for email and password validity
        const validEmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailValue);
        const validPassword = passwordValue.length >= 8; // Assuming password must be at least 8 characters

        if (!validEmail) {
            setErrorMessage('Please enter a valid email address.');
        } else if (!validPassword) {
            setErrorMessage('Password must be at least 8 characters long.');
        } else {
            history.push('/home');
        }
    }

    return(
        <div className="content-container">
            <h1>My React app</h1>
                <h2>Log In:</h2>
                {errorMessage && <div className='fail'>{errorMessage}</div>}
                <input
                    value={emailValue}
                    onChange={e => setEmailValue(e.target.value)}

                    placeholder="someone@gmail.com" />


                <input
                    value={passwordValue}
                    onChange={e => setPasswordValue(e.target.value)}

                    type="password" placeholder="password" />
                <button
                    style={{ backgroundColor: (!emailValue || !passwordValue) ? 'red' : 'green' }}
                    disabled={!emailValue || !passwordValue}
                    onClick={onLogInClicked}>Log In</button>
                <button onClick={() => history.push('/forgot-password')}>Forget your Password</button>
                <button onClick={() => history.push('/signUpPage')}>Don't have an account?Sign up</button>

            </div>
    );
}