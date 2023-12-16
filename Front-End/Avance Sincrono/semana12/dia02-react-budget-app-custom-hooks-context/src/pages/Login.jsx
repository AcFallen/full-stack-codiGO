import { useState } from "react"

import { useNavigate } from 'react-router-dom'
import { Toaster, toast } from 'sonner'

import useAuth from '../hooks/useAuth.js'

const Login = () => {

  const navigate = useNavigate()

  const { setAuth } = useAuth()

  const [form, setForm] = useState({
        email:'',
        password:'', 
    })

  const handleChange =(event) =>{
        const {value,name} = event.target

        setForm({ ...form, [name]: value})
  } 

  const handleLogin = async (event) => {
    event.preventDefault()

    const {email } = form

    const url = `https://65728909d61ba6fcc0152a25.mockapi.io/api/v1/users?email=${email}`

    const response = await fetch(url)

    const data = await response.json()

    console.log(data)

    setForm({

      email:'',
      password:'',
     
  })

    if (data.length === 1 ) {
      const clonedData ={ ...data[0] }

      delete clonedData.password

      setAuth(clonedData)

      navigate('/')
    }else {
      toast.error('User login error!')
    }

   

  }

  return (

    <form className="w-96 mx-auto" onSubmit={handleLogin}>
            <h1 className="text-center text-3xl mb-8">Budget App - Login</h1>
            <Toaster richColors />
            <pre>{JSON.stringify(form,null,2)}</pre>

            <div className="flex flex-col gap-4 bg-slate-200 p-8 shadow-lg rounded-lg">

                <label>
                    Email
                    <input 
                    type="text"
                    name="email"
                    placeholder="Jhon Doe"
                    className="border w-full p-3"
                    required
                    onChange={handleChange}
                    value={form.email} />

                </label>

                <label>
                    Password
                    <input 
                    type="password"
                    name="password"
                    placeholder="Jhon Doe"
                    className="border w-full p-3"
                    required
                    onChange={handleChange}
                    value={form.password} />

                </label>

                <input type="submit"
                    value='Register'
                    className="w-full bg-amber-400 font-medium p-3 rounded-lg" />
            </div>
            
        
        </form>
  )
}

export default Login