'use client';
import React from 'react';
import { useState } from 'react';

const Showproduct = (props) => {
	const [toogle, setToogle] = useState(false);
	const [name, setName] = useState('Show Price');
	const ToogleList = () => {
		setToogle(!toogle);
		if (toogle) {
			setName('Hide Price');
		} else {
			setName('Show Price');
		}
	};

	function clickHandler() {
		console.log(props.price);
	}

	return (
		<div>
			<button onClick={ToogleList}>{name}</button>
			{toogle && <h2>{props.price}</h2>}
		</div>
	);
};

export default Showproduct;
