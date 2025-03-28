import React from 'react'
import { useSelector } from 'react-redux'
import { getTotalPrice } from '../../redux/slices/cartSlice'

const Bill = () => {

  const cartData = useSelector((state) => state.cart);
  const total = useSelector(getTotalPrice);
  const taxRate = 5.25;
  const tax = (total * taxRate) / 100;
  const totalPriceWithTax = total + tax;

  return (
  <>
  <div className='flex items-center justify-between px-5 mt-2'>
    <p className='text-xs text-[#ababab] font-medium mt-2'>Items({cartData.length})</p>
    <h1 className='text-[#f5f5f5] text-md font-bold'>${total}</h1>
  </div>
  <div className='flex items-center justify-between px-5 mt-2'>
    <p className='text-xs text-[#ababab] font-medium mt-2'>Taxs(5.25%)</p>
    <h1 className='text-[#f5f5f5] text-md font-bold'>${tax}</h1>
  </div>
  <div className='flex items-center justify-between px-5 mt-2'>
    <p className='text-xs text-[#ababab] font-medium mt-2'>Total with Tax</p>
    <h1 className='text-[#f5f5f5] text-md font-bold'>${totalPriceWithTax}</h1>
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