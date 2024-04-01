import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import Button from '@mui/material/Button';

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement<any, any>;
	},
	ref: React.Ref<unknown>,
) {
	return <Slide direction="up" ref={ref} {...props} />;
});

interface Props {
	title: string;
	children: any;
	buttons: boolean;
	isOpen: boolean;
	handleClose?: () => void;
	handleCreate?: () => void;
}

export default function DialogeBox(props: Props) {
	return (
		<Dialog
			open={props.isOpen}
			TransitionComponent={Transition}
			keepMounted
			onClose={props.handleClose}
		>
			<DialogTitle>{props.title}</DialogTitle>
			<DialogContent>
				{props.children}
			</DialogContent>
			{ props.buttons &&
				<DialogActions>
					<Button onClick={props.handleClose}>Cancel</Button>
					<Button onClick={props.handleCreate}>Submit</Button>
				</DialogActions>
			}
		</Dialog>
	);
}