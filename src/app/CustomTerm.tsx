import {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Dialog from './Dialogue';

export default function CustomTermForm() {
	const [term, setTerm] = useState('');
	const [description, setDescription] = useState('');
	const [isOpen, setIsOpen] = useState(false);

	const handleClose = () => {
		setIsOpen(false);
		setTerm('');
		setDescription('');
	}
	return (
		<div>
			<Button variant="outlined" className="h-[36px]" onClick={() => setIsOpen(true)}>Create a custom term</Button>
			<Dialog
				isOpen={isOpen}
				handleCreate={handleClose}
				handleClose={handleClose}
				title="Create custom term"
				buttons
			>
				<div className="flex flex-col w-[250px] h-[150px] justify-between pt-2">
					<TextField label="Term" onChange={(e) => setTerm(e.target.value)} value={term}/>
					<TextField label="Description" onChange={(e) => setDescription(e.target.value)} value={description}/>
				</div>
			</Dialog>
		</div>
	);
}