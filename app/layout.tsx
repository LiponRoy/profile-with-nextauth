import { Footer, Nevbar } from '@/components';
import './globals.css';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import RegisterModal from '@/components/models/RegisterModal';
import LoginModal from '@/components/models/LoginModal';
import ToastProvider from '@/providers/ToastProvider';

const nunito = Nunito({ subsets: ['latin'] });


export const metadata: Metadata = {
	title: 'Profile with nextAuth',
	description: 'using nextAuth prisma mongodb',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={nunito.className}>
				<Nevbar />
				<ToastProvider/>
				<RegisterModal />
				<LoginModal/>
				{children}
				<Footer />
			</body>
		</html>
	);
}
