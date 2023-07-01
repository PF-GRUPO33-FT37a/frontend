'use client';

import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';

const GoogleLogin = () => {
	const { data: session } = useSession();
	const router = useRouter();
	const notify = (message) => {
		toast.success(message, {
			autoClose: 2000,
		});
	};

	const notifyError = (message) => toast.error(message);

	const handleClick = async (e) => {
		try {
			e.preventDefault;
			await signIn('google');
		} catch (error) {
			router.push('/login');
			notifyError('Please log in using your email and password');
		}
	};

	if (session) {
		router.push('/');
	}

	return (
		<div>
			<ToastContainer />
			<a
				href='#'
				onClick={handleClick}
				className='font-semibold text-[1rem] py-[0.4rem] px-[2rem] bg-black text-white rounded-[1rem] w-[50%] mx-[auto] shadow-md shadow-[#11111180]'
			>
				Continue With Google
			</a>
		</div>
	);
};

export default GoogleLogin;
