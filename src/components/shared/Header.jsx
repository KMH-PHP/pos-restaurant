import React from 'react'
import { FaBell, FaSearch, FaUserCircle } from 'react-icons/fa'
import {logo, food1} from '../../assets/index'
import { useDispatch, useSelector } from 'react-redux'
import { IoLogOut } from 'react-icons/io5'
import { useMutation } from '@tanstack/react-query'
import { logout } from '../../https'
import { removeUser } from '../../redux/slices/userSlice'
import { useNavigate } from 'react-router-dom'
import { MdDashboard } from 'react-icons/md'

const Header = () => {

    const userData = useSelector(state => state.user);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    
    const logoutMutation = useMutation({
        mutationFn: () => logout(),
        onSuccess: (data) => {
            console.log(data),
            dispatch(removeUser());
            navigate("/auth")
        },
        onError: (error) => {
            console.log(error);
        }

    })

    const handleLogout = () => {
        logoutMutation.mutate();
    }

  return (
<header className='py-4 px-8 bg-[#1a1a1a] flex justify-between items-center'>
    {/* LOGO */}
<div className='flex items-center gap-2'>
    <img src={logo} className='h-8 w-8 rounded-lg' alt='image'/>
    <h1 className='text-lg font-semibold text-[#f5f5f5]'>Restro</h1>
</div>

{/* SEARCH */}
<div className='flex items-center gap-4 bg-[#1f1f1f] rouned-[15px] px-5 py-2 w-[500px]'>
    <FaSearch className='text-[#f5f5f5]'/>
    <input type='text' placeholder='Search' className=' bg-[#1f1f1f] text-[#f5f5f5] outline-none'/>
</div>

{/* LOGGED USER DETAILS */}
<div className='flex items-center gap-4'>
    {
        userData.role === "Admin" && ( <div onClick={() => navigate("/dashboard")} className='bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer'>
            <MdDashboard className='text-[#f5f5f5] text-2xl'/>
        </div>)
    }
    
    <div className='bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer'>
        <FaBell className='text-[#f5f5f5] text-2xl'/>
    </div>
    <div className='flex items-center gap-3 cursor-pointer'>
        <FaUserCircle className='text-[#f5f5f5] text-4xl'/>
        <div className='flex flex-col'>
            <h1 className='text-md text-[#f5f5f5] font-semibold'>{userData.name || "Test User"}</h1>
            <p className='text-xs text-[#ababab] font-medium'>{userData.role || "N/A"}</p>
        </div>
        <IoLogOut onClick={handleLogout} className='text-[#f5f5f5] ml-2' size={40}/>
    </div>
</div>
</header>  )
}

export default Header