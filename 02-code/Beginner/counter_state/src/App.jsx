import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [countSetTo,setcountSetTo]=useState(0);



  return (
    <>
      <h1>Counter</h1>
      <div className="card"><h2>Count={count}</h2> </div>
      <div>
        <button className='button' onClick={()=>setCount(count+1)}>Increase</button>
        <button className='button' onClick={()=>setCount((count)=>Math.max(count-1,0))}>Decrease</button>
        <button className='button' onClick={()=>{setCount((count)=>0)}}>Reset</button>
      </div>
      <div>
        <input type="text" className="input" value= {countSetTo} onChange={(e)=>setcountSetTo(Number(e.target.value))}/>
        <button className='button'  onClick={()=>{setCount(Number(countSetTo)) ;setcountSetTo(0)}}>Set to {countSetTo}</button>
      </div>
    </>
  )
}

export default App
