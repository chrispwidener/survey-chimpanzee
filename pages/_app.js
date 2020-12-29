import '../styles/globals.css'

import LoginRedirect from 'components/utilities/hoc/LoginRedirect';

function MyApp({ Component, pageProps }) {
  return (
    <LoginRedirect>
      <Component {...pageProps} />
    </LoginRedirect>
  )
}

export default MyApp
