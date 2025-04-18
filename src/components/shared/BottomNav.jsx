import React, { useEffect, useState } from 'react'
import { CiCircleMore } from 'react-icons/ci'
import { MdTableBar } from 'react-icons/md'
import { MdOutlineReorder } from 'react-icons/md'
import { FaHome } from 'react-icons/fa'
import { BiSolidDish } from 'react-icons/bi'
import { useLocation, useNavigate } from 'react-router-dom'
import Modal from './Modal'
import { useDispatch } from 'react-redux'
import { setCustomer } from '../../redux/slices/customerSlice'

const BottomNav = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [guestCount, setGuestCount] = useState(0);
  const [name, setName] = useState();
  const [phone, setPhone] = useState();

  const openModal  = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const increment = () => { 
    if(guestCount >= 6) return;
    setGuestCount((prev) => prev + 1) };

  const decrement = () => {  if(guestCount <= 0) return;
    setGuestCount((prev) => prev - 1) };


    // useEffect(() => { 
    //   if(status === 'home') {
    //     navigate('/')
    //   }else if(status === "orders") {
    //     navigate('/orders')
    //   }else if(status === "tables") {
    //     navigate('/tables')
    //   }else if(status === "more") {
    //     navigate('/more')
    //   }
    // },[status, navigate])
  const isActive = (path) => location.pathname === path;
    //console.log(status, "status")

    const handleCreateOrder = () => {
      //send data to store
    dispatch(setCustomer({ name, phone, guests: guestCount }));
    navigate("/tables")
    }
  return (
    <div className='fixed bottom-0 left-0 right-0 p-2 flex justify-around bg-[#262626] h-16'>

      <button onClick={() => { navigate("/")}} className={`flex items-center justify-center  ${isActive("/") ? "text-[#f5f5f5] bg-[#343434] rounded-[20px]" : "text-[#ababab]"} w-[200px]`}>
        <FaHome className="inline mr-2" size={20} />
        <p>Home</p>
        </button>

      <button onClick={() => { navigate("/orders")}} className={`flex items-center justify-center  ${isActive("/orders") ? "text-[#f5f5f5] bg-[#343434] rounded-[20px]" : "text-[#ababab]"} w-[200px]`}>
        <MdOutlineReorder className="inline mr-2" size={20} />
        <p>Orders</p>
        </button>

      <button  onClick={() => { navigate('/tables')}} className={`flex items-center justify-center ${isActive("/tables") ? "text-[#f5f5f5] bg-[#343434] rounded-[20px]" : "text-[#ababab]"} w-[200px]`}>
        <MdTableBar className="inline mr-2" size={20} /><p>Tables</p>
        </button>

      <button  onClick={() => { navigate('/more')}} className={`flex items-center justify-center ${isActive("/more") ? "text-[#f5f5f5] bg-[#343434] rounded-[20px]" : "text-[#ababab]"} w-[200px]`}>
        <CiCircleMore className="inline mr-2" size={20} /><p>More</p>
        </button>


      <button
      disabled={isActive("/tables")}
      onClick={openModal}
      className='bg-[#F6B100] text-[#f5f5f5] rounded-full p-3 items-center absolute bottom-6'>
        <BiSolidDish size={30} />
        </button>

        <Modal title="Create Order" isOpen={isModalOpen} onClose={closeModal}>
          <div>
            <label className='block text-[#ababab] mb-2 text-sm font-medium'>
              Customer Name
            </label>
            <div className='flex items-center rounded-lg p-3 px-4 bg-[#1f1f1f]'>
              <input value={name} onChange={(e) => setName(e.target.value)} type='text' name='' placeholder='Enter customer name' id='' className='bg-transparent flex-1 text-white focus:outline-none' />
            </div>
          </div>
          <div>
            <label className='block text-[#ababab] mb-2 mt-3 text-sm font-medium'>
              Customer Phone
            </label>
            <div className='flex items-center rounded-lg p-3 px-4 bg-[#1f1f1f]'>
              <input value={phone} onChange={(e) => setPhone(e.target.value)} type='number' name='number' placeholder='+95-99999999' id='' className='bg-transparent flex-1 text-white focus:outline-none' />
            </div>
          </div>
          <div>
            <label className='block mb-2 mt-3 text-sm font-medium text-[#ababab]'>Guest</label>
            <div className='flex justify-between items-center bg-[#1f1f1f] px-4 py-3 rounded-lg'>
              <button onClick={decrement} className='text-yellow-500 text-2xl'>&minus;</button>
              <span className='text-white'>{guestCount} Person</span>
              <button onClick={increment} className='text-yellow-500 text-2xl'>&#43;</button>
            </div>
          </div>
          <button onClick={handleCreateOrder} className='w-full bg-[#F6B100] text-[#f5f5f5] rounded-lg py-3 mt-8 hover:bg-yellow-700'>
            Create Order
          </button>
        </Modal>
    </div>
  )

}
export default BottomNav