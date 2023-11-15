import React from 'react'
import { useState } from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import '../css/login.css'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

const Login = ({login,setLogin}) => {

    const [userJuan,setUserJuan] = useState(false)
    const [userLucas,setUserLucas] = useState(false)
    const [userMati,setUserMati] = useState(false)

    const db = [
        {
            nombre: 'JUAN',
            constraseña: '1234',
        },
        {
            nombre: 'LUQUIÑAS',
            constraseña: '5678',
        },
        {
            nombre: 'MATI',
            constraseña: '9101',
        }
    ]

    const Ingresar = () => {

        let user =  prompt('Ingrese su nombre de usuario')
        let userVerification = user.toUpperCase()
        let password = prompt('Ingrese su contraseña')
    
        const verification = db.some(usu => usu.nombre === userVerification && usu.constraseña === password)

        if(verification === true){
            if(userVerification === 'JUAN'){
                setUserJuan(true)
                setLogin(true)
                setUserLucas(false)
                setUserMati(false)
                Swal.fire("¡Bienvenido Juan!");
            }else if(userVerification === 'LUQUIÑAS'){
                setUserLucas(true)
                setLogin(true)
                setUserJuan(false)
                setUserMati(false)
                Swal.fire("¡Bienvenido Luquiñas!");
            }else if(userVerification === 'MATI'){
                setUserMati(true)
                setLogin(true) 
                setUserJuan(false)
                setUserLucas(false)
                Swal.fire("¡Bienvenido Mati!");
            }else{
                console.log('ERR')
            }
        }else{
            Swal.fire("Usuario y/o contraseña incorrecto");
        }
    }

    const Salir = () => {
        setLogin(false)
        setUserJuan(false)
        setUserLucas(false)
        setUserMati(false)
        Swal.fire("Se ha cerrado la sesión");
    }

    return (
        <div className='divLogin'>
            <h2>Login</h2>
            <button onClick={Ingresar}>Sign In</button>
            <button onClick={Salir}>Sign Out</button>
            <ItemListContainer login={login} userJuan={userJuan} userLucas={userLucas} userMati={userMati}/>
            <Link to={'/'} ><button className='btnHome'>Home</button></Link>
        </div>
    )

}

export default Login
