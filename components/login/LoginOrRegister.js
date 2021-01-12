import { useState } from 'react';

import Login from './subcomponents/Login';
import Register from './subcomponents/Register';

import styles from './LoginOrRegister.module.css';

const LoginOrRegister = () => {

    const [loggingIn, setLoggingIn] = useState(true);


    return (
        <div className="Container">
            <p><span onClick={()=>setLoggingIn(true)}>Login</span> | <span onClick={()=> setLoggingIn(false)}>Register</span></p>
            { loggingIn ? <Login /> : <Register /> } 
        </div>
    );
}

export default LoginOrRegister;
