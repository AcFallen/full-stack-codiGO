import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const Character = () => {
    // Destructuring
    const {id} = useParams()

    const [character, setCharacter] = useState(null)

    const getCharacter = async (id) => {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        
        const data = await response.json()

        return data
    }

    useEffect(() => {
        getCharacter(id)
            .then(data => setCharacter(data))
    },[])

    return(
        <>
            {/* //Destructuring */}
            <h1 className="font-bold text-3xl text-center">Character Detail {id}</h1>

            <div className="flex flex-col items-center justify-center mt-6 text-center gap-4">
                {/* {JSON.stringify(character)} */}
                <img src={character?.image} alt="" />
                <strong>{character?.status}</strong>
                <Link to='/' className="font-bold text-red-950">Back Home</Link>
            </div>           
        </> 
    )
}

export default Character