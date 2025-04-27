import React from 'react'
import { GrUpdate } from 'react-icons/gr'
import { orders } from '../constants'
import { keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { getOrders, updateOrderStatus } from '../https'
import { enqueueSnackbar } from 'notistack'
import { useQuery } from '@tanstack/react-query'
import { formatDateAndTime } from '../utils'


const RecentOrders = () => {
  const queryClient = useQueryClient();

  const handleStatusChange = ({orderId, orderStatus}) => {
    //console.log(orderId, orderStatus, "orderId and orderStatus")
    orderStatusUpdateMutation.mutate({orderId, orderStatus});
  }

  const orderStatusUpdateMutation = useMutation({
    mutationFn: ({ orderId, orderStatus }) => updateOrderStatus({ orderId, orderStatus }),
    onSuccess: (data) => {
      enqueueSnackbar("Order status updated successfully!", { variant: "success" });
      queryClient.invalidateQueries(["orders"]); //Refresh order list
    },
    onError: () => {
      enqueueSnackbar("Failed to update order status!", { variant: "error" });
    }
  })

  const { data: resData, isError } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      return await getOrders();
    },
    placeholderData: keepPreviousData  
  });

  console.log(resData, "hello world")

  if(isError){
    enqueueSnackbar("Something went wrong!", { variant: "error"});
  }

  return (
    <div className='container mx-auto bg-[#262626] p-4 rounded-lg'>
      <h2 className='text-[#f5f5f5] text-xl font-semibold mb-4'>
        Recent Orders
      </h2>
      <div className='overflow-x-auto'>
        <table className='w-full text-left text-[#f5f5f5]'>
          <thead className='bg-[#333] text-[#ababab]'>
            <tr>
              <th className='p-3'>Order ID</th>
              <th className='p-3'>Customer</th>
              <th className='p-3'>Status</th>
              <th className='p-3'>Date & Time</th>
              <th className='p-3'>Items</th>
              <th className='p-3'>Table No</th>
              <th className='p-3'>Total</th>
              <th className='p-3'>Payment Method</th>
              {/* <th className='p-3 text-center'>Action</th> */}
            </tr>
          </thead>
          <tbody>
            { resData?.data?.data.map((o, index) => (
                <tr 
                key={index}
                className='border-b border-gray-600 hover:bg-[#333]'
                >
                  <td className='p-4'>#{Math.floor(new Date(o.orderDate).getTime()) }</td>
                  <td className='p-4'>{o.customerDetails?.name}</td>
                  <td className='p-4'><select className={`bg-[#1a1a1a] text-[#f5f5f5] border p-2 rouned rounded-md  border-gray ${o.orderStatus === "Ready" ? "text-green-500" : "text-yellow-500"}`} value={o.orderStatus} onChange={(e) => handleStatusChange({orderId: o._id, orderStatus: e.target.value})}>
                    <option className='text-yellow-500' value="In Progress">In Progress</option>
                    <option className='text-green-500' value="Ready">Ready</option>
                    </select></td>
                    <td className='p-4'>{formatDateAndTime(o.orderDate)}</td>
                    <td className='p-4'>{o.items.length} Items</td>
                    <td className='p-4'>Table - {o.items.tableNo}</td>
                    <td className='p-4'>${o.bills.totalWithTax.toFixed(2)}</td>
                    <td className='p-4'>{o.paymentMethod}</td>
                    {/* <td className='p-4 text-center'>
                      <button className='text-blue-400 hover:text-blue-500 transition'>
                        <GrUpdate size={20}/>
                      </button>
                    </td> */}
                  </tr> 
               )         
            )}
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default RecentOrders