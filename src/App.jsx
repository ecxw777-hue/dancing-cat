import { useState } from 'react'
import DancingCat from './components/DancingCat'
import Controls from './components/Controls'
import './App.css'

function App() {
  const [isPlaying, setIsPlaying] = useState(true)

  return (
    <div className="app">
      <h1>Dancing Cat</h1>
      <DancingCat isPlaying={isPlaying} />
      <Controls isPlaying={isPlaying} onToggle={() => setIsPlaying(!isPlaying)} />
    </div>
  )
}

export default App
