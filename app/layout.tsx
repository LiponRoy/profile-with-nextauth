import { Footer, Nevbar } from '@/components';
import './globals.css';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import RegisterModal from '@/components/models/RegisterModal';
import LoginModal from '@/components/models/LoginModal';
import ToastProvider from '@/providers/ToastProvider';
import getCurrentUser from './actions/getCurrentUser';

const nunito = Nunito({ subsets: ['latin'] });


export const metadata: Metadata = {
	title: 'Profile with nextAuth',
	description: 'using nextAuth prisma mongodb',
};

export default async function  RootLayout({

	children,
}: {
	children: React.ReactNode;
	
}) {
	const currentUser = await getCurrentUser();
	return (
		<html lang="en">
			<body className={nunito.className}>
				<Nevbar currentUser={currentUser} />
				<ToastProvider/>
				<RegisterModal />
				<LoginModal/>
				{children}
				<Footer />
			</body>
		</html>
	);
}
