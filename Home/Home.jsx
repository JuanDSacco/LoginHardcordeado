import React from 'react'
import '../css/home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='divHome'>
            <h1>Bienvenidos a JuanWeb</h1>
            <h4>Una web en la que solo podrá loguearse y desloguearse sin más</h4>
            <Link to={'/login'}><button>Login</button></Link>
            <Link to={'/usuarios-y-contraseñas'}><button>Usuarios y contraseñas</button></Link>
        </div>
    )
}

export default Home
