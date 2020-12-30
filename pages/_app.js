import '../styles/globals.css'

import LoginRedirect from 'components/utilities/hoc/LoginRedirect';

import store from 'store/store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <LoginRedirect>
        <Component {...pageProps} />
      </LoginRedirect>
    </Provider>
  )
}

export default MyApp
