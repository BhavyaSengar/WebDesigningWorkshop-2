import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Invite from './components/Invite'

function App() {


  return (
    <div className='container'>
    <h1>Student Information</h1>
    <Invite name="Bhavya Sengar" branch={"Computer Science"} marks={95}/>
    <Invite name="Divyansh Saxena" branch={"Computer Science"} marks={85}/>
    <Invite name="Ayush Singh" branch={"Computer Science"} marks={90}/>
    </div>
  )
}

export default App
