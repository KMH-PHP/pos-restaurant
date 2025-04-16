import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const Greetings = () => {
    const [dateTime, setDateTime] = useState(new Date());

    const userData = useSelector(state => state.user)

    useEffect(() => {
        const timer = setInterval(() =>setDateTime(new Date()),1000);
        return () => clearInterval(timer);
    }, [])

    const formatDate = (date) => { 
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
        ];
        return `${months[date.getMonth()]} ${String(date.getDate()).padStart(2, '0')}, ${date.getFullYear()}`;
    }

    const formatTime = (date) => { 
        return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;
    }

  return (
    <div className='flex justify-between items-center px-8 mt-5'>
        <div >
            <h1 className='text-[#f5f5f5] text-2xl font-semibold tracking-wide'>Good Morning, {userData.name || "Test User"}</h1>
            <p className='text-sm text-[#ababab]'>Give your best services for customers  </p>
        </div>
        <div>
            <h1 className='text-3xl text-[#f5f5f5] font-bold tracking-wide w-[130px]'>{formatTime(dateTime)}</h1>
            <p className='text-[#ababab]'>{formatDate(dateTime)}</p>
        </div>
    </div>
  )
}

export default Greetings