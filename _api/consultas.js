import fetch from 'isomorphic-fetch'

const uri = 'http://192.168.0.11/api/Matronas/'

export async function authSession(session) {
  const url = uri + 'Usuario/Autenticacion'
	const resp = await fetch(url, {
		method: 'POST',
		credentials: "same-origin",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(session)
	})

	var data = null;

	if (resp.status == 200) {
		data = await resp.json()
	}
	else{
		data = await resp.text()
	}
	
  return {data: data, status: resp.status}
}

export async function getUsuarios() {
  const url = uri + 'Usuarios'
	const resp = await fetch(url, {
		method: 'GET'
	})

	if(resp.ok) {
		const data = await resp.json()

		//console.log(data);
	
	 	return data.map(
			usuario => {
				return {
					username : usuario.idUsuario,
					correo : usuario.correoUsu,
					tipo : usuario.tipoUsu,
					id : usuario.idUsuTabla,
					fecha : usuario.fechaUsu
				}
			}
		)
 	}
 	return []
}

export async function getUsuariobyId(id) {
  const url = uri + 'Usuario/' + id
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
				id : usuario.idUsuTabla,
				fecha : usuario.fechaUsu
			}
		}
	)
}

export async function addUsuario(user) {
  const url = uri + 'Usuario/Agrega'
	const resp = await fetch(url, {
		method: 'POST',
		credentials: "same-origin",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(user)
	})
	
  return resp
}

export async function modifyUsuario(user) {
  const url = uri + 'Usuario/Actualiza/' + user.idUsuario;
  const body = JSON.stringify(user);
  console.log(body);
	const resp = await fetch(url, {
		method: 'PUT',
		credentials: "same-origin",
		headers: {
			'Content-Type': 'application/json'
		},
		body: body
	})
	
  	return resp
}

export async function deleteUsuario(id) {
  const url = uri + 'Usuario/Elimina/' + id
	const resp = await fetch(url, {
		method: 'DELETE',
		credentials: "same-origin",
		headers: {
			'Content-Type': 'application/json'
		}
	})
	
  return resp
}

export async function getClaseE() {
  const url = uri + 'ClaseE/'
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
  const url = uri + 'ClaseE/' + id
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
  const url = uri + 'ClaseE/Agrega'
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
  const url = uri + 'ClaseE/Actualiza/' + claseE.idEc
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
  const url = uri + 'ClaseE/Elimina/' + id
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
  const url = uri + 'CentroE/'
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
  const url = uri + 'CentroE/' + id
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
  const url = uri + 'CentroE/Agrega'
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
  const url = uri + 'CentroE/Actualiza/' + centroE.idCe
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
  const url = uri + 'CentroE/Elimina/' + id
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
  const url = uri + 'CentroM/'
	const resp = await fetch(url, {
		method: 'GET'
	})
	const data = await resp.json()
	
 	return data.map(
		centroM => {
  			return{
	  			idcentro : centroM.idCentro1,
	  			idmatrona : centroM.idMatrona1,
	  			idCm : centroM.idCm
  			}
  		}
	)
}

export async function getCentroMbyId(id) {
  const url = uri + 'CentroM/' + id
	const resp = await fetch(url, {
		method: 'GET'
	})
	const data = await resp.json()
	
  	return data.map(
  		centroM => {
  			return{
	  			idcentro : centroM.idCentro1,
	  			idmatrona : centroM.idMatrona1,
	  			idCm : centroM.idCm
  			}
  		}
	)

}

export async function addCentroM(user) {
  const url = uri + 'CentroM/Agrega'
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
  const url = uri + 'CentroM/Actualiza/' + user.idUsuario
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
  const url = uri + 'CentroM/Elimina/' + id
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
  const url = uri + 'Asistencias/'
	const resp = await fetch(url, {
		method: 'GET'
	})
	const data = await resp.json()
	
 	return data.map(
		asistencia => {
			return {
				idAsist : asistencia.idAsist,
				descAsist : asistencia.descAsist,
				fechaAsist : asistencia.fechaAsist,
				idClase : asistencia.idClase2
			}
		}
	)
}

export async function getAsistenciasbyId(id) {
  const url = uri + 'Asistencias/' + id
	const resp = await fetch(url, {
		method: 'GET'
	})
	const data = await resp.json()
	
  return data.map(
		asistencia => {
			return {
				idAsist : asistencia.idAsist,
				descAsist : asistencia.descAsist,
				fechaAsist : asistencia.fechaAsist,
				idClase : asistencia.idClase2
			}
		}
	)
}

