import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import QueueForm from './components/QueueForm'
import QueueDisplay from './components/QueueDisplay'
function App() {
  const [queue, setQueue] = useState([])

  const addQueue=(customer)=>{
    setQueue([...queue,{...customer,id:Date.now(),status:"waiting"}])

  }

  const updateStatus=(id,newStatus)=>{
    setQueue(queue.map(customer=>customer.id===id?{...customer,status:newStatus}:customer
    ))

  }

  const removeQueue=(id)=>{
    setQueue(queue.filter(customer=>customer.id!==id))

  };




  return (
    <>
      <div className="app">
        <header><h1>
          Queue management Application</h1></header>


        <div className="queue-layout" >

         <QueueForm onAdd={addQueue}  />
        
        
          <QueueDisplay 
          queue={queue}
          onUpdateStatus={updateStatus}
          onRemove={removeQueue}/>
        </div>





      </div>
    </>
  )
}

export default App



