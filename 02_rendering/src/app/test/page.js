'use client';

import React from 'react';
import custom from '../custom.module.css';
import outside from '@/styles/outside.module.css';
import { useState } from 'react';
const page = () => {
	const [color, setColor] = useState('redd');
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
		</div>
	);
};

export default page;
