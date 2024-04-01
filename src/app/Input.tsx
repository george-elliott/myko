"use client"
import {useState} from 'react';

interface InputProps {
	handleQuery: (x: string) => void;
}

export default function Input({handleQuery}: InputProps) {

	const [query, setQuery] = useState('');

	const onChange = (e) => {
		setQuery(e.target.value)
	}

	const onKeyPress = (e) => {
		if (e.key === 'Enter' && query) {
			handleQuery(query)
			setQuery('');
		}
	}
	return (
		<input
			placeholder="Message MykoGPT"
			className="p-2 text-black rounded w-full"
			value={query}
			onChange={onChange}
			onKeyPress={onKeyPress}
		/>
	);
}