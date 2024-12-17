import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Reminder from './Reminder'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Reminder />
    </>
  )
}

export default App
