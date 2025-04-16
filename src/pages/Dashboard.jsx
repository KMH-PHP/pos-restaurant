import React, { use, useState } from 'react'
import { BiSolidDish } from 'react-icons/bi'
import { MdCategory, MdTableBar } from 'react-icons/md'
import Metrics from '../dashboard/Metrics';
import RecentOrders from '../dashboard/RecentOrders';
import Modal from '../dashboard/Modal';

const buttons = [
    { label: "Add Table", icon: <MdTableBar />, action: 'table'},
    { label: "Add Category", icon: <MdCategory />, action: "category"},
    { label: "Add Dishes", icon: <BiSolidDish />, aciton: "dishes"}
]

const tabs = ['Metrics', 'Orders', "Payment"];


const Dashboard = () => {
    
    const [isTableModalOpen, setIsTableModalOpen] = useState(false);
    const [ isActiveTab, setIsActiveTab ] = useState("Metrics");

    const handleOpenModal = (aciton) => {
        if(action === "table") setIsTableModalOpen(true);
    }

  return (
    <div className='bg-[#1f1f1f] h-[calc(100vh-5rem)]'>
        <div className='container mx-auto flex items-center justify-between py-14 px-6 md:px-4'>
            <div className='flex items-center gap-3'>
                {
                    buttons.map(({ label, icon, action }) => {
                        return(
                            <button onClick={() => handleOpenModal(action)} className='bg-[#1a1a1a] hover:bg-[#262626] px-8 py-3 rounded-lg text-[#f5f5f5] font-semibold text-md flex items-center gap-2'>
                            {label} {icon}
                        </button>
                        )
                        
                    })
                }
            </div>
            <div className='flex items-center gap-3'>
                {
                    tabs.map((tab) => {
                        return(
                            <button 
                            // key={tab} 
                            onClick={() => setIsActiveTab(tab)}
                             className={`px-8 py-3 rounded-lg text-[#f5f5f5] font-semibold text-md flex items-center gap-2 ${isActiveTab === tab ? "bg-[#262626]" : "bg-[#1a1a1a] hover:bg-[#262626]"}`}>
                           {tab}
                        </button>
                        )
                        
                    })
                }
            </div>
        </div>
        {isActiveTab === "Metrics" &&  <Metrics />};
        {isActiveTab === "Orders" &&  <RecentOrders />};
       
        {isTableModalOpen && <Modal />}
    </div>
  )
}

export default Dashboard