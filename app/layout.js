'use client';
import './globals.css';
import { Inter } from 'next/font/google';

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { usePathname } from 'next/navigation';

import Providers from '@/redux/provider';
import { SessionProvider } from 'next-auth/react';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

const stripePromise = loadStripe(
	`${process.env.NEXT_PUBLIC_STRIPE_KEY_PUBLIC}`,
);

export default function RootLayout({ children }) {
	const path = usePathname();

	// const options = {
	//   clientSecret: `{{CLIENT_SECRET}}`
	// }

	return (
		<html lang='en'>
			<SessionProvider>
				<Providers>
					<body className={inter.className}>
						{!path.includes('login') &&
							!path.includes('admin') &&
							!path.includes('autenticate') &&
							!path.includes('register') && <NavBar />}
						{children}

						{!path.includes('login') &&
							!path.includes('admin') &&
							!path.includes('autenticate') &&
							!path.includes('register') && <Footer />}
					</body>
				</Providers>
			</SessionProvider>
		</html>
	);
}
