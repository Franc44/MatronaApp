import { useEffect, useState } from 'react'
import Router from 'next/router';
import '../styles/globals.scss'
import UserContext from '@components/user-context';

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState({user: null, nombre: null, tipo : null, id : null})

  useEffect(() => {
    const loggedUser = localStorage.getItem('usuario'); // En vez de cookies se almacena en localStorage
    if (loggedUser) {
      const username = localStorage.getItem('nombre'); // En vez de cookies se almacena en localStorage
      const usertipo = localStorage.getItem('tipo');
      const userid = localStorage.getItem('id');
      setUser({user: loggedUser, nombre: username, tipo : usertipo, id : userid})
    } else {
      Router.push('/');
    }
  }, [])

  // Este metodo es para cuando hagas el loggin en el index, si la respuesta es 200 ejecutas este metodo
  const signIn = (username, nombre, tipo, id) => {
    localStorage.setItem('usuario', username);
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('tipo', tipo);
    localStorage.setItem('id', id);
    setUser({user: username, nombre: nombre, tipo : tipo, id : id})
    Router.push('/matrona')
  }

  // Este metodo es para cuando hagas el loggin en el index, si la respuesta es 200 ejecutas este metodo
  const signOut = () => {
    localStorage.clear();
    setUser({user: null, nombre: null, tipo : null, id : null})
    Router.push('/');
  }

  return (
    <UserContext.Provider value={{ user: user, signIn: signIn, signOut: signOut }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  )
}

export default MyApp