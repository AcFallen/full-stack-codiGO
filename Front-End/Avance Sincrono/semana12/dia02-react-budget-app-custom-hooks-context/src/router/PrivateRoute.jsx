import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const PrivateRoute = () => {

  const {isAuth} = useAuth()
  const navigate = useNavigate()

  useEffect(()=>{
    if (!isAuth) {
      // Redirigir al login
      navigate('/login')
    }
  },[isAuth])

  if(!isAuth) return

  return (
    <Outlet />
  )
}

export default PrivateRoute