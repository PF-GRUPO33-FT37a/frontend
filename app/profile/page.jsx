'use client'
import Image from "next/image"

export default function ProfilePage(){
    const user = JSON.parse(localStorage.getItem('user'))
    const { date, email, name, phoneNumber } = user.data
    const profileImage = user.data.image[0]
    console.log(user);

    return <main
        className='pt-[10rem] min-h-[90vh] min-w-[90vh]'>
        <section className="m-[2rem] flex flex-row justify-center">
            <Image className='flex w-[200px] h-[200px] mx-[3rem]'
            src={profileImage} width={200} height={200}/>
            <div className="flex flex-col justify-left">
                <div className="flex flex-col m-[0.5rem]">
                    <label
                    >Nombre de usuario:</label>
                    <h1>{name}</h1>
                </div>
                <div className="flex flex-col m-[0.5rem]">
                    <label
                    >Correo electrónico:</label>
                    <h1>{email}</h1>
                </div>
                <div className="flex flex-col m-[0.5rem]">
                    <label
                    >Teléfono:</label>
                    <h1>{phoneNumber}</h1>
                </div>
                <div className="flex flex-col m-[0.5rem]">
                    <label
                    >Fecha de nacimiento:</label>
                    <h1>{date}</h1>
                </div>
            </div>
        </section>
    </main>
}