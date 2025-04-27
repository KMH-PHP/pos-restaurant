import React from 'react'
import BottomNav from '../components/shared/BottomNav'
import BackBotton from '../components/shared/BackBotton'
import { IoMdRestaurant } from 'react-icons/io'
import MenuContainer from '../components/menu/MenuContainer'

import CustomerInfo from '../components/menu/Customerinfo'
import CardInfo from '../components/menu/CardInfo'
import Bill from '../components/menu/Bill'
import { useSelector } from 'react-redux'

const Menu = () => {

  const customerData = useSelector(state => state.customer);

  return (
    <section className='bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3'>
        {/* Left Div */}
      <div className='flex-[3]'> 
        <div className='flex items-center justify-between px-10 py-4'>
        <div className='flex items-center gap-4'>
          <BackBotton />
          <h1 className='text-[#f5f5f5] text-2xl font-bold tracking-wide'>Orders</h1>
        </div>
        
        <div className='flex justify-around items-center gap-4'>
        <div className='flex items-center gap-3 cursor-pointer'>
                <IoMdRestaurant  className='text-[#f5f5f5] text-4xl'/>
                <div className='flex flex-col'>
                    <h1 className='text-md text-[#f5f5f5] font-semibold'>{customerData.customerName || "Customer Name" }</h1>
                    <p className='text-xs text-[#ababab] font-medium'>Table : {customerData.table?.tableNo || 
        "N/A"}</p>
                </div>
            </div>
        </div>
         
      </div>
      <MenuContainer />
      </div>
      {/* Right Div */}
      <div className='flex-[1] bg-[#1a1a1a] mt-4 mr-3 h-[680px] rounded-lg pt-2'>
      {/* Customer info */}
      <CustomerInfo />
      <hr className='border-[#2a2a2a] border-t-2'/>
      {/* Cart Items */}
      <CardInfo />
      <hr className='border-[#2a2a2a] border-t-2'/>
      {/* Bills */}
      <Bill />
      </div>
        
        <BottomNav />
    </section >
  )
}

export default Menu