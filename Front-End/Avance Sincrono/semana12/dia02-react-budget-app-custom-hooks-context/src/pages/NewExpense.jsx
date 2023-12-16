import React, { useContext, useEffect, useState } from 'react'

import { UserContext } from '../context/UserContext'

import {Toaster, toast} from 'sonner'



const NewExpense = () => {

  const { user } = useContext(UserContext)

  const [form, setForm] = useState({
    budget: ''
  })

  const getBudgetUser = async (userId) => {
    const url =`https://65728909d61ba6fcc0152a25.mockapi.io/api/v1/users/${userId}`

    const response = await fetch(url)

    const data = await response.json()

    return data.budget
  }

  useEffect(()=> {
    getBudgetUser(user.id)
      .then(budget => setForm({ budget }))
  },[])

  const handleChange = (event) => {
    const {name , value} = event.target 
    setForm({...form, [name]: value})
  }

  const handleSaveBudget = async (event) => {
    event.preventDefault()

    const {budget} = form

    const userId = user.id

    const url = `https://65728909d61ba6fcc0152a25.mockapi.io/api/v1/users/${userId}`

    const options = {
      method: 'PUT',
      headers:{
        'Content-Type': 'application/json'

      },
      body: JSON.stringify({budget: Number(budget)})
    }

    const response = await fetch(url,options)

    const data = await response.json()

    toast.success('Budget Save')
  }




  return (
    <form className='w-96 mx-auto' onSubmit={handleSaveBudget}>
      <Toaster richColors />

      <h1 className='text-center text-3xl mb-8'>Budge App - New Budget</h1>

      <div className='flex flex-col gap-4 bg-slate-200 p-8 shadow-lg'>
        <label className='font-medium'>
          <input type="number" name='budget' placeholder='0' className='w-full p-3 border' onChange={handleChange} value={form.budget} />
        </label>
        <input type="submit" 
          value="Save Budget"
          className='w-full bg-amber-300 p-3 font-medium'
        />
      </div>
    </form>
  )
}

export default NewExpense