'use client'

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import axios from "axios";
import Swal from "sweetalert2";

import Image from "next/image"
// import confirm from '../../public/tiendajaja.jpg'
import confirm from '../../public/tiendaRopa2.jpg'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Autenticate(){
    

    const notifyError = (message) => toast.error(message);

    const router = useRouter()

    const [user, setUser] = useState()

    useEffect(()=>{
        let userEmail =JSON.parse(localStorage.getItem('userEmail'));
        if(userEmail && userEmail.length>0){
        axios.get(`http://localhost:3001/users/auth/${userEmail}`)
        .then((response)=>{
            setUser(response.data)
        })}
    },[])

    useEffect(()=>{
        if(user && user.isActive){
            axios.put(`http://localhost:3001/users/${user._id}`,{validated:true})
            .then((response)=>{
                localStorage.setItem('user',JSON.stringify({
                    data:response.data,
                    validated: true
                }))
                Swal.fire({
                    title: 'Successful!',
                    text: 'Profile activation done',
                    icon: 'success',
                    confirmButtonText: '<a href="http://localhost:3000/">Continue</a>'
                })
            })
            .catch((err)=>{
                Swal.fire({
                    title: 'Error',
                    text: 'No se pudo completar la acción.',
                    icon: 'error',
                    confirmButtonText:'<a href="http://localhost:3000/">Aceptar</a>'
                  });
            }) 
        }
    },[user])

    return(
        <div>
             <Image src={confirm} alt="img" width={1200} height={1200}
                className="w-[100%] object-cover  h-[75vh]"
                />
        </div>
    )
}