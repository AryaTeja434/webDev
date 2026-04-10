
import React from 'react'

const Card = ({name,email,img}) => {
  return (
    <div className='bg-neutral-300 w-56 text-center p-2 rounded-2xl'>
        <img className='w-16 h-16 inline rounded-full object-cover' src={img} alt="" />
        <h1 className='font-medium'>{name}</h1>
        <h1>{email}</h1>
        <p className='text-neutral-700'>Lorem ipsum dolor sit amet consectetur.</p>
    </div>
  )
}

export default Card;
