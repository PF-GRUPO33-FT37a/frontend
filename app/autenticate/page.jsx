'use client'

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Autenticate(){
    
    const notify = (message) => {
		toast.success(message, {
			autoClose: 2000,
		});
	};

    const notifyError = (message) => toast.error(message);

    const router = useRouter()

    const [user, setUser] = useState()

    useEffect(()=>{
        let user =JSON.parse(localStorage.getItem('user'));
        if(user && user.data){
            setUser(user.data)
        }
    },[])

    useEffect(()=>{
        if(user && user.isActive){
            axios.put(`http://localhost:3001/users/${user._id}`,{validated:true})
            .then((response)=>{
                localStorage.setItem('user',JSON.stringify({
                    data:response.data,
                    validated: true
                }))
                notify("You were successfully logged in")
                setTimeout(() => router.push('/'), 3000)
            })
            .catch((err)=>{
                notifyError(err.message)
            })
            // localStorage.setItem('user',JSON.stringify({
            //     data:user,
            //     validated: true
            // }))
            // notify("You were successfully logged in")
            // setTimeout(() => router.push('/'), 3000)
        }
    },[user])

    return(
        <div>
            <p>algo</p>
            <ToastContainer />
        </div>
    )
}