import {Link, useNavigate} from 'react-router-dom'
import useAuth from '../hooks/useAuth';
import { useState } from 'react';
import Alerta from '../components/Alerta';
import clienteAxios from '../config/axios';

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alerta, setAlerta] = useState({})

    const {setAuth} = useAuth()

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        if ([email, password].includes('')){
            setAlerta({
                msg: "All fields are required",
                error: true
            });

            return
        }

        try {
            const {data}= await clienteAxios.post('/veterinarios/login', {email, password})
            localStorage.setItem('token', data.token)
            setAuth(data)
            navigate('/admin')
        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
        }
    }

    const {msg} = alerta 

  return (
    <>
        <div>
            <h1 className="text-indigo-600 font-black text-6xl">
                Log in and Manage your <span className="text-black">Patients</span>
            </h1>
        </div>

        <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white'>

            { msg && <Alerta 
                    alerta={alerta}
            />}

            <form onSubmit={handleSubmit}>
                <div className="my-5">
                    <p>Try with this user: test@test.com and password test123</p>
                    <br>
                    <p>Try with this user: test@test.com and password test123</p>
                    <label className="uppercase text-gray-600 block text-xl font-bold">
                        Email
                    </label>
                    <input 
                        type="text" 
                        placeholder="Registered Email"
                        className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                        value = {email}
                        onChange = { e => setEmail (e.target.value)}
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
                        value = {password}
                        onChange = { e => setPassword (e.target.value)}
                    />
                </div>

                <input type="submit" value="Log in" className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"/>
            </form>

            <nav className='mt-6 lg:flex lg:justify-between'>
                <Link 
                to="/registrar" 
                className='block text-center my-5 text-gray-500'>
                    Don't have an account? Sign up</Link>
                <Link 
                to="/olvide-password" 
                className='block text-center my-5 text-gray-500'>
                    Forgotten password</Link>
            </nav>
        </div>
    </>
  )
}

export default Login;
