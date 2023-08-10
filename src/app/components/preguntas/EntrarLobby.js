import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import React from 'react'

const EntrarLobby = ({
  lobbyId,
  setLobbyId,
  cedula,
  setCedula,
  entrarLobby,
  error,
  success
}) => {
  return (
    <>
      <h1 className='text-center font-bold text-lg'>Ingresar a un Sorteo</h1>
      <div className='flex items-center justify-center flex-column h-screen'>
        <div className='bg-slate-800 p-2 border border-white mb-20'>
          <div className='underline underline-offset-4 font-500 [hover]'>
            <span className='text-lg'>Ingresar a un lobby</span>
          </div>
          <InputText
            value={lobbyId}
            onChange={e => {
              setLobbyId(e.target.value)
            }}
            placeholder='Pin del Lobby'
            className='my-2 w-full'
          />
          <InputText
            value={cedula}
            onChange={e => {
              setCedula(e.target.value)
            }}
            placeholder='Tu Cedula'
            className='my-2 w-full'
          />
          <Button
            label='Entrar'
            className='my-2'
            severity='secondary'
            onClick={entrarLobby}
          />
          {error && <label>{error}</label>}
          {success && <label>Entraste al lobby {lobbyId}</label>}
        </div>
      </div>
    </>
  )
}

export default EntrarLobby
