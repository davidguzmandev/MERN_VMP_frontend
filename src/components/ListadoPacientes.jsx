import usePacientes from "../hooks/usePacientes"
import Paciente from "./Paciente";

const ListadoPacientes = () => {

    const { pacientes } = usePacientes()

  return (
    <>
        {pacientes.length ? (
            <>
                <h2 className="font-black text-3xl text-center">Patient List</h2>

                <p className="text-xl mt-5 mb-10 text-center">Manage your <span className="text-indigo-600 font-bold">patients and appointments</span></p>

                {pacientes.map(paciente => (
                    <Paciente
                        key={paciente._id}
                        paciente={paciente}
                    />
                    ))}
            </>
        ) : 
        (
            <>
                <h2 className="font-black text-3xl text-center">No patients</h2>

                <p className="text-xl mt-5 mb-10 text-center">Start adding patients and they will <span className="text-indigo-600 font-bold">appear here</span></p>
            </>
        )}
    </>
  )
}

export default ListadoPacientes