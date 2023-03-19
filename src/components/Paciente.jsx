import usePacientes from "../hooks/usePacientes"

const Paciente = ({paciente}) => {

    const {setEdicion, eliminarPaciente } = usePacientes()

    const {email, fecha, name, propietario, sintomas, _id} = paciente

    const formatearFecha = (fecha) => {
        const nuevaFecha = new Date(fecha)
        return new Intl.DateTimeFormat('en-US', {dateStyle: 'long'}).format(nuevaFecha)
    }

  return (
    <div className="mx-5 my-5 bg-white shadow-md px-5 py-8 rounded-xl">
        <p className="font-bold uppercase text-indigo-700 my-1">Name: 
            <span className="font-normal normal-case text-black"> {name}</span>
        </p>
        <p className="font-bold uppercase text-indigo-700 my-1">Owner: 
            <span className="font-normal normal-case text-black"> {propietario}</span>
        </p>
        <p className="font-bold uppercase text-indigo-700 my-1">Email: 
            <span className="font-normal normal-case text-black"> {email}</span>
        </p>
        <p className="font-bold uppercase text-indigo-700 my-1">Discharge date: 
            <span className="font-normal normal-case text-black"> {formatearFecha(fecha)}</span>
        </p>
        <p className="font-bold uppercase text-indigo-700 my-1">Symptoms: 
            <span className="font-normal normal-case text-black"> {sintomas}</span>
        </p>

        <div className="flex justify-between mt-5 my-5">
            <button
                type='button'
                className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase rounded-lg font-bold"
                onClick={()=> setEdicion(paciente)}
            > Edit
            </button>
            <button
                type='button'
                className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase rounded-lg font-bold"
                onClick={()=> eliminarPaciente(_id)}
            > Delete
            </button>
        </div>
    </div>  
  )
}

export default Paciente