import React, { useEffect, useRef } from 'react'
import { RiDeleteBin2Fill } from 'react-icons/ri'
import { FaNotesMedical } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { removeItems } from '../../redux/slices/cartSlice'

const CardInfo = () => {

  const cartData = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const scrollRef = useRef();

  useEffect(() => {
    if(scrollRef.current){
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      })
    }
  },[cartData])

  const handleRemove = (itemId) => {
    dispatch(removeItems(itemId));
  }
  return (
    <div className='px-4 py-2'>
    <h1 className='text-lg text-[#4e4e4e] font-semibold tracking-wide'>Order details</h1>
    <div className='mt-4 overflow-y-scroll scrollbar-hide  h-[310px]' ref={scrollRef}>
      {cartData.length === 0 ? (
        <p className='text-[#ababab] text-sm flex justify-center items-center h-[310px]'>Your cart is empty. Start adding items!</p>
      ) : cartData.map((item, index) => {
        return (
          <div key={index} className='bg-[#1f1f1f] rounded-lg px-4 py-2 mb-2'>
          <div className='flex items-center justify-between'>
          <h1 className='text-md text-[#ababab] tracking-wide font-semibold'>
            {item.name}
          </h1>
          <p className='text-[#ababab] font-semibold '>{item.quantity}</p>
          </div>
          <div className='flex items-center justify-between mt-3'>
            <div className='flex items-center gap-3'>
            <RiDeleteBin2Fill onClick={() => handleRemove(item.id)} size={20} className='text-[#ababab] cursor-pointer'/>
            <FaNotesMedical size={20} className='text-[#ababab] cursor-pointer'/>
    
            </div>
            <p className='text-md font-bold text-[#f5f5f5]'>${item.price}</p>
          </div>
          </div>
        )})}
     
      
     
      

    </div>
      </div>
  )
}

export default CardInfo