'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// import './globals.css'

export default function Home() {
	const router = useRouter();

	return (
		<div>
			<p >This is rendering next application</p>

			<Link href="/product">Go to Product Page</Link>

			<button onClick={() => router.push('/product')}>
				Product List
			</button>
			<button onClick={() => router.push('/serverproduct')}>
				Server Product
			</button>
		</div>
	);
}
