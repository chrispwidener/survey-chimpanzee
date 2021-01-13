import '../styles/globals.css'

import LoginRedirect from 'components/utilities/hoc/LoginRedirect';

import NavBar from 'components/navbar/NavBar';

import store from 'store/store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <LoginRedirect>
        <NavBar />
        <Component {...pageProps} />
      </LoginRedirect>
    </Provider>
  )
}

export default MyApp
