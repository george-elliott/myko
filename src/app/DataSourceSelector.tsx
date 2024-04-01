import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Props {
	handleChangeSource: (x: string) => void;
	source: number;
	disabled: boolean;
}

export default function DataSourceSelector(props: Props) {
	return (
		<FormControl fullWidth>
			<InputLabel id="demo-simple-select-label">Data Source</InputLabel>
			<Select
				value={props.source}
				label="Data Source"
				onChange={props.handleChangeSource}
				disabled={props.disabled}
			>
				<MenuItem value={1}>Text</MenuItem>
				<MenuItem value={2}>CSV</MenuItem>
			</Select>
		</FormControl>
	);
}