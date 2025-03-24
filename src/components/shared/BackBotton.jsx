import React from 'react'
import { IoArrowBackOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const BackBotton = () => {
    const navigate = useNavigate();

  return (
  <button onClick={() => navigate(-1)} className='bg-[#025cca] p-2 rounded-full font-bold text-xl text-white'>
    <IoArrowBackOutline />
  </button>
  )
}

export default BackBotton