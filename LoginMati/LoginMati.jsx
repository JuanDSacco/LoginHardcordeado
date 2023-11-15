import React from 'react'
import '../css/usuMati.css'
import ImgMati from '../assets/usuMati.png'

const LoginMati = () => {
    return (
        <div>
            <h1>Mati</h1>
            <img className='imgMati' src={ImgMati} alt="Imagen usuario"/>
        </div>
    )
}

export default LoginMati
