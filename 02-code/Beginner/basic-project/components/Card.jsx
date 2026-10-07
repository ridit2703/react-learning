import React from 'react'

const Card = ({title,imageUrl}) => {
  return (
    <div className= "bg-amber-50 max-w-100 border-2-violet rounded-xl pt-5 pb-5 pl-5 pr-5 mt-5 mb-5 ml-10"> 
          <div>
            <img className="max-w-50 max-h-30 rounded-2xl shadow" src={imageUrl}/>

          </div>
          <div className='bg-gray-400 max-w-xl   rounded-2xl text-black pt-4 pb-5 mt-2 mb-5
      '>
            <h2>{title}</h2>
            <p>
              Find and save ideas about furniture on Pinterest. Furniture

            </p>
            <button className=" bg-blue-500 p-2 rounded-2xl text-sm">Buy Now</button>
          </div>
        </div>
  )
}

export default Card