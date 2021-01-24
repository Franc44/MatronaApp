import Content from '@components/content';
import Nav from '@components/nav';
import DashboardLayout from '@layouts/dashboard-layout'
import React, {useContext, useEffect} from 'react'
import UserContext from '@components/user-context';

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

  const { user } = useContext(UserContext) // puedes acceder al nombre del usuario con user.id y al token con user.token

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
          <p>Contenido de Consultas</p>
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
