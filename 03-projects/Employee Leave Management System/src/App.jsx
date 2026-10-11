import { useState } from 'react'
import LeaveForm from './compnents/LeaveForm'
import './App.css'

function App() {
  const [leave, setLeave] = useState([])

  return (
   <>
   <h1>Leave Management System</h1>
   <section >
    <div className='dashbord'></div>
   </section>
   <section>
    <div className='Apply-leave'>
      <h2>Apply Leave</h2>
      <LeaveForm />
    </div>
   </section>
   <search >
    <div className='leave-requests'></div>
   </search>
  
  


   </>
  )
}

export default App
