import React from 'react'

const QueueForm = (onAdd) => {
  return (
    <div>QueueForm

          <div className="queue-box " >

            <div>
                <input type="text" value={name} onSubmit={handleSubmit} onChange={(e)=>setName(e.target.value)}/>
            </div>

            <div className="form-group">
                <select value={service} onChange={(e)=>setService(e.target.value)}>
                    <option value="">Select Service</option>
                    <option value="payment">Paymente</option>
                    <option value="support">Support</option>
                    <option value="consultation">Consultation</option>
                </select>
            </div>

         
        </div>
    </div>
  )
}

export default QueueForm