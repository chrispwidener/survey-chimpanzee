import { useState } from 'react';

import Login from './subcomponents/Login';
import Register from './subcomponents/Register';

const LoginOrRegister = () => {

    const [loggingIn, setLoggingIn] = useState(true);


    return (
        <div>
            <p><span onClick={()=>setLoggingIn(true)}>Login</span> | <span onClick={()=> setLoggingIn(false)}>Register</span></p>
            { loggingIn ? <Login /> : <Register /> } 
        </div>
    );
}

export default LoginOrRegister;
