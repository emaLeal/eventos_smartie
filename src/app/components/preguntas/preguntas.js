/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import EntrarLobby from './EntrarLobby'
import IngresadoLobby from './IngresadoLobby'
import RespuestaLobby from './RespuestaLobby'
import Respondido from './Respondido'
import Resultado from './Resultado'

const socket = io('https://socket.smartie.com.co')

const PreguntasComponent = () => {
  const [lobbyId, setLobbyId] = useState('')
  const [cedula, setCedula] = useState('')
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
  const [datosSorteo, setDatosSorteo] = useState(null)
  const [respuesta, setRespuesta] = useState(null)
  const [finished, setFinished] = useState(null)
  const [pagina, setPagina] = useState('entrar')
  const [user, setUser] = useState(null)

  const entrarLobby = () => {
    socket.emit('joinLobby', { lobbyId, cedula })
  }

  const dejarLobby = () => {
    const user = JSON.parse(localStorage.getItem('socketUser'))
    socket.emit('leaveLobby', user)
    localStorage.removeItem('socketUser')
    setSuccess(false)
    setLobbyId('')
    setCedula('')
    setPagina('entrar')
  }

  useEffect(() => {
    if (finished !== null) {
      localStorage.removeItem('socketUser')
    }
  }, [finished])

  useEffect(() => {
    if (respuesta !== null) {
      const user = JSON.parse(localStorage.getItem('socketUser'))
      const response = {
        ...user,
        respuesta,
        datosSorteo
      }
      socket.emit('recieveResponse', response)
      setPagina('respondido')
    }
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
      setPagina('ingresado')
      setUser(user)
      localStorage.setItem('socketUser', JSON.stringify(user))
    }
  })

  socket.on('startedTournament', data => {
    console.log(data)
    setPagina('sorteo')
    setDatosSorteo(data)
  })

  socket.on('LobbieDeleted', data => {
    console.log(data)
    setPagina('iniciar')
    setLobbyId('')
    setSuccess(false)
    setError(null)
    setCedula('')
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
      {pagina === 'entrar' && (
        <EntrarLobby
          lobbyId={lobbyId}
          setLobbyId={setLobbyId}
          cedula={cedula}
          error={error}
          success={success}
          setCedula={setCedula}
          entrarLobby={entrarLobby}
        />
      )}
      {pagina === 'ingresado' && (
        <IngresadoLobby user={user} dejarLobby={dejarLobby} />
      )}
      {pagina === 'sorteo' && (
        <RespuestaLobby datosSorteo={datosSorteo} setRespuesta={setRespuesta} />
      )}
      {pagina === 'respondido' && <Respondido />}
      {pagina === 'finalizar' && <Resultado finished={finished} />}
    </>
  )
}

export default PreguntasComponent
