import { useRouter } from 'next/router';

import { useSelector } from 'react-redux';
import { selectLoggedIn } from 'store/auth/authReducer';

const pathsThatRequireLogin = [
    '/admin',
]

export default function LoginRedirect() {
    const router = useRouter();
    const pathname = router.pathname;
    const pathRequiresLogin = pathsThatRequireLogin
        .map(aPathThatRequiresLogin => {
            return pathname.startsWith(aPathThatRequiresLogin)
        })
        //.reduce((acc, el) => el || acc )
    //const loggedIn = useSelector(selectLoggedIn);

    return (
        <div>
           Login Redirect 
        </div>
    )
}
