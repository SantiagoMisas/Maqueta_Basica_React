import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/layout/Header'
import Main from './components/layout/Main'
function App() {
  const [count, setCount] = useState(0)

  return (
    <section className="App">


    <Header/>
    <Main/>
      
    </section>
  )
}

export default App
