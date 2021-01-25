import { getUsuarios } from "@api/consultas"
import React, { useEffect, useRef, useState } from "react"

export const useUsuarios = () => {
  const [data, setData] = useState({array: null, loading: true})

  useEffect(() => {
    getItems()
  }, [])
  
  const refresh = () => {
		setData({array: null, loading: true})
		getItems()
	}

  const getItems = () => {
    getUsuarios()
      .then( resp => {
        setData({array: resp, loading: false})
      })
  }

  return {data, refresh}
}