import React from 'react'
import { CiCircleMore } from 'react-icons/ci'
import { MdTableBar } from 'react-icons/md'
import { MdOutlineReorder } from 'react-icons/md'
import { FaHome } from 'react-icons/fa'
import { BiSolidDish } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

const BottomNav = () => {

  const navigate = useNavigate();

  return (
    <div className='fixed bottom-0 left-0 right-0 p-2 flex justify-around bg-[#262626] h-16'>

      <button onClick={() => navigate("/")} className='flex items-center justify-center text-[#f5f5f5] bg-[#343434] w-[200px] rounded-[20px]'>
        <FaHome className="inline mr-2" size={20} />
        <p>Home</p>
        </button>

      <button onClick={() => navigate("/orders")} className='flex items-center justify-center text-[#f5f5f5] w-[200px]'>
        <MdOutlineReorder className="inline mr-2" size={20} />
        <p>Orders</p>
        </button>

      <button  onClick={() => navigate("/tables")} className='flex items-center justify-center text-[#f5f5f5] w-[200px]'>
        <MdTableBar className="inline mr-2" size={20} /><p>Tables</p>
        </button>

      <button  onClick={() => navigate("/more")} className='flex items-center justify-center text-[#f5f5f5] w-[200px]'>
        <CiCircleMore className="inline mr-2" size={20} /><p>More</p>
        </button>

      <button className='bg-[#F6B100] text-[#f5f5f5] rounded-full p-3 items-center absolute bottom-6'>
        <BiSolidDish size={30} />
        </button>
    </div>
  )

}
export default BottomNav