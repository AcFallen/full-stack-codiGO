import { useState } from "react"
import AppointmentsForm from "../components/appointments/AppointmentsForm"
import AppointmentsList from "../components/appointments/AppointmentsList"
const Appointments = () => {

    const [appointments, setAppointmens] = useState([])
    const [appointmentSelected, setAppointmentSelected] = useState({})

    const handleSaveAppointment = (form) => {
        // Guardamos lo que nos entregue el AppointmentForm en el estado appointments
        console.log(form)
        setAppointmens([...appointments,form])
    }

    const handleRemove = (id) => {
        const newAppointments = appointments.filter(
            appointment => appointment.id != id
        )

        setAppointmens(newAppointments)
    }

    const handleEdit = (appointment) => {
        console.log(appointment)
        setAppointmentSelected(appointment)
    }

    return(
        <>
            <AppointmentsForm 
            onSaveAppointment = {handleSaveAppointment}
            appointment= {appointmentSelected}
            />

            <AppointmentsList 
                appointments={appointments} 
                onRemove={handleRemove}
                onEdit={handleEdit} />
        </>
    )
}

export default Appointments