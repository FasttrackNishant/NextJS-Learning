'use client';

import React from 'react';
import custom from '../custom.module.css';
import outside from '@/styles/outside.module.css';
import { useState } from 'react';
import Image from 'next/image';
import profile from '../../../public/vercel.svg';
import { Poppins } from 'next/font/google';
const poppins = Poppins({
	weight: '300',
	subsets: ['latin'],
	display: 'swap',
});
const page = () => {
	const [color, setColor] = useState('redd');
	console.log(profile);
	return (
		<div>
			<h2>This is test page</h2>
			<p className={custom.main}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Similique adipisci, vel perferendis sint temporibus sed
				pariatur!
			</p>

			{/* <h3 style={{ backgroundColor: 'red' }}>Inline CSS line</h3> */}

			<h2 className={outside.cont}>This is outside text</h2>

			{/* Conditional css */}

			<h2 className={color == 'red' ? custom.red : custom.green}>
				Red Block
			</h2>

			<div>
				<h1>Image compnent </h1>
				{/* <Image src={profile} /> */}
				{/* <img src={profile.src} alt="" /> */}
				<Image
					src="https://images.pexels.com/photos/163007/phone-old-year-built-1955-bakelite-163007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					height={300}
					width={300}
				/>
			</div>

			<div className="font-Poppins">Font testing is here</div>
			<div className={poppins.className}>
				Next js Font testing is here
			</div>
		</div>
	);
};

export default page;
