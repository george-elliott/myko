'use client';
import {Chat} from './types';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import DataSourceSelector from './DataSourceSelector';
import Dialog from './Dialogue';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import CustomTermForm from './CustomTerm';

interface HeaderProps {
	chats: Chat[];
	handleCreate: (x: Chat) => void;
	handleSelect: (x: number) => void;
	selectedChat: number;
}

export default function Header(props: HeaderProps) {
	const [isOpen, setIsOpen] = React.useState(false);
	const [source, setSource] = React.useState(1);
	const [name, setName] = React.useState('');
	const handleOpen = () => {
		setIsOpen(true);
	}

	const handleClose = () => {
		setIsOpen(false);
	}

	const handleChangeSource = (e: any) => {
		setSource(e.target.value);
	}

	const handleChangeName = (e: any) => {
		setName(e.target.value);
	}

	const handleCreate = () => {
		props.handleCreate({name, source, logs: []} as Chat);
		setSource(1);
		setName('');
		handleClose();
	}
	return (
		<div className="flex-[0_0_100px] h-full p-4 flex justify-between">
			<div>
				<Button variant="outlined" onClick={handleOpen}>Create a new chat</Button>
				<Dialog
					isOpen={isOpen}
					handleCreate={handleCreate}
					handleClose={handleClose}
					title="Create a new chat"
					buttons
				>
					<div className="flex flex-col w-[250px] h-[150px] justify-between">
						<TextField label="Name" onChange={handleChangeName} value={name}/>
						<DataSourceSelector source={source} handleChangeSource={handleChangeSource} disabled={false}/>
					</div>
				</Dialog>

				<div className="bg-white w-[250px] pt-2 rounded mt-2">
					<FormControl fullWidth>
						<InputLabel id="demo-simple-select-label">Chat</InputLabel>
						<Select
							value={props.selectedChat}
							label="Chat"
							onChange={(e) => props.handleSelect(e.target.value as number)}
						>
							{props.chats.map((chat, i) => (
								<MenuItem key={i} value={i}>{chat.name}</MenuItem>
							))}
						</Select>
					</FormControl>
				</div>
			</div>
			<CustomTermForm />
		</div>
	);
}