import React, { useState } from 'react'
import { restaurant, logo } from '../assets'
import Register from '../components/auth/Register'
import Login from '../components/auth/Login'

const Auth = () => {

  const  [isRegister, setIsRegister ] = useState(false);

  return (
    <div className='flex min-h-screen w-full'>
      {/* Left Side */}
      <div className='w-1/2 flex relative bg-cover items-center justify-center'>
       {/*BG image */}
       <img className="w-full h-screen object-cover" src={restaurant} alt='Restaurant image'/>
         {/*Black overlay */}
         <div className='absolute inset-0 bg-black opacity-80'></div>
           {/*Quote at bottom */}
           <blockquote className="absolute bottom-10 px-8 mb-10 text-2xl italic text-white">
            "Serve customers the best food with promt and friendly service in a welcome almosphere, and they'll keep coming back"
            <br/>
            <span className='block mt-4 text-yellow-400'>- Founder of Restro</span>
          </blockquote>
         </div>

      {/* Right Side */}
      <div className='w-1/2 min-h-screen bg-[#1a1a1a] p-10'>
        <div className='flex flex-col items-center gap-2'>
          <img src={logo} alt="Restro Logo" className='h-14 w-14 border-2 rounded-full p-1'/>
          <h1 className='text-lg font-semibold text-[#f5f5f5] tracking-wide'>Restro</h1>
        </div>
        <h2 className='text-4xl text-center mt-10 font-semibold text-yellow-400 mb-10'>{
          isRegister ? "Employee Registration" : "Employee Login"
          }</h2>

        {/* {components} */}
        {
          isRegister ? <Register /> : <Login />
          }
       

        <div className='flex justify-center mt-6'>
          <p className='text-sm text-[#ababab]'>
          {
          isRegister ? "Already have an account ? " : "Don't have an account ? "
          }
             <a onClick={() => setIsRegister(!isRegister)} className='text-yellow-400 font-semibold hover:underline'>{
          isRegister ? "Sign in" : "Sign up "
          } </a>
          </p>

        </div>
      </div>
      </div>
    
    
  )
}

export default Auth