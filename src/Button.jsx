import React from 'react'

function Button({setColor,color,cname}) {
    return (
    <div>
      <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:color}}
            onClick={()=>{setColor(color)}}
            >
              {cname}
            </button>
    </div>
  )
}

export default Button
