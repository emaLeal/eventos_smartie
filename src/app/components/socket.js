/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

const socket = io('http://localhost:3060')

const SocketComponent = () => {
  const [lobbyId, setLobbyId] = useState('')
  const [cedula, setCedula] = useState('')
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
  const [datosSorteo, setDatosSorteo] = useState(null)
  const [respuesta, setRespuesta] = useState(null)
  const [finished, setFinished] = useState(null)
  const [pagina, setPagina] = useState('iniciar')

  const entrarLobby = () => {
    socket.emit('joinLobby', { lobbyId, cedula })
  }

  const dejarLobby = () => {
    const user = JSON.parse(localStorage.getItem('socketUser'))
    localStorage.removeItem('socketUser')
    socket.emit('leaveLobby', user)
    setSuccess(false)
    setLobbyId('')
    setCedula('')
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('socketUser'))
    const response = {
      ...user,
      respuesta,
      datosSorteo
    }
    socket.emit('recieveResponse', response)
  }, [respuesta])

  socket.on('joinedLobby', user => {
    if (user === 'No encontrado') {
      if (localStorage.getItem('socketUser')) {
        localStorage.removeItem('socketUser')
      } else {
        setError('Error, no lobby encontrado')
      }
    } else {
      setSuccess(true)
      setError(null)
      localStorage.setItem('socketUser', JSON.stringify(user))
    }
  })

  socket.on('startedTournament', data => {
    console.log(data)
    setPagina('sorteo')
    setDatosSorteo(data)
  })

  socket.on('joinError', data => {
    setError(data)
  })

  socket.on('finishedTournament', data => {
    const player = data.players.find(player => player.cedula === cedula)
    setFinished(player)
    setPagina('finalizar')
  })

  useEffect(() => {
    if (localStorage.getItem('socketUser')) {
      const user = JSON.parse(localStorage.getItem('socketUser'))
      console.log(user)
      socket.emit('leaveLobby', user)

      socket.emit('joinLobby', user)
    }
  }, [])

  return (
    <>
      {pagina === 'iniciar' && (
        <>
          <InputText
            value={lobbyId}
            onChange={e => {
              setLobbyId(e.target.value)
            }}
            placeholder='LobbyID'
          />
          <InputText
            value={cedula}
            onChange={e => {
              setCedula(e.target.value)
            }}
            placeholder='Cedula'
          />
          <Button label='Entrar' onClick={entrarLobby} />
          <Button label='Salir' onClick={dejarLobby} />
          {error && <label>{error}</label>}
          {success && <label>Entraste al lobby {lobbyId}</label>}
        </>
      )}
      {pagina === 'sorteo' && (
        <>
          <label>¿{datosSorteo.pregunta}?</label>
          <Button label={datosSorteo.opcion1} onClick={() => setRespuesta(1)} />
          <Button label={datosSorteo.opcion2} onClick={() => setRespuesta(2)} />
          <Button label={datosSorteo.opcion3} onClick={() => setRespuesta(3)} />
          <Button label={datosSorteo.opcion4} onClick={() => setRespuesta(4)} />
        </>
      )}
      {pagina === 'finalizar' && (
        <>
          <label>Finalizar Sorteo</label>
          {finished.acertado && <label>Respuesta Correcta</label>}
          {finished.acertado === false && <label>Respuesta Incorrecta</label>}
        </>
      )}
    </>
  )
}

export default SocketComponent
