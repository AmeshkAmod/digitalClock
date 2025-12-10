import { useState } from 'react'
import DigitalClock from './components/DigitalClock.jsx'
import StopWatch from './components/StopWatch.jsx'
import Timer from './components/Timer.jsx'
import './App.css'

function App() {


  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-4">

      <div className="backdrop-blur-xl bg-white/30 border border-white/40 shadow-2xl rounded-3xl p-10 w-full max-w-5xl flex flex-col items-center gap-10">
        <h1 className="text-4xl font-extrabold text-gray-700 tracking-tight drop-shadow">
          Clock + Stopwatch + Timer</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
          <div className="glass-card">
            <DigitalClock />
          </div>

        <div className="glass-card">
            <StopWatch />
          </div>

        <div className="glass-card">
            <Timer />
          </div>
          
        </div>
      </div>
      </div>
      
    </>
  )
}

export default App
