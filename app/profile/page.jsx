'use client'
import Image from "next/image"
import editIcon from '../../public/editIcon.png'
import check from '../../public/check.png'
import { useState, useEffect } from "react"
import axios from "axios"

export default function ProfilePage(){
    const user = JSON.parse(localStorage.getItem('user'))
    const { _id, name, email, phoneNumber, date } = user.data
    const lsDataEntry = Object.entries({ name, email, phoneNumber, date }) // data del localStorage como 'entry'
    const fields = [ 'Nombre de usuario', 'Correo electrónico', 'Teléfono', 'Fecha de nacimiento']
    const profileImage = user.data.image[0]
    
    const [ data, setData ] = useState({})
    const dataEntry = Object.entries(data ? { name: data.name, email: data.email,
        phoneNumber: data.phoneNumber, date: data.date} : {})
    
    const [ values, setValues ] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        date: ''
    })
    
    const [ refresh, setRefresh ] = useState({})

    const [ inputs, setInputs ] = useState({ // estado que notifica cuando mostrar u ocultar los 'input'
        name: false,
        email: false,
        phoneNumber: false,
        date: false
    })

    useEffect(()=> { // pide la información del usuario
            axios.get(`http://localhost:3001/users/${_id}`)
            .then((response)=> setData(response.data))
            setRefresh(false)
    }, [refresh])

    function handleOnClick(event){
        const { name } = event.target
        if (inputs[name]) {
            axios.put(`http://localhost:3001/users/${_id}`, {
                [name]: values[name]
            }).then((response)=>{
                setRefresh(response)
            })
            setValues({...values, [name]: ''}) // limpia el input
        }
        setInputs({...inputs, [name]: !inputs[name]})
    }

    function handleOnChange(event){
        const { value, name } = event.target
        setValues({...values, [name]: value})
    }

    return <main
        className='pt-[10rem] min-h-[90vh] min-w-[90vh]'>
        <section className="m-[2rem] flex flex-row justify-center">
            <Image className='flex w-[200px] h-[200px] mx-[1rem] relative right-[5rem]'
            src={profileImage} width={200} height={200}/>
            <div className="flex flex-col justify-left">
                {lsDataEntry.map((dat, index)=>{ // mapea los datos y los campos
                    return (
                    <div key={index} className="flex flex-col m-[0.5rem]">
                        <label
                        >{fields[index]}</label>
                        <div className="flex flex-row relative right-[20px] items-center">
                            {
                                !inputs[dat[0]] ? <>
                                    <Image className="w-[18px] h-[18px] relative right-[10px] cursor-pointer opacity-50"
                                    src={editIcon} alt={'username'} width={300} height={300}
                                    onClick={handleOnClick} name={dat[0]}/>
                                    <h1>{dataEntry[index][1]}</h1></>
                                    : <>
                                    <Image className="w-[18px] h-[18px] relative right-[10px] cursor-pointer opacity-50"
                                    src={check} alt={'username'} width={300} height={300}
                                    onClick={handleOnClick} name={dat[0]}/>
                                    <input className="border" value={values[dat[0]]}
                                    type='text' placeholder={dataEntry[index][1]} name={dat[0]}
                                    onChange={handleOnChange}/></>
                            }
                        </div>
                    </div>)
                    })
                }
            </div>
        </section>
    </main>
}