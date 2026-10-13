// import { useState } from 'react'
// import LeaveForm from './compnents/LeaveForm'
// import './App.css'
// import LeaveList from './compnents/LeaveList'

// function App() {
//   const [leave, setLeave] = useState([])

//   const onAddLeave=(employee)=>{
//     setLeave([...leave,{...employee,id:Date.now()}])

//   }

//   const onUpdateLeave=()=>{
    


//   }
//   return (
//    <>
//    <h1>Leave Management System</h1>
//    <section >
//     <div className='dashbord'></div>
//    </section>
//    <section>
//     <div className='Apply-leave'>
//       <h2>Apply Leave</h2>
//       <LeaveForm  onAddLeave={onAddLeave}/>
//       <LeaveList leave={leave}/>
//     </div>
//    </section>
//    <search >
//     <div className='leave-requests'></div>
//    </search>
  
  


//    </>
//   )
// }

// export default App


import { useState } from 'react'
import LeaveForm from './compnents/LeaveForm'
import './App.css'
import LeaveList from './compnents/LeaveList'

function App() {
  const [leave, setLeave] = useState([])

  const onAddLeave = (employee) => {
    setLeave((prevLeave) => [
      ...prevLeave,
      {
        ...employee,
        id: Date.now(),
        status: 'Pending',
      },
    ])
  }

  const onUpdateLeave = (id, status) => {
    setLeave((prevLeave) =>
      prevLeave.map((employee) =>
        employee.id === id
          ? { ...employee, status: status }
          : employee
      )
    )
  }

  return (
    <>
      <h1>Leave Management System</h1>

      <section>
        <div className="dashbord"></div>
      </section>

      <section>
        <div className="Apply-leave">
          <h2>Apply Leave</h2>

          <LeaveForm onAddLeave={onAddLeave} />

          <LeaveList
            leave={leave}
            onUpdateLeave={onUpdateLeave}
          />
        </div>
      </section>

      <section>
        <div className="leave-requests"></div>
      </section>
    </>
  )
}

export default App