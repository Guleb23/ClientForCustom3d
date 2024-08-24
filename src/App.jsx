import { useState } from 'react'
import HomePage from './Pages/HomePage'
import Customizer from './Pages/Customizer'
import CanvasModel from './Canvas/Index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='app transition-all ease-in'>
      <HomePage />
      <CanvasModel />
      <Customizer />
    </main>
  )
}

export default App
