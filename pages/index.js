import UserContext from '@components/user-context'
import HomeLayout from '@layouts/home-layout'
import Router from 'next/router'
import React, { useContext, useEffect } from 'react'

export default function Home() {

  const {user} = useContext(UserContext)

  useEffect(() => {
    if(user.user != null) {
      Router.push('/matrona')
    }
  }, [user])

  return <span>Loading...</span>
}