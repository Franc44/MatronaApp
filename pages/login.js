import HomeLayout from '@layouts/home-layout'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {format} from 'url'
import { authSession } from '@api/consultas';
import React, { useContext, useState, useEffect } from 'react'
import UserContext from '@components/user-context'
import Router from 'next/router'

const Modal = withReactContent(Swal)

export default function Login() {

  const {user, signIn} = useContext(UserContext)
  const [visible, setVisible] = useState(false)
  const [mount, setMount] = useState(false)

  console.log(user.user);

  useEffect(() => {
    if(user.user != null) {
      Router.push('/')
    } else {
      setTimeout(() => {
        setMount(true)
      }, 500)
    }
  }, [user.user]) 

  const close = () => {
    Swal.close()
  }

  const validateForm = (e) => {
    e.preventDefault();

    const usuario = document.getElementById('usuario')
    const contra = document.getElementById('contra')

    const flags = [
      false, // Usuario
      false // Contraseña
    ]

    let errors = 0

    if(usuario.value.length < 1) {
      usuario.classList.add('is-invalid')
      flags[0] = false
    } else {
      usuario.classList.remove('is-invalid')
      flags[0] = true
    }

    if(contra.value.length < 1) {
      contra.classList.add('is-invalid')
      flags[1] = false
    } else {
      contra.classList.remove('is-invalid')
      flags[1] = true
    }

    flags.forEach(flag => {
      if(!flag) {
        errors += 1
      }
    })

    if(errors > 0) {
      console.log('Error al enviar formulario!');
      console.log('Errores encontrados: '+errors);
    } else {
      
      const data = {
        Username: usuario.value,
        Passwd: contra.value
      }

      //var expiresDate = new Date()
      //expiresDate.setDate(expiresDate.getDate() + 7)

      authSession(data).then(res => {
        if(res.status < 400) {
          const data = res.data;
          console.log(data);
          signIn(data.usuario, data.nombre, data.tipo, data.id);
          //cookieCutter.set('usu', data.usuario, {expires: expiresDate, path: '/'})
          //cookieCutter.set('Nombre', data.nombre, {expires: expiresDate, path: '/'})
          //cookieCutter.set('rol', data.tipo, {expires: expiresDate, path: '/'} )
          //cookieCutter.set('id', data.id, {expires: expiresDate, path: '/'} )
          Modal.fire({
            title: <span className="mt-4">¡Bienvenido { usuario.value }!</span>,
            html: (
              <div className="w-100 d-flex flex-column text-center align-items-center">
                <button type="button" className="btn btn-primary mt-3 mb-4" onClick={close}>Aceptar</button>
              </div>
            ),
            showConfirmButton: false
          })
        } else {
          Modal.fire({
            title: <span className="mb-4">¡Error al iniciar!</span>,
            html: (
              <div className="w-100 d-flex flex-column text-center align-items-center">
                <span className="lead">Verifique que el usuario y contraseña sean los correctos, por favor vuelve a intentarlo.</span>
                <button type="button" className="btn btn-danger mt-4" onClick={() => Swal.close()}>Aceptar</button>
              </div>
            ),
            showConfirmButton: false
          })
        }
      })
    }
  }

  const showPassword = () => {
    const flag = document.getElementById('showPassword').checked
    const contra = document.getElementById('contra')
    if(flag) {
      contra.type = 'text'
    } else {
      contra.type = 'password'
    }
  }

  if (!mount) {
    return <span>Loading...</span>
  }

  return (
    <HomeLayout>
      <h1 className="mb-5">Iniciar sesión</h1>
      <form onSubmit={validateForm} className="mx-auto text-center" style={{maxWidth: '360px'}}>
        <div className="form-group mb-3">
          <input type="text" className="form-control text-center" placeholder="Usuario" id="usuario"/>
          <div className="invalid-feedback text-center">
            Por favor introduce un usuario.
          </div>
        </div>
        <div className="form-group mb-3">
          <input type="password" className="form-control text-center" placeholder="Contraseña" name="contra" id="contra"/>
          <div className="invalid-feedback text-center">
            Por favor introduce la contraseña ligada a tu usuario.
          </div>
        </div>
        <div className="custom-control custom-switch text-center mb-3">
        <input type="checkbox" className="custom-control-input" id="showPassword" onChange={showPassword} />
        <label className="custom-control-label" htmlFor="showPassword">Mostrar contraseña</label>
        </div>
        <div className="d-flex flex-column align-items-center">
        <button type="submit" className="btn btn-primary">Iniciar sesión</button>
        <button type="submit" className="btn btn-link">Crear cuenta</button>
        </div>
      </form>
    </HomeLayout>
  )
}
