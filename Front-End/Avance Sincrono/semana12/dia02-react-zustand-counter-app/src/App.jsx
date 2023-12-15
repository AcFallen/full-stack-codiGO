import Counter from "./components/counter"

const App = () => {

  return (
  
    <div style={{display:"flex", flexDirection:"column", alignItems:"center",backgroundColor:'#CD8D7A',padding:'1rem'}}>
      <Counter />
      <Counter />
      <Counter />
    </div>
  )
}

export default App