import React from 'react'
import { getRandomBG } from '../../utils'
import { useNavigate } from 'react-router-dom';

const TableCard = ({ key, name, status, initial, seats}) => {

  const navigate = useNavigate();
  const handleClick = () => {
    if(status === "booked") return;
    navigate(`/menu`)
  }
  return (
    <div onClick={handleClick} key={key} className='w-[300px] hover:bg-[#2c2c2c] bg-[#262626] p-4 rounded-lg mb-4 cursor-pointer '>
        <div className='flex justify-between items-center px-1'> 
            <h1 className='text-[#f5f5f5] text-xl font-semibold'>{name}</h1>
              <p className={`${status === "booked" ? "text-green-600 bg-[#2e4a40]" :" text-yellow-100 bg-[#664a04]"} px-2 py-1 rounded-lg`}> {status}
            </p>
        </div>
        <div className='flex justify-center items-center mt-5 mb-7'>
            <h1 className={`${getRandomBG()} text-white rounded-full p-5 text-xl`}>{initial}</h1>
        </div>
        <p className='text-[#ababab] text-xs'>Seats: <span className='text-[#f5f5f5]'>{seats}</span></p>
    </div>
  )
}

export default TableCard