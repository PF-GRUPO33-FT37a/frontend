'use client';

import { useSearchParams } from 'next/navigation';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const GoogleLogin = () => {
	const searchParams = useSearchParams();
	const callbackUrl = searchParams.get('callbackUrl');
	const { data: session } = useSession();
	const router = useRouter();

	const handleSignout = (e) => {
		e.preventDefault();
		signOut();
	};
	// const handleSignIn = (e) => {
	// 	e.preventDefault();
	// 	signIn() && router.push('/');
	// };

	// session && router.push('/');

	return (
		<div>
			{session ? (
				<button onClick={handleSignout}>Sign out</button>
			) : (
				<button onClick={() => signIn()}>Continue With Google</button>
			)}
		</div>
	);
};

export default GoogleLogin;
