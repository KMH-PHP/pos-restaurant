import React from 'react'
import { getAvatarName, getBgColor } from '../../utils'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateTable } from '../../redux/slices/customerSlice';
import { FaLongArrowAltRight } from 'react-icons/fa';

const TableCard = ({ id, name, status, initial, seats}) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (name) => {
    if(status === "booked") return;
    const table = { tableId: id, tableNo: name}
    dispatch(updateTable({table}))
    navigate(`/menu`)
  }
  
  return (
    <div onClick={() => handleClick(name)} key={id} className='w-[300px] hover:bg-[#2c2c2c] bg-[#262626] p-4 rounded-lg mb-4 cursor-pointer '>
        <div className='flex justify-between items-center px-1'> 
            <h1 className='text-[#f5f5f5] text-xl font-semibold'>Table 
              <FaLongArrowAltRight className='text-[#ababab] ml-2 inline'/> {name}</h1>
              <p className={`${status === "Booked" ? "text-green-600 bg-[#2e4a40]" :" text-yellow-100 bg-[#664a04]"} px-2 py-1 rounded-lg`}> {status}
            </p>
        </div>
        <div className='flex justify-center items-center mt-5 mb-7'>
            <h1 className={` text-white rounded-full p-5 text-xl`} 
            style={{backgroundColor : initial ? getBgColor() : "#1f1f1f"}}>{getAvatarName(initial) || "N/A"}</h1>
        </div>
        <p className='text-[#ababab] text-xs'>Seats: <span className='text-[#f5f5f5]'>{seats}</span></p>
    </div>
  )
}

export default TableCard