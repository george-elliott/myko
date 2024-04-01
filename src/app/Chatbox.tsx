import {useRef} from 'react';
import Input from './Input';
import {Chat, Log} from './types';
import Table from './Table';
import DataSourceSelector from './DataSourceSelector';
import Explanation from './Explanation';

interface ChatboxProps {
	handleQuery: (x: string) => void;
	logs: Log[];
	source: number;
}

export default function Chatbox(props: ChatboxProps) {
	const {logs, handleQuery, source} = props;
	const ref = useRef(null);
	if (!logs) {
		return (
			<div className="flex items-center h-full p-24">Select or create a new chat</div>
		);
	}

	const handleScroll = (query) => {
		handleQuery(query);
		//Scroll to bottom of chat window when overflowing
		setTimeout(() => ref.current?.scrollTo(0, ref.current?.scrollHeight), 10)
	}
	return (
		<div className="flex-[0_1_100%] flex flex-col justify-end align-center p-16 bg-slate-800 relative">
			<div ref={ref} className="flex flex-col align-center mb-2 overflow-auto max-h-[500px]">
				{logs.map((log, i) => {
					const Component = Content[log.type];
					return (
						<span>
							{ log.response && <Explanation />}
							<Component key={i} log={log} />
						</span>
					);
				})}
			</div>
			<div className="flex">
				<div className="bg-white w-[200px] mr-2 pt-2 rounded">
					<DataSourceSelector source={source} disabled />
				</div>
				<Input handleQuery={handleScroll}/>
			</div>
		</div>
	);
}

interface LogProps {
	log: Log;
}

function Log({log}: LogProps) {
	return (
		<span>{!log.response && '> '}{log.content}</span>
	);
}

const Content = {
	text: Log,
	csv: Table,
};