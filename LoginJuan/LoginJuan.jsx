import React from 'react'
import '../css/usuJuan.css'
import ImgJuan from '../assets/usuJuan.png'

const LoginJuan = () => {
    return (
        <div>
            <h1>Juan</h1>
            <img className='imgJuan' src={ImgJuan} alt="Imagen usuario"/>
        </div>
    )
}

export default LoginJuan
