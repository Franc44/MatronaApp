import Content from '@components/content';
import Nav from '@components/nav';
import DashboardLayout from '@layouts/dashboard-layout'
import React, {useContext, useEffect, useState} from 'react'
import UserContext from '@components/user-context';
import { getUsuarios } from '@api/consultas';

export async function getStaticPaths() {
  return {
    paths: [
      { params: { view: 'matrona' } },
      { params: { view: 'embarazada' } },
      { params: { view: 'centro' } },
      { params: { view: 'clase' } },
      { params: { view: 'asistencia' } }
    ],
    fallback: false
  };
}

export async function getStaticProps({params, req, res}) {

  return {
    props: {
      view: params.view,
      menu: [
        {name: 'Consulta', href: 'tab-consulta'},
        {name: 'Alta', href: 'tab-alta'},
        {name: 'Baja', href: 'tab-baja'},
        {name: 'Modificar', href: 'tab-modificar'}
      ]
    }
  }
}


export default function View({view, menu}) {
  const title = view.charAt(0).toUpperCase() + view.slice(1);
  const { user } = useContext(UserContext) 
  const [registros, setRegistros] = useState(null)   

  useEffect(() => {
    // Aqui haz la consulta
    getUsuarios().then(resp => {
     if (resp.ok) {
        setRegistros(resp.data) // el resp.data es el array de la respuesta
      } else {
          setTimeout(() => {
            setRegistros([])
          }, 1000)
      }
    })
  }, [])

  if (user.user == null) {
    return (
      <span>Loading...</span>
    )
  } 


  return (
    <DashboardLayout current={view}>
      <h1 className="mb-4">{title}</h1>
      <Nav menu={menu}>
        <Content id="tab-consulta" defaultView>
          <ul className="list-group">
            <li className="list-group-item active">
              <div className="row text-center">
                <span className="col">Usuario</span>
                <span className="col">Correo</span>
                <span className="col">Tipo</span>
                <span className="col">Fecha</span>
              </div>
            </li>
            {
              registros != null
                ? registros.length > 0
                    ? registros.map(
                        (registro, index) => {
                          const {username, correo, tipo, id, fecha} = registro   // atributos de cada registros, estos son los atributos de cada objeto del arreglo obtenido en la respuesta
                          return (
                            <li className="list-group-item" key={index}>
                              <div className="row text-center">
                                <span className="col">{username}</span>
                                <span className="col">{correo}</span>
                                <span className="col">{tipo}</span>
                                <span className="col">{id}</span>
                                <span className="col">{fecha}</span>
                              </div>
                            </li>
                          )
                        }
                      )
                    : (
                        <li className="list-group-item text-center py-5">
                          No hay resultados
                        </li>
                      )
                : (
                    <li className="list-group-item text-center py-5">
                      <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </li>
                  )
            }
          </ul>
        </Content>
        <Content id="tab-alta">
          <p>Contenido de altas</p>
        </Content>
        <Content id="tab-baja">
          <p>Contenido de bajas</p>
        </Content>
        <Content id="tab-modificar">
          <p>Contenido de modificaciones</p>
        </Content>
      </Nav>
    </DashboardLayout>
  )
}
