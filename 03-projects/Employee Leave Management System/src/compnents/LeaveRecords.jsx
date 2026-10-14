import React from 'react'
import "./LeaveRecords.css"
function LeaveRecords({ leave = [] }) {
  const appliedLeave = leave.length

  const approveLeave = leave.filter(
    (employee) => employee.status === 'Approved'
  ).length

  const rejectedLeave = leave.filter(
    (employee) => employee.status === 'Rejected'
  ).length

  return (
    <div className="leave-records">
      <div className="record-card">
        <h3>Applied Leaves</h3>
        <p>{appliedLeave}</p>
      </div>

      <div className="record-card">
        <h3>Rejected Leaves</h3>
        <p>{rejectedLeave}</p>
      </div>

      <div className="record-card">
        <h3>Approved Leaves</h3>
        <p>{approveLeave}</p>
      </div>
    </div>
  )
}

export default LeaveRecords