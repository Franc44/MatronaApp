import fetch from 'isomorphic-fetch'

export async function authSession(session) {
  const url = 'https://192.168.2.8/api/Matronas/Usuario/Autenticacion'
	const resp = await fetch(url, {
		method: 'POST',
		credentials: "same-origin",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(session)
	})
	const data = await resp.json()
	console.log(data);
	
  return {data: data, status: resp.status}
}

export async function getUsuarios() {
  const url = 'https://192.168.2.8/api/Matronas/Usuarios/'
	const resp = await fetch(url, {
		method: 'GET'
	})
	const data = await resp.json()
	
 	return data.map(
		usuario => {
			return {
				username : usuario.idUsuario,
				correo : usuario.correoUsu,
				tipo : usuario.tipoUsu,
				id : idUsuTabla,
				fecha : fechaUsu
			}
		}
	)
}

export async function getUsuariobyId(id) {
  const url = 'https://192.168.2.8/api/Matronas/Usuario/' + id
	const resp = await fetch(url, {
		method: 'GET'
	})
	const data = await resp.json()
	
  return data.map(
		usuario => {
			return {
				username : usuario.idUsuario,
				correo : usuario.correoUsu,
				tipo : usuario.tipoUsu,
				id : idUsuTabla,
				fecha : fechaUsu
			}
		}
	)
}

