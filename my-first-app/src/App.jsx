import { useState } from 'react'
import './App.css'
import CardComponent from './components/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<CardComponent movie={{title:"Avatar",desc:"lorem ipsum not working here"}}/>
</>
  )
}

export default App
