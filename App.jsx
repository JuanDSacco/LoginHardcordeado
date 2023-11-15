import './App.css'
import Home from './Home/home'
import Login from './Login/Login'
import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import UsuPass from './UsuPass/UsuPass'

function App() {

  const [login, setLogin] = useState(false)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/usuarios-y-contraseñas' element={<UsuPass/>}/>
          <Route path='/login' element={<Login login={login} setLogin={setLogin}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
      )
  }

export default App
