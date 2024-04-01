import {Chat, Log} from './types';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

interface Props {
	log: Log;
}

export default function Table({log}: Props) {
	if (!log || !log.content) {
		return null;
	}
	const rows = log.content.split('\r\n');
	const columns = rows.shift().split(',');
	// Remove empty row
	rows.pop();

	return (
		<Box sx={{ height: 400, width: '100%', backgroundColor: 'white', position: 'relative'}}>
			<DataGrid
				rows={rows.map((row) => columns.reduce((memo, value, i) => {
					memo[value] = row.split(',')[i];
					return memo;
				}, {}))}
				columns={columns.map(name => ({field: name, headerName: name, width: 70}))}
				getRowId={(row) => row['Customer Id']}
			/>
		</Box>
	);
}