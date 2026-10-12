import React, { useState } from 'react'


function LeaveList({leave=["k"]}) {
    const[search,setSearch]=useState("")
  return (
    <div>
        <h2>Leave Requests</h2>

        {leave.length===0?(<p className="empty-list">No Leave request</p>):(
            <div className="leave-list">
                {leave.map((employee)=>(
                    <div className="employee-item" key={employee.id} >

                        <div className="employee-info">
                            <h3 >{employee.name}</h3>
                            <p>{employee.leaveType}</p>
                            <p>{employee.startDate}-{employee.endDate}</p>

                        </div>

                    </div>
                ))}
            </div>
        )}


    </div>
  )
}

export default LeaveList