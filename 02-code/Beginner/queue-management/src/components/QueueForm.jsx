// import React from 'react'
// import { useState } from 'react'

// const QueueForm = ({onAdd}) => {


//     const [name,setName]=useState("")
//     const [service,setService]=useState("")


//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         //validation

//         if(!name && !service) return ;
//         onAdd({name,service})
//         setName("");
//         setService("");
//     }
//   return (
//     <div>QueueForm

//           <div className="queue-box " >

//             <div>
//                 <input type="text" value={name} onSubmit={handleSubmit} onChange={(e)=>setName(e.target.value)}/>
//             </div>

//             <div className="form-group">
//                 <select value={service} onChange={(e)=>setService(e.target.value)}>
//                     <option value="">Select Service</option>
//                     <option value="payment">Payment</option>
//                     <option value="support">Support</option>
//                     <option value="consultation">Consultation</option>
//                 </select>
//             </div>
//             <button type='submit'>Add Customer</button>

         
//         </div>
//     </div>
//   )
// }

// export default QueueForm



import React, { useState } from 'react';
import "./QueueForm.css"

const QueueForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [service, setService] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!name.trim() || !service) return;

    onAdd({ name, service });

    setName('');
    setService('');
  };

  return (
    <div>
      <div className="queue-box">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Customer Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              <option value="">Select Service</option>
              <option value="payment">Payment</option>
              <option value="support">Support</option>
              <option value="consultation">Consultation</option>
            </select>
          </div>

          <button type="submit">Add Customer</button>
        </form>
      </div>
    </div>
  );
};

export default QueueForm;
