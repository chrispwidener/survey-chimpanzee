import { useRouter } from 'next/router';

import { useSelector } from 'react-redux';
import { selectLoggedIn } from 'store/auth/authReducer';

import LoginOrRegister from 'components/login/LoginOrRegister';

const pathsThatRequireLogin = [
    '/dashboard',
]

export default function LoginRedirect(props) {
    // Check if User is Logged In
    const loggedIn = useSelector(selectLoggedIn);

    // Get pathname
    const router = useRouter();
    const pathname = router.pathname;

    // Check if Pathname Requires Login
    const pathRequiresLogin = pathsThatRequireLogin
        .map(aPathThatRequiresLogin => {
            return pathname.startsWith(aPathThatRequiresLogin)
        })
        .reduce((acc, el) => el || acc );
    
    // Default to showing the page
    let page = props.children;

    //  Show Login instead if path requires login and user is not logged in
    if (!loggedIn && pathRequiresLogin) {
        page = <LoginOrRegister />
    }

    return (
        <>
            { page }
        </>
    )
}
