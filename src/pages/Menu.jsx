import React from 'react'
import BottomNav from '../components/shared/BottomNav'
import BackBotton from '../components/shared/BackBotton'
import { IoMdRestaurant } from 'react-icons/io'
import MenuContainer from '../components/menu/MenuContainer'

const Menu = () => {
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
                    <h1 className='text-md text-[#f5f5f5] font-semibold'>Customer Name</h1>
                    <p className='text-xs text-[#ababab] font-medium'>Table No: 2</p>
                </div>
            </div>
        </div>
         
      </div>
      <MenuContainer />
      </div>
      {/* Right Div */}
      <div className='flex-[1] bg-blue-500'>
      
      </div>
        
        <BottomNav />
    </section >
  )
}

export default Menu