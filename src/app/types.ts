export type Log = {
	type: 'text' | 'csv';
	content: string;
	response: boolean;
}

export type Chat = {
	name: string;
	logs: Log[];
	source: number;
}

export type CustomTerm = {
	term: string;
	description: string;
}