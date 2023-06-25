'use client';
import { useEffect, useState } from "react";
import { useStripe, useElements, PaymentElement, AddressElement } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import axios from "axios";

export default function CheckoutForm({ products }) {
    const stripe = useStripe()
    const elements = useElements()


    const [message, setMessage] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [email,setEmail] = useState('')
    // const myCart = useSelector(state => state.courses.my_cart);
    // const addPurchase = async(email) =>{
    //     const response = await axios.post('http://localhost:3001/purchase',email)
    //     console.log(response);
    //  }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        

        setIsProcessing(true)

        console.log(email);
        
        const response = await axios.post('http://localhost:3001/purchase',{email:email})
        console.log(response);
        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${window.location.origin}/`
            },
            //redirect: 'if_required',
        })
        console.log(error);
        setIsProcessing(false)
        
        
        
        
    };

    

    useEffect(() => {
        const userData = localStorage.getItem('user')
        const data = JSON.parse(userData)
        setEmail(data.data.email)
    },[])
    console.log(email);

    return (
        <form id="payment-form" onSubmit={handleSubmit} className="w-[80%] mx-[auto]">
            <PaymentElement />
            <AddressElement options={{ mode: 'billing' }} />
            <button className="py-[0.4rem]  px-[0.8rem] text-white bg-[#F8662B] mt-[1rem] rounded-[0.8rem]" disabled={isProcessing} id="submit">
                <span className="" id="button-text">
                    {isProcessing ? "Processing ... " : "Pay now"}
                </span>
            </button >

            {/* Show any error or success messages */}
            {message && <div id="payment-message">{message}</div>}
        </form>
    );
}
