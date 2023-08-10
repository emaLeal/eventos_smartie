import { Button } from 'primereact/button'
import React from 'react'

const RespuestaLobby = ({ datosSorteo, setRespuesta }) => {
  return (
    <>
      <div className='h-96 items-center flex justify-center text-3xl'>
        <label className='text-center font-bold'>¿{datosSorteo.pregunta}?</label>
      </div>
      <div className='fixed bottom-0 h-72 w-full'>
        <Button
          label={datosSorteo.opcion1}
          className='w-1/2 p-2 h-1/2'
          severity='success'
          onClick={() => setRespuesta(1)}
        />
        <Button
          label={datosSorteo.opcion2}
          className='w-1/2 p-2 h-1/2'
          severity='warning'
          onClick={() => setRespuesta(2)}
        />
        <Button
          label={datosSorteo.opcion3}
          className='w-1/2 p-2 h-1/2'
          severity='danger'
          onClick={() => setRespuesta(3)}
        />
        <Button
          label={datosSorteo.opcion4}
          className='w-1/2 p-2 h-1/2'
          severity='help'
          onClick={() => setRespuesta(4)}
        />
      </div>
    </>
  )
}

export default RespuestaLobby
