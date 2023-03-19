import {Outlet} from 'react-router-dom'
import Footer from '../components/Footer'

const AuthLayout = () => {
  return (
    <>
        <main className="container mx-auto md:grid md:grid-cols-2 mt-12 gap-12 p-5 items-center">
            <Outlet />
        </main>
        <Footer/>
    </>

    
  )
}

export default AuthLayout;
