import { useEffect, useState } from "react"

const AppointmentsForm = ({ onSaveAppointment, appointment }) => {

    const INITIAL_FORM_STATE = {
        id:'',
        petName:'',
        petAge:'',
        ownerName:'',
        appointmentDate:'',
        appointmentTime:'',
        symptoms:''
    }

    const [form, setForm] = useState(INITIAL_FORM_STATE)

    useEffect(() => {
        console.log('Estoy en el formulario')
        const hasAppointment = Object.keys(appointment).length > 0
        if (hasAppointment) {
            setForm(appointment)
        }
    },[appointment])

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value

        setForm({ ...form, [name]: value })
    }

    const handleSaveAppointment = (event) => {
        event.preventDefault()

        const newAppointment ={
            ...form,
            id: crypto.randomUUID()
        }

        console.log('Guardando cita',newAppointment)

        onSaveAppointment(newAppointment)

        setForm(INITIAL_FORM_STATE)
    }

    return(
        <section className="w-96 p-4">
            <h2 className="text-2xl text-center mb-4">Nuevo Paciente</h2>

            {/* <pre>
                {JSON.stringify(form, null, 2)}
            </pre> */}
            

            <form className="flex flex-col gap-3" onSubmit={handleSaveAppointment}>
                <input type="text" name="petName" placeholder="Nombre de mi mascota"
                className="border p-3 shadow-md rounded-md" onChange={handleChange} value={form.petName}/>

                <input type="number" name="petAge" min="0" max="50" placeholder="Edad de la mascota"
                className="border p-3 shadow-md rounded-md" onChange={handleChange} value={form.petAge} />

                <input type="text" name="ownerName" placeholder="Dueno de la mascota"
                className="border p-3 shadow-md rounded-md" onChange={handleChange} value={form.ownerName}/>

                <input type="date" name="appointmentDate" placeholder="Fecha de la cita"
                className="border p-3 shadow-md rounded-md" onChange={handleChange} value={form.appointmentDate} />

                <input type="time" name="appointmentTime" placeholder="Hora de la cita"
                className="border p-3 shadow-md rounded-md" onChange={handleChange} value={form.appointmentTime}/>

                <textarea type="time" name="symptoms" placeholder="Sintomas"
                className="border p-3 shadow-md rounded-md" rows={3} onChange={handleChange} value={form.symptoms}/>

                <input type="submit" className="bg-green-900 text-white p-2 rounded-lg " value="Guardar" />
            </form>
        </section>
    )
}

export default AppointmentsForm