import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTotalPrice, removeAllItems } from '../../redux/slices/cartSlice'
import { enqueueSnackbar } from 'notistack';
import { addOrder, createOrderRazorpay, updateTable } from '../../https';
import { removeCustomer } from '../../redux/slices/customerSlice';
import { useMutation } from '@tanstack/react-query';
import { radialGradient } from 'framer-motion/client';
import Invoice from '../invoice/Invoice';

function loadScript(src) {
  return new Promise((resolve => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  }));
}

const Bill = () => {
  const dispatch = useDispatch();

  const customerData = useSelector((state) => state.customer);
  const cartData = useSelector((state) => state.cart);
  const total = useSelector(getTotalPrice);
  const taxRate = 5.25;
  const tax = (total * taxRate) / 100;
  const totalPriceWithTax = total + tax;

  const [ paymentMethod, setPaymentMethod ] = useState();
  const [ showinvoice, setShowInvoice ] = useState(false);
  const [ orderInfo, setOrderInfo ] = useState();

  const handlePlaceOrder = async () => {
    if(!paymentMethod){
      enqueueSnackbar("Please select a payment method!", { variant: "warning"});

      return ;
    }

    if(paymentMethod === "Online") {
        //load the script

    try {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );

      if(!res){
        enqueueSnackbar("Razorpay SDK failed to load. Are you online?", {
          variant: "warning",
        });
        return;
      }

      // create order 
      const reqData = {
        amount: totalPriceWithTax.toFixed(2)
      }

      const { data } = await createOrderRazorpay(reqData);

      const options = {
        key: `${import.meta.env.VITE_RAZORPAY_KEY_ID}`, // Enter the Key ID
        //  generated from the Dashboard
        amount: data.order.amount,
        currency: data.order.currency,
        name: 'RESTRO',
        description: 'Secure Payment for Your Meal',
        order_id: data.order.id,
        handler: async function (response) {
          const verification = await verifyPaymentRazorpay(response);
          console.log(verification);
          enqueueSnackbar(verification.data.message, { variant: "success" });
          //console.log(response);


          //Place order data
          const orderData = {
            customerDetails: {
              name: customerData.customerName,
              phone: customerData.customerPhone,
              guests: customerData.guests
            },
            orderStatus: "In Progress",
            bills: {
              total: total,
              tax: tax,
              totalWithTax: totalPriceWithTax,
            },
            items: cartData,
            table: customerData.table.tableId,
            paymentMethod: paymentMethod,
            paymentData: {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
            }
          };

          setTimeout(() => { 
            orderMutation.mutate(orderData);
          }
          , 1500);
        },
        prefill: {
          name: customerData.name,
          email: "",
          contact: customerData.phone,
        },
        theme: {
          color: "#025cca"
        }

      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    
    } catch (error) {
        console.log(error);
        enqueueSnackbar("Payment Failed!", { variant: "error"})
    }
    }else {
      
          //Place order data
          const orderData = {
            customerDetails: {
              name: customerData.customerName,
              phone: customerData.customerPhone,
              guests: customerData.guests
            },
            orderStatus: "In Progress",
            bills: {
              total: total,
              tax: tax,
              totalWithTax: totalPriceWithTax,
            },
            items: cartData,
            table: customerData.table.tableId,
            paymentMethod: paymentMethod,
           
          };
            orderMutation.mutate(orderData);
           
    }

  
  };

  const orderMutation = useMutation({
    mutationFn: (reqData) => addOrder(reqData),
    onSuccess: (resData) => {
      const { data } = resData.data;
      console.log(data);

      setOrderInfo(data);

      //update table

      const tableData = {
        status: "Booked",
        orderId: data._id,
        tableId: data.table
      }

      setTimeout(() =>{
        tableUpdateMutation.mutate(tableData);
      }, 1500 );

      enqueueSnackbar("Order Palaced!", { variant: "success"})
      setShowInvoice(true);
    },
    onError: (error) => {
      console.log(error);
      enqueueSnackbar("Payment Failed!", { variant: "error"})
    }
  })

  const tableUpdateMutation = useMutation({ 
    mutationFn: (reqData) => updateTable(reqData),
    onSuccess: (resData) => {
      console.log(resData);
      dispatch(removeCustomer());
      dispatch(removeAllItems());
    },
    onError: (error) => {
      console.log(error);
    }
  })

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
    <button onClick={() => setPaymentMethod("Cash")} className={`text-[#ababab] bg-[#1f1f1f] px-4 py-3 w-full rounded-lg font-semibold ${paymentMethod === "Cash" ? "bg-[#383737]" : "" }`}>Cash</button>
    <button onClick={() => setPaymentMethod("Online")} className={`text-[#ababab] bg-[#1f1f1f] px-4 py-3 w-full rounded-lg font-semibold ${paymentMethod === "Online" ? "bg-[#383737]" : "" }`}>Online</button>
  </div>
  <div className='flex items-center px-5 gap-3 mt-4'>
    <button className='text-[#f5f5f5] bg-[#025cca] px-4 py-3 w-full rounded-lg font-semibold text-lg'>Print Receipt</button>
    <button onClick={handlePlaceOrder} className='text-[#1f1f1f] bg-[#f6b100] px-4 py-3 w-full rounded-lg font-semibold text-lg'>Place Order</button>
  </div>

  {
    showinvoice && (
      <Invoice orderInfo={orderInfo} setShowInvoice={setShowInvoice} />
    )
  }
  </>
  )
}

export default Bill