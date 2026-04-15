import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='flex bg-black text-white w-full gap-1 px-4 py-2 items-center fixed top-0 justify-between' >
      <div className="flex items-center gap-1">
        <img className='h-8 w-8 rounded-full object-cover' src="https://plus.unsplash.com/premium_photo-1681400545953-0ba00cfa7926?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHN0YXIlMjBsb2dvfGVufDB8fDB8fHww" alt="" />
        <p>Gemini GPT</p>
      </div>
      <div className="flex gap-3 italic">
        <Link to="/">Home</Link>
        <Link to="/image">Generate Image</Link>
      </div>
    </div>
  )
}

export default Navbar
