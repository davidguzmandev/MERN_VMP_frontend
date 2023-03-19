import { useState } from 'react'
import React from 'react'
import Formulario from '../components/Formulario'
import ListadoPacientes from '../components/ListadoPacientes'

const AdministrarPacientes = () => {

  const [mostrarFormulario, setMostrarFormulario] = useState(true)

  return (
    <div className='flex flex-col md:flex-row'>
      
      <button 
      type='button'
      className= {`${ mostrarFormulario ? 'md:hidden' : 'h-14' } bg-indigo-600 text-white font-bold uppercase mx-10 p-3 rounded-md mb-10 `}
      onClick={() => setMostrarFormulario(!mostrarFormulario)}
      >{mostrarFormulario ? 'Hide form' : 'Show form'}</button>

      <div className={`${ mostrarFormulario ? 'block' : 'hidden' } md: block md:w-1/2 lg:w-2/5`}>
        <Formulario/>
      </div>

      <div className='md:w-1/2 lg:w-3/5'>
        <ListadoPacientes/>
      </div>
    </div>
  )
}

export default AdministrarPacientes