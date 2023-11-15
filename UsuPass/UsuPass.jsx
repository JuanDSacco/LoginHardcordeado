import React from 'react'
import '../css/usuPass.css'
import { Link } from 'react-router-dom'

const UsuPass = () => {
    return (
        <div className='divUsuPass'>
            <h2>Usuarios y contraseñas</h2>
            <ul>
                <li>Juan</li>
                <li>Usuario: Juan</li>
                <li>Contraseña: 1234</li>
            </ul>
            <ul>
                <li>Lucas</li>
                <li>Usuario: Luquiñas</li>
                <li>Contraseña: 5678</li>
            </ul>
            <ul>
                <li>Mati</li>
                <li>Usuario: Mati</li>
                <li>Contraseña: 9101</li>
            </ul>
            <Link to={'/'}><button className='btnHome'>Home</button></Link>
        </div>
    )
}

export default UsuPass
