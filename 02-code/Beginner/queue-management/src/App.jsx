import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import QueueForm from '../../counter_state/src/components/QueueForm'
function App() {
  const [queue, setQueue] = useState(0)

  const addQueue=(customer)=>{
    setQueue([...queue,{...customer,id:Date.now(),status:"waiting"}])

  }

  const updateStatus=()=>{

  }

  const removeQueue=()=>{

  }




  return (
    <>
      <div className="app">
        <header><h1>
          Queue management Application</h1></header>


        <div className="queue-box" >

         <QueueForm onAdd={addQueue}  />
        </div>





      </div>
    </>
  )
}

export default App



