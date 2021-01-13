import { useSelector } from 'react-redux';
import { selectLoggedIn } from 'store/auth/authReducer';

import LoggedInBar from './subcomponents/LoggedInBar';
import LoggedOutBar from './subcomponents/LoggedOutBar';

import styles from './NavBar.module.css';

export default function NavBar() {

    const loggedIn = useSelector(selectLoggedIn);

    const navItems = loggedIn ? <LoggedInBar /> : <LoggedOutBar />

    return (
        <div className={styles.NavBar}>
            {navItems} 
        </div>
    )
}
