'use client'
import { useEffect } from "react"
import Swal from "sweetalert2"

export default function NoAccess (){
    useEffect(()=>{
        Swal.fire({
            title: 'Access denied!',
            text: 'You do not have permission to enter this view',
            icon: 'error',
            confirmButtonText: '<a href="http://localhost:3000/">continue</a>',
            // footer: '<a href="http://localhost:3000/">Go login?</a>'
        })
    },[])
    return (
        <main>
            
        </main>
    )
}