import React from 'react'

const Bill = () => {
  return (
  <>
  <div className='flex items-center justify-between px-5 mt-2'>
    <p className='text-xs text-[#ababab] font-medium mt-2'>Items(4)</p>
    <h1 className='text-[#f5f5f5] text-md font-bold'>240</h1>
  </div>
  <div className='flex items-center justify-between px-5 mt-2'>
    <p className='text-xs text-[#ababab] font-medium mt-2'>Taxs(5.25%)</p>
    <h1 className='text-[#f5f5f5] text-md font-bold'>240</h1>
  </div>
  <div className='flex items-center px-5 gap-3 mt-4'>
    <button className='text-[#ababab] bg-[#1f1f1f] px-4 py-3 w-full rounded-lg font-semibold'>Cash</button>
    <button className='text-[#ababab] bg-[#1f1f1f] px-4 py-3 w-full rounded-lg font-semibold'>Online</button>
  </div>
  <div className='flex items-center px-5 gap-3 mt-4'>
    <button className='text-[#f5f5f5] bg-[#025cca] px-4 py-3 w-full rounded-lg font-semibold text-lg'>Print Receipt</button>
    <button className='text-[#1f1f1f] bg-[#f6b100] px-4 py-3 w-full rounded-lg font-semibold text-lg'>Place Order</button>
  </div>
  </>
  )
}

export default Bill