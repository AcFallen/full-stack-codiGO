import { useState } from "react"

import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()

    const [form, setForm] = useState({
        fullname:'',
        email:'',
        password:'',
        budget:0
    })

    const handleChange =(event) =>{
        const {value,name} = event.target

        setForm({ ...form, [name]: value})
    } 

    const handleRegister = async (event) => {
        event.preventDefault();

        // console.log('Guardando la data del usuario')

        const url = 'https://65728909d61ba6fcc0152a25.mockapi.io/api/v1/users'

        const options = {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(form)
        }

        const response = await fetch(url,options)

        const data = await response.json()

        console.log(data)

        setForm({
            fullname:'',
            email:'',
            password:'',
            budget:0
        })

        navigate('/login')

        // Redireccionar al login

    }

    return (
        <form className="w-96 mx-auto" onSubmit={handleRegister}>
            <h1 className="text-center text-3xl mb-8">Budget App - Register</h1>
            
            <pre>{JSON.stringify(form,null,2)}</pre>

            <div className="flex flex-col gap-4 bg-slate-200 p-8 shadow-lg rounded-lg">
                <label>
                    Fullname
                    <input 
                    type="text"
                    name="fullname"
                    placeholder="Jhon Doe"
                    className="border w-full p-3"
                    required
                    onChange={handleChange}
                    value={form.fullname} />

                </label>

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

export default Register