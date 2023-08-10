import React from 'react'

const Resultado = ({ finished }) => {
  return (
    <>
      {finished.acertado && (
        <>
          <div className='h-screen flex justify-center items-center'>
            <div className='rounded-full bg-white p-6'>
              <span className='text-green-700 font-bold text-lg'>
                FELICIDADES, HAS ACERTADO!!!
              </span>
            </div>
          </div>
        </>
      )}
      {finished.acertado === false && (
        <>
          <div className='h-screen flex justify-center items-center'>
            <div className='rounded-full bg-white p-6'>
              <span className='text-red-700 font-bold text-lg'>
                LO SENTIMOS, TE HAS EQUIVOCADO, SUERTE PARA LA PROXIMA!!!
              </span>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Resultado
