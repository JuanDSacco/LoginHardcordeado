import React from 'react'
import Logeado from '../Logeado/Logeado'
import NoLogeado from '../NoLogeado/NoLogeado'

const ItemListContainer = ({login,userJuan,userLucas,userMati}) => {

    return (
        <div>
            {
                login === true 
                ?
                <Logeado userJuan={userJuan} userLucas={userLucas} userMati={userMati} />
                :
                <NoLogeado/>
            }
        </div>
    )
}

export default ItemListContainer
