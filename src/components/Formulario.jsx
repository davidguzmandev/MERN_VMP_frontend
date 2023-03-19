import { useState, useEffect } from "react"
import Alerta from "./Alerta"
import usePacientes from "../hooks/usePacientes"

const Formulario = () => {

    const [name, setName] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')
    const [id, setId] = useState(null)

    const [alerta, setAlerta] = useState({})

    const { guardarPaciente, paciente } = usePacientes()

    useEffect(() => {
      if(paciente?.name){
            setName(paciente.name)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(new Date(paciente.fecha).toISOString())
            setSintomas(paciente.sintomas)
            setId(paciente._id)
        }
    }, [paciente])
    

    const handleSubmit = e => {
        e.preventDefault()

        //Validar Formulario
        if([name, propietario, email, fecha, sintomas].includes('')) {
            setAlerta({
                msg:'All fields are required',
                error:true
            })
            return;
        }

        guardarPaciente({name, propietario, email, fecha, sintomas, id})
        setAlerta({
            msg:'Saved'
        })
        
        setName('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
        setId('')
    }

    const { msg } = alerta

  return (
    <>
        <h2 className="font-black text-3xl text-center">Patient Manager</h2>

        <p className="text-xl mt-5 mb-10 text-center">Add your patient and <span className="text-indigo-600 font-bold">Manage them </span></p>
        
        <form 
            className='bg-white py-10 px-5 mb-5 lg:mg-0 shadow-md rounded-md'
            onSubmit={handleSubmit}
        >
            <div className='mb-5'>
                <label htmlFor='name' className='text-gray-700 uppercase font-bold'>Pet's name</label>
                <input
                    id='name'
                    type='text'
                    placeholder="What is the pet's name?"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label htmlFor='propietario' className='text-gray-700 uppercase font-bold'>Owner's name</label>
                <input
                    id='propietario'
                    type='text'
                    placeholder="Pet owner's name"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    value={propietario}
                    onChange={e => setPropietario(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label htmlFor='email' className='text-gray-700 uppercase font-bold'>Email</label>
                <input
                    id='email'
                    type='email'
                    placeholder="Owner's email"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label htmlFor='fecha' className='text-gray-700 uppercase font-bold'>Discharge date</label>
                <input
                    id='fecha'
                    type='date'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    value={fecha}
                    onChange={e => setFecha(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label htmlFor='sintomas' className='text-gray-700 uppercase font-bold'>Symptoms</label>
                <textarea
                    id='sintomas'
                    placeholder="Describe the pet's symptoms"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    value={sintomas}
                    onChange={e => setSintomas(e.target.value)}
                />
            </div>
            <input
                type='submit'
                className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors'
                value={id ? 'Save changes' : 'Add patient'}
            />
        </form>

        {msg && <Alerta alerta={alerta}/>}
    </>
  )
}

export default Formulario