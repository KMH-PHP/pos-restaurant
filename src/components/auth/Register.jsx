import React, { useState } from 'react'
import { register } from '../../https';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';
 
const Register = ({setIsRegister}) => {
    const navigate = useNavigate();
    const [formData, setFromData] = useState(
        {
            name: "",
            email: "",
            phone: "",
            password: "",
            role: ""
        }
    );

    const handleChange = (e) => {
        setFromData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleRoleSelection = (selectedRole) => {
        setFromData({ ...formData, role: selectedRole });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        registerMutation.mutate(formData);
    }

    const registerMutation = useMutation({
        mutationFn: (reqData) => register(reqData),
        onSuccess: (res) => {
            const { data } = res;
            console.log(data);
        //    navigate("/login");
           enqueueSnackbar(data.message, { variant: "success"});
           setFromData({
            name: "",
            email: "",
            phone: "",
            password: "",
            role: ""
           });

           setTimeout(() => {
            setIsRegister(false);
           }, 1500)
        },
        onError: (error) => {
            const { response } = error; 
            enqueueSnackbar(response.data.message, { variant: "error"})
        }
    })

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='block text-[#ababab] mb-2 text-sm font-medium'>Employee Name</label>
                    <div className='flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]'>
                        <input value={formData.name} onChange={handleChange} type='text' name='name' placeholder='Enter employee name' className='bg-transparent flex-1 text-white focus:outline-none' required />
                    </div>
                </div>

                <div className='mt-1'>
                    <label className='block text-[#ababab] mb-2 text-sm font-medium'>Employee Email</label>
                    <div className='flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]'>
                        <input value={formData.email} onChange={handleChange} type='text' name='email' placeholder='Enter employee email' className='bg-transparent flex-1 text-white focus:outline-none' required />
                    </div>
                </div>

                <div className='mt-1'>
                    <label className='block text-[#ababab] mb-2 text-sm font-medium'>Employee Phone</label>
                    <div className='flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]'>
                        <input value={formData.phone} onChange={handleChange} type='number' name='phone' placeholder='Enter employee phone' className='bg-transparent flex-1 text-white focus:outline-none' required />
                    </div>
                </div>

                <div className='mt-1'>
                    <label className='block text-[#ababab] mb-2 text-sm font-medium'>Password</label>
                    <div className='flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]'>
                        <input type='password' name='password' value={formData.password} onChange={handleChange} placeholder='Enter password' className='bg-transparent flex-1 text-white focus:outline-none' required />
                    </div>
                </div>

                <div className='mt-1'>
                    <label className='block text-[#ababab] mb-2 text-sm font-medium'>Choose your role</label>
                    <div className="flex gap-3 items-center mt-3">
                        {["Waiter", "Cashier", "Admin"].map((role) => {
                            return (

                                <button key={role}
                                    type="button" onClick={() => handleRoleSelection(role)} className={`px-4 py-3 rounded-lg w-full bg-[#1f1f1f] text-[#ababab] ${formData.role === role ? "bg-indigo-700" : ""}`}>
                                    {role}
                                </button>
                            )

                        })}
                    </div>
                </div>

                <button type='submit' className='w-full mt-3 py-3 text-lg bg-yellow-400 text-gray-900 font-bold rounded-lg'>
                    Sign up
                </button>
            </form>
        </div>
    )
}

export default Register