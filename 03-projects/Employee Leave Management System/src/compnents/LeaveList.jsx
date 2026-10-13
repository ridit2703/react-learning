import React, { useState } from 'react';
import './LeaveList.css';

function LeaveList({ leave = [], onUpdateLeave }) {
  const [search, setSearch] = useState('');
  const [activeCard, setActiveCard] = useState(null);

  const filteredLeave = leave.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleCardClick = (id) => {
    setActiveCard((currentId) => currentId === id ? null : id);
  };

  return (
    <div className="leave-list">
      <h2>Leave Requests</h2>

      <input
        type="text"
        className="search-bar"
        placeholder="Search employee by name..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <div className="leave-cards">
        {filteredLeave.map((employee) => {
          const status = employee.status || 'Pending';
          const isActive = activeCard === employee.id;

          return (
            <div
              key={employee.id}
              className="leave-card"
              onClick={() => handleCardClick(employee.id)}
            >
              <div className="leave-card-header">
                <h3>{employee.name}</h3>

                <span
                  className={`status-badge ${status.toLowerCase()}`}
                >
                  {status}
                </span>
              </div>

              {/* Keep your existing leave details here */}
              <p>
                <strong>Leave Type:</strong> {employee.leaveType}
              </p>

              <p>
                <strong>Reason:</strong> {employee.reason}
              </p>

              {isActive && status === 'Pending' && (
                <div
                  className="leave-actions"
                  onClick={(event) => event.stopPropagation()}
                >
                  <button
                    className="approve-btn"
                    onClick={() => {
                      onUpdateLeave(employee.id, 'Approved');
                      setActiveCard(null);
                    }}
                  >
                    Approve
                  </button>

                  <button
                    className="reject-btn"
                    onClick={() => {
                      onUpdateLeave(employee.id, 'Rejected');
                      setActiveCard(null);
                    }}
                  >
                    Reject
                  </button>
                </div>
              )}
            </div>
          );
        })}

        {filteredLeave.length === 0 && (
          <p className="no-results">No leave requests found.</p>
        )}
      </div>
    </div>
  );
}

export default LeaveList;

// import React, { useState } from 'react';
// import './LeaveList.css';
// function LeaveList({ leave = [] }) {
//   const [search, setSearch] = useState('');

//   const filteredLeave = leave.filter((employee) =>
//     employee.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div>
//       <h2>Leave Requests</h2>

//       <input
//         type="text"
//         placeholder="Search employee name..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       {filteredLeave.length === 0 ? (
//         <p className="empty-list">
//           {search ? 'No matching leave requests' : 'No leave requests'}
//         </p>
//       ) : (
//         <div className="leave-list">
//           {filteredLeave.map((employee) => (
//             <div className="employee-item" key={employee.id}>
//               <div className="employee-info">
//                 <h3>{employee.name}</h3>
//                 <p>{employee.leaveType}</p>
//                 <p>
//                   {employee.startDate} - {employee.endDate}
//                 </p>
//                 <p>{employee.reason}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default LeaveList;
