import { useState } from 'react'
import {Link} from 'react-router-dom'
import clienteAxios from '../config/axios'
import Alerta from '../components/Alerta'

const Registrar = () => {

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ repetirPassword, setRepetirPassword ] = useState('')
    const [alerta, setAlerta] = useState({})

    const handleSubmit = async e => {
        e.preventDefault();

        if([name, email, password, repetirPassword].includes('')){
            setAlerta({msg:'There are empty fields', error: true});
            return;
        }

        if(password !== repetirPassword){
            setAlerta({msg:"Passwords don't match" , error: true});
            return;
        }

        if (password.length < 6){
            setAlerta({msg:"Password must be at least 6 characters" , error: true});
            return;
        }
        
        setAlerta({});

        // Crear el usuario en la API //
        try {
            await clienteAxios.post(`/veterinarios`, {name, email, password}) // Por default es .get
            setAlerta({
                msg: "Created successfully, check your email",
                error: false
            })
        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
        }

    }

    const { msg } = alerta

    return (
      <>
        <div>
            <h1 className="text-indigo-600 font-black text-6xl">
                Create an account and manage your <span className="text-black">Patients</span>
            </h1>
        </div>

        <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white'>
            { msg && <Alerta 
                alerta={alerta}
            />}
            <form 
                onSubmit={handleSubmit}
            >
                <div className="my-5">
                    <label className="uppercase text-gray-600 block text-xl font-bold">
                        Name
                    </label>
                    <input 
                        type="text" 
                        placeholder="Your name"
                        className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>

                <div className="my-5">
                    <label className="uppercase text-gray-600 block text-xl font-bold">
                        Email
                    </label>
                    <input 
                        type="text" 
                        placeholder="Registered Email"
                        className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className="my-5">
                    <label className="uppercase text-gray-600 block text-xl font-bold">
                        Password
                    </label>
                    <input 
                        type="password" 
                        placeholder="Your password"
                        className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>

                <div className="my-5">
                    <label className="uppercase text-gray-600 block text-xl font-bold">
                        Repeat Password
                    </label>
                    <input 
                        type="password" 
                        placeholder="Type your password again"
                        className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                        value={repetirPassword}
                        onChange={e => setRepetirPassword(e.target.value)}
                    />
                </div>

                <input type="submit" value="Create Account" className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"/>
            </form>

            <nav className='mt-6 lg:flex lg:justify-between'>
                <Link 
                to="/" 
                className='block text-center my-5 text-gray-500'>
                    Do you already have an account? Log in</Link>
                <Link 
                to="/olvide-password" 
                className='block text-center my-5 text-gray-500'>
                    Forgotten password</Link>
            </nav>

        </div>
      </>
    )
  }
  
  export default Registrar