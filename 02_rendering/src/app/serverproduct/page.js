import { fetchServerResponse } from 'next/dist/client/components/router-reducer/fetch-server-response';
import { Festive } from 'next/font/google';

async function fetchserverData() {
	console.log('fetch data');

	try {
		let data = await fetch('https://fakestoreapi.com/products');
		data = await data.json();
		return data;
	} catch (error) {
		console.log('error in data');
	}
}

const page = async () => {
	let productlist = await fetchserverData();
	console.log(productlist);

	return (
		<div>
			<h3>Server Product paged</h3>
			<div>
				{productlist.map((item) => (
					<div>
						<h2>{item.id}</h2>
						<h2>{item.title}</h2>
					</div>
				))}
			</div>
		</div>
	);
};

export default page;
