'use client';

import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import logo_google from '@/public/logo_google.jpg';

const GoogleLogin = () => {
	const { data: session } = useSession();
	const router = useRouter();

	const handleClick = async (e) => {
		e.preventDefault;
		await signIn('google');
	};

	return (
		<div className='flex gap-x-[0.5rem] justify-center font-semibold text-[1rem] py-[0.4rem] px-[1rem] bg-white text-black rounded-[1rem] w-fit'>
			<Image className='w-[20px] h-[20px] self-center'
				src={logo_google} width={800} height={800}/>
			<a
				href='#'
				onClick={handleClick}
			>
				Continue with Google
			</a>
		</div>
	);
};

export default GoogleLogin;
