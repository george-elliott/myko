import {useState} from 'react';
import Dialog from './Dialogue';
import SearchIcon from '@mui/icons-material/Search';

export default function Explanation() {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => {
		setIsOpen(true);
	}

	const handleClose = () => {
		setIsOpen(false);
	}

	return (
		<span>
			<SearchIcon sx={{cursor: 'pointer'}} onClick={handleOpen}/>
			<Dialog
				isOpen={isOpen}
				handleClose={handleClose}
				title="How did I generate this response?"
			>
				<p>
					This is a brief explanation of how the LLM generated this specific response.
				</p>
			</Dialog>
		</span>
	);
}