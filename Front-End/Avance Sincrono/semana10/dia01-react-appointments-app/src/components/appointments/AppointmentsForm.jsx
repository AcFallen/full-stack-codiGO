const AppointmentsForm = () => {
    return(
        <section className="w-96 p-4">
            <h2 className="text-2xl text-center mb-4">Nuevo Paciente</h2>

            <form className="flex flex-col gap-3">
                <input type="text" name="petname" placeholder="Nombre de mi mascota"
                className="border p-3 shadow-md rounded-md"/>

                <input type="number" name="petAge" min="0" max="50" placeholder="Edad de la mascota"
                className="border p-3 shadow-md rounded-md"/>

                <input type="number" name="ownerName" placeholder="Dueno de la mascota"
                className="border p-3 shadow-md rounded-md"/>

                <input type="date" name="appintmentDate" placeholder="Fecha de la cita"
                className="border p-3 shadow-md rounded-md"/>

                <input type="time" name="appintmentTime" placeholder="Hora de la cita"
                className="border p-3 shadow-md rounded-md"/>

                <textarea type="time" name="symtoms" placeholder="Sintomas"
                className="border p-3 shadow-md rounded-md" rows={3}/>

                <input type="submit" className="bg-green-900 text-white p-2 rounded-lg " value="Guardar" />
            </form>
        </section>
    )
}

export default AppointmentsForm