export async function addAsistencias(user) {
  const url = uri + 'Asistencias/Agrega'
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
  const url = uri + 'Asistencias/Actualiza/' + user.idUsuario
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
  const url = uri + 'Asistencias/Elimina/' + id
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
  const url = uri + 'Clases/'
	const resp = await fetch(url, {
		method: 'GET'
	})
	const data = await resp.json()
	
 	return data.map(
		clase => {
			return {
				idClase : clase.idClase,
				descClase : clase.descClase,
				horaClase : clase.horaClase,
				duracionClase : clasei.duracionClase
			}
		}
	)
}

export async function getClasesbyId(id) {
  const url = uri + 'Clases/' + id
	const resp = await fetch(url, {
		method: 'GET'
	})
	const data = await resp.json()
	
  return data.map(
		clase => {
			return {
				idClase : clase.idClase,
				descClase : clase.descClase,
				horaClase : clase.horaClase,
				duracionClase : clasei.duracionClase
			}
		}
	)
}

export async function addClases(user) {
  const url = uri + 'Clases/Agrega'
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
  const url = 'https:uri + /Actualiza/' + user.idUsuario
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
  const url = 'https:uri + /Elimina/' + id
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
  const url = uri + 'Embarazadas/'
	const resp = await fetch(url, {
		method: 'GET'
	})
	const data = await resp.json()
	
 	return data.map(
		embarazada => {
			return {
				idEmbarazada : embarazada.idEmbarazada,
				nomEmbarazada : embarazada.nomEmbarazada,
				dirEmbarazada : embarazada.dirEmbarazada,
				semGest : embarazada.semGest,
				numHijos : embarazada.numHijos,
				telEmbarazada : embarazada.telEmbarazada
			}
		}
	)
}

export async function getEmbarazadasbyId(id) {
  const url = uri + 'Embarazadas/' + id
	const resp = await fetch(url, {
		method: 'GET'
	})
	const data = await resp.json()
	
  return data.map(
		embarazada => {
			return {
				idEmbarazada : embarazada.idEmbarazada,
				nomEmbarazada : embarazada.nomEmbarazada,
				dirEmbarazada : embarazada.dirEmbarazada,
				semGest : embarazada.semGest,
				numHijos : embarazada.numHijos,
				telEmbarazada : embarazada.telEmbarazada
			}
		}
	)
}

export async function addEmbarazadas(user) {
  const url = uri + 'Embarazadas/Agrega'
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
  const url = uri + 'Embarazadas/Actualiza/' + user.idUsuario
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
  const url = uri + 'Embarazadas/Elimina/' + id
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
  const url = uri + 'Matronas/'
	const resp = await fetch(url, {
		method: 'GET'
	})
	const data = await resp.json()
	
 	return data.map(
		matrona => {
			return {
				idMatrona : matrona.idMatrona,
				nomMatrona : matrona.nomMatrona,
				telMatrona : matrona.telMatrona,
				dirMatrona : matrona.dirMatrona,
				horarioMatr : matrona.horarioMatr
			}
		}
	)
}

export async function getMatronasbyId(id) {
  const url = uri + 'Matronas/' + id
	const resp = await fetch(url, {
		method: 'GET'
	})
	const data = await resp.json()
	
  return data.map(
		matrona => {
			return {
				idMatrona : matrona.idMatrona,
				nomMatrona : matrona.nomMatrona,
				telMatrona : matrona.telMatrona,
				dirMatrona : matrona.dirMatrona,
				horarioMatr : matrona.horarioMatr
			}
		}
	)
}

export async function addMatronas(user) {
  const url = uri + 'Matronas/Agrega'
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
  const url = uri + 'Matronas/Actualiza/' + user.idUsuario
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
  const url = uri + 'Matronas/Elimina/' + id
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
  const url = uri + 'Centros/'
	const resp = await fetch(url, {
		method: 'GET'
	})
	const data = await resp.json()
	
 	return data.map(
		centro => {
			return {
				idCentro : centro.idCentro,
				telCentro : centro.telCentro,
				dirCentro : centro.dirCentro,
				numGym : centro.numGym,
				salaEsp : centro.salaEsp
			}
		}
	)
}

export async function getCentrosbyId(id) {
  const url = uri + 'Centros/' + id
	const resp = await fetch(url, {
		method: 'GET'
	})
	const data = await resp.json()
	
  return data.map(
		centro => {
			return {
				idCentro : centro.idCentro,
				telCentro : centro.telCentro,
				dirCentro : centro.dirCentro,
				numGym : centro.numGym,
				salaEsp : centro.salaEsp
			}
		}
	)
}

export async function addCentros(user) {
  const url = uri + 'Centros/Agrega'
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
  const url = uri + 'Centros/Actualiza/' + user.idUsuario
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
  const url = uri + 'Centros/Elimina/' + id
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