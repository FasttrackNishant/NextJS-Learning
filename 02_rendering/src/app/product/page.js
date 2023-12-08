'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function YourComponent() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				console.log('rendering');
				const response = await fetch(
					'https://fakestoreapi.com/products'
				);
				const data = await response.json();
				setProducts(data);
				console.log(data);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, []);

	return (
		<div>
			<p>Page component</p>
			<Link href="/">Home</Link>
			<div>
				{products.map((item) => (
					<h2 key={item.id}>{item.title}</h2>
				))}
			</div>
		</div>
	);
}
