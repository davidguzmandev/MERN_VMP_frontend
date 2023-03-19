import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const Header = () => {

    const {cerrarSesion} = useAuth()

  return (
    <header className="py-10 bg-indigo-600">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <h1 className="font-bold text-indigo-200 text-2xl text-center"><span className='text-white  font-black'>Veterinary</span> Patient Manager</h1>

        <nav className="flex flex-col items-center lg:flex-row gap-4 mt-5 lg:mt-0">
          <Link to="/admin" className="text-white uppercase font-bold text-sm">Patients</Link>
          <Link to="/admin/perfil" className="text-white uppercase font-bold text-sm">Profile</Link>
          <button
            type='button'
            className="text-white text-sm uppercase font-bold"
            onClick={cerrarSesion}
          >
          Log out
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header