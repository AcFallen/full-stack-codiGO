import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import LayoutBase from '../layouts/Layoutbase'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<LayoutBase />}>
              <Route index element={<Home />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/register' element={<Register />}></Route>
            </Route>
            
        </Routes>
    </BrowserRouter>
  )
}

export default Router