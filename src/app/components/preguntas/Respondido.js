import React from 'react'
import { ClipLoader } from 'react-spinners'

const Respondido = () => {
  return (
    <div className='flex justify-center h-96 items-center my-32 flex-column'>
      <h1 className='font-bold text-center mb-6'>Respuesta Recibida</h1>
      <ClipLoader color='#fff' size={400} />
    </div>
  )
}

export default Respondido