export async function addUsuario(user) {
  const url = 'https://192.168.2.8/api/Matronas/Usuario/Agrega'
	const resp = await fetch(url, {
		method: 'POST',
		credentials: "same-origin",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	const data = await resp.json()
	console.log(data);
	
  return resp
}

export async function modifyUsuario(user) {
  const url = 'https://192.168.2.8/api/Matronas/Usuario/Actualiza/' + user.idUsuario
	const resp = await fetch(url, {
		method: 'PUT',
		credentials: "same-origin",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	const data = await resp.json()
	
  	return resp
}

export async function deleteUsuario(id) {
  const url = 'https://192.168.2.8/api/Matronas/Usuario/Elimina/' + id
	const resp = await fetch(url, {
		method: 'DELETE',
		credentials: "same-origin",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	const data = await resp.json()
	console.log(data);
	
  return {data: data, status: resp.status}
}

export async function getClaseE() {
  const url = 'https://192.168.2.8/api/Matronas/ClaseE/'
	const resp = await fetch(url, {
		method: 'GET'
	})
	const data = await resp.json()
	
 	return data.map(
		claseE => {
			return {
				idembarazada : claseE.idEmbarazada2,
				idClase : claseE.idClase1,
				idEc : claseE.idEc
			}
		}
	)
}

export async function getClaseEbyId(id) {
  const url = 'https://192.168.2.8/api/Matronas/ClaseE/' + id
	const resp = await fetch(url, {
		method: 'GET'
	})
	const data = await resp.json()
	
  return data.map(
		claseE => {
			return {
				idembarazada : claseE.idEmbarazada2,
				idClase : claseE.idClase1,
				idEc : claseE.idEc
			}
		}
	)
}

export async function addClaseE(user) {
  const url = 'https://192.168.2.8/api/Matronas/ClaseE/Agrega'
	const resp = await fetch(url, {
		method: 'POST',
		credentials: "same-origin",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	const data = await resp.json()
	console.log(data);
	
  return resp
}

export async function modifyClaseE(claseE) {
  const url = 'https://192.168.2.8/api/Matronas/ClaseE/Actualiza/' + claseE.idEc
	const resp = await fetch(url, {
		method: 'PUT',
		credentials: "same-origin",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	const data = await resp.json()
	
  	return resp
}

export async function deleteClaseE(id) {
  const url = 'https://192.168.2.8/api/Matronas/ClaseE/Elimina/' + id
	const resp = await fetch(url, {
		method: 'DELETE',
		credentials: "same-origin",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	const data = await resp.json()
	console.log(data);
	
  return {data: data, status: resp.status}
}


export async function getCentroE() {
  const url = 'https://192.168.2.8/api/Matronas/CentroE/'
	const resp = await fetch(url, {
		method: 'GET'
	})
	const data = await resp.json()
	
 	return data.map(
		centroE => {
			return {
				idembarazada : centroE.idEmbarazada1,
				idCentro : centroE.idCentro2,
				idCe : centroE.idCe
			}
		}
	)
}

export async function getCentroEbyId(id) {
  const url = 'https://192.168.2.8/api/Matronas/CentroE/' + id
	const resp = await fetch(url, {
		method: 'GET'
	})
	const data = await resp.json()
	
  return data.map(
		centroE => {
			return {
				idembarazada : centroE.idEmbarazada1,
				idCentro : centroE.idCentro2,
				idCe : centroE.idCe
			}
		}
	)
}

export async function addCentroE(centroE) {
  const url = 'https://192.168.2.8/api/Matronas/CentroE/Agrega'
	const resp = await fetch(url, {
		method: 'POST',
		credentials: "same-origin",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	const data = await resp.json()
	console.log(data);
	
  return resp
}

export async function modifyCentroE(centroE) {
  const url = 'https://192.168.2.8/api/Matronas/CentroE/Actualiza/' + centroE.idCe
	const resp = await fetch(url, {
		method: 'PUT',
		credentials: "same-origin",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	const data = await resp.json()
	
  	return resp
}

export async function deleteCentroE(id) {
  const url = 'https://192.168.2.8/api/Matronas/CentroE/Elimina/' + id
	const resp = await fetch(url, {
		method: 'DELETE',
		credentials: "same-origin",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	const data = await resp.json()
	console.log(data);
	
  return {data: data, status: resp.status}
}


export async function getCentroM() {
  const url = 'https://192.168.2.8/api/Matronas/CentroM/'
	const resp = await fetch(url, {
		method: 'GET'
	})
	const data = await resp.json()
	
 	return data.map(
		usuario => {
			return {
				username : usuario.idUsuario,
				correo : usuario.correoUsu,
				tipo : usuario.tipoUsu,
				id : idUsuTabla,
				fecha : fechaUsu
			}
		}
	)
}

export async function getCentroMbyId(id) {
  const url = 'https://192.168.2.8/api/Matronas/CentroM/' + id
	const resp = await fetch(url, {
		method: 'GET'
	})
	const data = await resp.json()
	
  return data.map(
		usuario => {
			return {
				username : usuario.idUsuario,
				correo : usuario.correoUsu,
				tipo : usuario.tipoUsu,
				id : idUsuTabla,
				fecha : fechaUsu
			}
		}
	)
}

export async function addCentroM(user) {
  const url = 'https://192.168.2.8/api/Matronas/CentroM/Agrega'
	const resp = await fetch(url, {
		method: 'POST',
		credentials: "same-origin",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	const data = await resp.json()
	console.log(data);
	
  return resp
}

export async function modifyCentroM(user) {
  const url = 'https://192.168.2.8/api/Matronas/CentroM/Actualiza/' + user.idUsuario
	const resp = await fetch(url, {
		method: 'PUT',
		credentials: "same-origin",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	const data = await resp.json()
	
  	return resp
}

export async function deleteCentroM(id) {
  const url = 'https://192.168.2.8/api/Matronas/CentroM/Elimina/' + id
	const resp = await fetch(url, {
		method: 'DELETE',
		credentials: "same-origin",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	const data = await resp.json()
	console.log(data);
	
  return {data: data, status: resp.status}
}

export async function getAsistencias() {
  const url = 'https://192.168.2.8/api/Matronas/Asistencias/'
	const resp = await fetch(url, {
		method: 'GET'
	})
	const data = await resp.json()
	
 	return data.map(
		usuario => {
			return {
				username : usuario.idUsuario,
				correo : usuario.correoUsu,
				tipo : usuario.tipoUsu,
				id : idUsuTabla,
				fecha : fechaUsu
			}
		}
	)
}

export async function getAsistenciasbyId(id) {
  const url = 'https://192.168.2.8/api/Matronas/Asistencias/' + id
	const resp = await fetch(url, {
		method: 'GET'
	})
	const data = await resp.json()
	
  return data.map(
		usuario => {
			return {
				username : usuario.idUsuario,
				correo : usuario.correoUsu,
				tipo : usuario.tipoUsu,
				id : idUsuTabla,
				fecha : fechaUsu
			}
		}
	)
}

export async function addAsistencias(user) {
  const url = 'https://192.168.2.8/api/Matronas/Asistencias/Agrega'
	const resp = await fetch(url, {
		method: 'POST',
		credentials: "same-origin",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	const data = await resp.json()
	console.log(data);
	
  return resp
}

export async function modifyAsistencias(user) {
  const url = 'https://192.168.2.8/api/Matronas/Asistencias/Actualiza/' + user.idUsuario
	const resp = await fetch(url, {
		method: 'PUT',
		credentials: "same-origin",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	const data = await resp.json()
	
  	return resp
}

export async function deleteAsistencias(id) {
  const url = 'https://192.168.2.8/api/Matronas/Asistencias/Elimina/' + id
	const resp = await fetch(url, {
		method: 'DELETE',
		credentials: "same-origin",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	const data = await resp.json()
	console.log(data);
	
  return {data: data, status: resp.status}
}

export async function getClases() {
  const url = 'https://192.168.2.8/api/Matronas/Clases/'
	const resp = await fetch(url, {
		method: 'GET'
	})
	const data = await resp.json()
	
 	return data.map(
		usuario => {
			return {
				username : usuario.idUsuario,
				correo : usuario.correoUsu,
				tipo : usuario.tipoUsu,
				id : idUsuTabla,
				fecha : fechaUsu
			}
		}
	)
}

export async function getClasesbyId(id) {
  const url = 'https://192.168.2.8/api/Matronas/Clases/' + id
	const resp = await fetch(url, {
		method: 'GET'
	})
	const data = await resp.json()
	
  return data.map(
		usuario => {
			return {
				username : usuario.idUsuario,
				correo : usuario.correoUsu,
				tipo : usuario.tipoUsu,
				id : idUsuTabla,
				fecha : fechaUsu
			}
		}
	)
}

export async function addClases(user) {
  const url = 'https://192.168.2.8/api/Matronas/Clases/Agrega'
	const resp = await fetch(url, {
		method: 'POST',
		credentials: "same-origin",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	const data = await resp.json()
	console.log(data);
	
  return resp
}

export async function modifyClases(user) {
  const url = 'https://192.168.2.8/api/Matronas/Clases/Actualiza/' + user.idUsuario
	const resp = await fetch(url, {
		method: 'PUT',
		credentials: "same-origin",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	const data = await resp.json()
	
  	return resp
}

export async function deleteClases(id) {
  const url = 'https://192.168.2.8/api/Matronas/Clases/Elimina/' + id
	const resp = await fetch(url, {
		method: 'DELETE',
		credentials: "same-origin",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	const data = await resp.json()
	console.log(data);
	
  return {data: data, status: resp.status}
}

export async function getEmbarazadas() {
  const url = 'https://192.168.2.8/api/Matronas/Embarazadas/'
	const resp = await fetch(url, {
		method: 'GET'
	})
	const data = await resp.json()
	
 	return data.map(
		usuario => {
			return {
				username : usuario.idUsuario,
				correo : usuario.correoUsu,
				tipo : usuario.tipoUsu,
				id : idUsuTabla,
				fecha : fechaUsu
			}
		}
	)
}

export async function getEmbarazadasbyId(id) {
  const url = 'https://192.168.2.8/api/Matronas/Embarazadas/' + id
	const resp = await fetch(url, {
		method: 'GET'
	})
	const data = await resp.json()
	
  return data.map(
		usuario => {
			return {
				username : usuario.idUsuario,
				correo : usuario.correoUsu,
				tipo : usuario.tipoUsu,
				id : idUsuTabla,
				fecha : fechaUsu
			}
		}
	)
}

export async function addEmbarazadas(user) {
  const url = 'https://192.168.2.8/api/Matronas/Embarazadas/Agrega'
	const resp = await fetch(url, {
		method: 'POST',
		credentials: "same-origin",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	const data = await resp.json()
	console.log(data);
	
  return resp
}

export async function modifyEmbarazadas(user) {
  const url = 'https://192.168.2.8/api/Matronas/Embarazadas/Actualiza/' + user.idUsuario
	const resp = await fetch(url, {
		method: 'PUT',
		credentials: "same-origin",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	const data = await resp.json()
	
  	return resp
}

export async function deleteEmbarazadas(id) {
  const url = 'https://192.168.2.8/api/Matronas/Embarazadas/Elimina/' + id
	const resp = await fetch(url, {
		method: 'DELETE',
		credentials: "same-origin",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	const data = await resp.json()
	console.log(data);
	
  return {data: data, status: resp.status}
}

export async function getMatronas() {
  const url = 'https://192.168.2.8/api/Matronas/Matronas/'
	const resp = await fetch(url, {
		method: 'GET'
	})
	const data = await resp.json()
	
 	return data.map(
		usuario => {
			return {
				username : usuario.idUsuario,
				correo : usuario.correoUsu,
				tipo : usuario.tipoUsu,
				id : idUsuTabla,
				fecha : fechaUsu
			}
		}
	)
}

export async function getMatronasbyId(id) {
  const url = 'https://192.168.2.8/api/Matronas/Matronas/' + id
	const resp = await fetch(url, {
		method: 'GET'
	})
	const data = await resp.json()
	
  return data.map(
		usuario => {
			return {
				username : usuario.idUsuario,
				correo : usuario.correoUsu,
				tipo : usuario.tipoUsu,
				id : idUsuTabla,
				fecha : fechaUsu
			}
		}
	)
}

export async function addMatronas(user) {
  const url = 'https://192.168.2.8/api/Matronas/Matronas/Agrega'
	const resp = await fetch(url, {
		method: 'POST',
		credentials: "same-origin",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	const data = await resp.json()
	console.log(data);
	
  return resp
}

export async function modifyMatronas(user) {
  const url = 'https://192.168.2.8/api/Matronas/Matronas/Actualiza/' + user.idUsuario
	const resp = await fetch(url, {
		method: 'PUT',
		credentials: "same-origin",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	const data = await resp.json()
	
  	return resp
}

export async function deleteMatronas(id) {
  const url = 'https://192.168.2.8/api/Matronas/Matronas/Elimina/' + id
	const resp = await fetch(url, {
		method: 'DELETE',
		credentials: "same-origin",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	const data = await resp.json()
	console.log(data);
	
  return {data: data, status: resp.status}
}

export async function getCentros() {
  const url = 'https://192.168.2.8/api/Matronas/Centros/'
	const resp = await fetch(url, {
		method: 'GET'
	})
	const data = await resp.json()
	
 	return data.map(
		usuario => {
			return {
				username : usuario.idUsuario,
				correo : usuario.correoUsu,
				tipo : usuario.tipoUsu,
				id : idUsuTabla,
				fecha : fechaUsu
			}
		}
	)
}

export async function getCentrosbyId(id) {
  const url = 'https://192.168.2.8/api/Matronas/Centros/' + id
	const resp = await fetch(url, {
		method: 'GET'
	})
	const data = await resp.json()
	
  return data.map(
		usuario => {
			return {
				username : usuario.idUsuario,
				correo : usuario.correoUsu,
				tipo : usuario.tipoUsu,
				id : idUsuTabla,
				fecha : fechaUsu
			}
		}
	)
}

export async function addCentros(user) {
  const url = 'https://192.168.2.8/api/Matronas/Centros/Agrega'
	const resp = await fetch(url, {
		method: 'POST',
		credentials: "same-origin",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	const data = await resp.json()
	console.log(data);
	
  return resp
}

export async function modifyCentros(user) {
  const url = 'https://192.168.2.8/api/Matronas/Centros/Actualiza/' + user.idUsuario
	const resp = await fetch(url, {
		method: 'PUT',
		credentials: "same-origin",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	const data = await resp.json()
	
  	return resp
}

export async function deleteCentros(id) {
  const url = 'https://192.168.2.8/api/Matronas/Centros/Elimina/' + id
	const resp = await fetch(url, {
		method: 'DELETE',
		credentials: "same-origin",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	const data = await resp.json()
	console.log(data);
	
  return {data: data, status: resp.status}
}