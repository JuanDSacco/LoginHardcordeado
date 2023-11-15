import '../Logeado/logeado.css'
import LoginJuan from '../LoginJuan/LoginJuan'
import LoginLucas from '../LoginLucas/LoginLucas'
import LoginMati from '../LoginMati/LoginMati'
import Redirect from '../Redirect/Redirect'

const Logeado = ({userJuan,userLucas,userMati}) => {

    return (
        <div className='divLogeado'>
            {
                userJuan===true
                ?
                <LoginJuan/>
                :
                <Redirect/>
            }
            {
                userLucas===true 
                ?
                <LoginLucas/>
                :
                <Redirect/>
            }
            {
                userMati===true
                ?
                <LoginMati/>
                :
                <Redirect/>
            }
        </div>
    )
}

export default Logeado
