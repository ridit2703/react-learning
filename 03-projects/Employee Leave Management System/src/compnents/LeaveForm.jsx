
import React, { useState } from 'react';
import './LeaveForm.css';

const LeaveForm = ({onAddLeave}) => {
  const [name, setName] = useState('');
  const [leaveType, setLeaveType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      name,
      leaveType,
      startDate,
      endDate,
      reason,
    });
    onAddLeave({name,leaveType,startDate,endDate,reason});
    setName("");
    setLeaveType("");
    setStartDate("");
    setEndDate("");
    setReason("");
      
    
  };

  return (
    <div className="leave-container">
      <form className="leave-form" onSubmit={handleSubmit}>
        <h2>Apply for Leave</h2>

        <label htmlFor="name">Employee Name</label>
        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="leaveType">Leave Type</label>
        <select
          id="leaveType"
          value={leaveType}
          onChange={(e) => setLeaveType(e.target.value)}
          required
        >
          <option value="">Select leave type</option>
          <option value="EL">Earned Leave (EL)</option>
          <option value="CL">Casual Leave (CL)</option>
        </select>

        <label htmlFor="startDate">Start Date</label>
        <input
          id="startDate"
          type="date"
          value={startDate}
          min={new Date().toLocaleDateString('en-CA')}
          onChange={(e) => {
            setStartDate(e.target.value);
            if (endDate && e.target.value > endDate) {
              setEndDate('');
            }
          }}
          required
        />

        <label htmlFor="endDate">End Date</label>
        <input
          id="endDate"
          type="date"
          value={endDate}
          min={startDate || new Date().toLocaleDateString('en-CA')}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />

        <label htmlFor="reason">Reason for Leave</label>
        <textarea
          id="reason"
          placeholder="Enter reason (max 50 characters)"
          maxLength={50}
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          required
        />

        <button  type="submit">Apply Leave</button>
      </form>
    </div>
  );
};

export default LeaveForm;
