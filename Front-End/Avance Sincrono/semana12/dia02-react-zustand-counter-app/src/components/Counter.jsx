import { useCounterStore } from "../store/counter"

const Counter = () => {

    const { count, increment, decrement, increaseByValue } = useCounterStore()

    return (
        <div style={{display:"flex", flexDirection:"column", alignItems:"center",padding:'1rem',backgroundColor:'#CD8D7A'}}>
            <h3>Counter with Zustand</h3>
            <div style={{display:"flex", gap:'1rem', alignItems:"center"}} >
                <button onClick={() => increaseByValue(5)}>+5</button>
                <button onClick={increment}>+1</button>
                <h1>{count}</h1>
                <button onClick={decrement}>-1</button>
                <button onClick={() => increaseByValue(-5)}>-5</button>
            </div>
        </div>
    )
}

export default Counter