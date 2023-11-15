import React from 'react'
import '../css/usuLucas.css'
import ImgLucas from '../assets/usuLucas.png'

const LoginLucas = () => {
    return (
        <div>
            <h1>Lucas</h1>
            <img className='imgLucas' src={ImgLucas} alt="Imagen usuario" />
        </div>
    )
}

export default LoginLucas
