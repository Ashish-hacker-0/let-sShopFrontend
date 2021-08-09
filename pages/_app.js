import { useState } from 'react'
import MainNavigation from '../components/Navigation/MainNavigation'
import '../styles/globals.css'
import { CookiesProvider } from "react-cookie";
function MyApp({ Component, pageProps }) {
  const [search, setSearch] = useState(false);
  const [user, setUser] = useState('');
  const [isloggedIn, setIsloggedIn] = useState(false);

  return (
    <CookiesProvider>
      <MainNavigation search={search} setSearch={setSearch} user={user} isloggedIn={isloggedIn} setUser={setUser} setIsloggedIn={setIsloggedIn} >
        <Component {...pageProps} isloggedIn={isloggedIn} setIsloggedIn={setIsloggedIn} />
      </MainNavigation>
    </CookiesProvider>
  )
}

export default MyApp
