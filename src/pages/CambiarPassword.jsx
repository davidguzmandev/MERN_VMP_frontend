import { useState } from "react"
import AdminNav from "../components/AdminNav"
import Alerta from "../components/Alerta"
import useAuth from "../hooks/useAuth"

const CambiarPassword = () => {

    const {guardarPassword} = useAuth() 

    const [alerta, setAlerta] = useState({})
    const [password, setPassword] = useState({
        pwd_actual:'',
        pwd_nuevo:''
    })

    const handleSubmit = async e => {
        e.preventDefault()

        if (Object.values(password).some(campo => campo === '')){
            setAlerta({
                msg:'All filds are required',
                error: true
            })
            return
        }

        if (password.pwd_nuevo.length < 6){
            setAlerta({
                msg:'Password must have at least 6 characters',
                error: true
            })
            return
        }
        const respuesta = await guardarPassword(password)

        setAlerta(respuesta)
    }

    const { msg } = alerta

  return (
    <>
        <AdminNav/>
        <h2 className="font-black text-3xl text-center mt-10"> Change Password</h2>
        <p className="text-xl mt-5 mb-10 text-center">Modify your 
        <span className="text-indigo-600 font-bold"> password</span></p>

        <div className="flex justify-center">
            <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">
                {msg && <Alerta alerta={alerta}/>}

                <form onSubmit={handleSubmit}>

                    <div className="my-3">
                        <label className="uppercase font-bold text-gray-600">Current Password</label>
                        <input 
                            type='password'
                            className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                            name='pwd_actual'
                            placeholder="Type your current password"
                            onChange= {e => setPassword({
                                ...password,
                                [e.target.name] : e.target.value
                            })}
                        />
                    </div>

                    <div className="my-3">
                        <label className="uppercase font-bold text-gray-600">New Password</label>
                        <input 
                            type='password'
                            className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                            name='pwd_nuevo'
                            placeholder="Type your NEW password"
                            onChange= {e => setPassword({
                                ...password,
                                [e.target.name] : e.target.value
                            })}
                        />
                    </div>
                    
                    <input
                        type='submit'
                        value='Update Password'
                        className="bg-indigo-600 px-10 py-3 font-bold text-white rounded-lg uppercase w-full mt-5 cursor-pointer hover:bg-indigo-700"
                    />
                </form>
            </div>
        </div>
    </>
  )
}

export default CambiarPassword