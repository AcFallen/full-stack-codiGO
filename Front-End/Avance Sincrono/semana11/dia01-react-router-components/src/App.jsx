import Register from "./pages/Register";
import Login from "./pages/login";
import Home from "./pages/Home";
import LayoutBase from "./layouts/LayoutBase";
import Character from "./pages/Character"

import { BrowserRouter, Routes, Route } from "react-router-dom"


export default function App() {
  return (
    <BrowserRouter>
          <Routes>
              <Route path='/' element={<LayoutBase />}>
                <Route index element= {<Home />} />
                <Route path='/character/:id' element = {<Character />}  />

                <Route path='/login' element = {<Login />}  />
                <Route path='/register' element= {<Register />} />
              </Route>
          </Routes>
    </BrowserRouter>
   
  )
}