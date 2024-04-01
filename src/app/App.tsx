'use client';
import Header from './Header';
import Chatbox from './Chatbox';
import {Chat} from './types'
import {useState} from 'react';

interface Props {
	csv: string,
}

export default function App(props: Props) {
	const [chats, setChats] = useState<Chat[]>([{name: 'Test', logs: [], source: 1}]);
	const [selectedChatIndex, selectChat] = useState<number | undefined>(undefined);
	const selectedChat = chats[selectedChatIndex];

	const handleCreate = (chat) => {
		setChats([...chats, chat]);
	}

	const handleQuery = (query) => {
		const chat = {
			...selectedChat,
			logs: [
				...selectedChat.logs,
				{
					type: 'text',
					content: query,
					response: false,
				},
				selectedChat.source === 1 ?
					{
						type: 'text',
						content: "This is a mocked response",
						response: true,
					} :
					{
						type: 'csv',
						content: props.csv,
						response: true,
					}
			],

		}
		const newChats = [...chats];
		newChats[selectedChatIndex] = chat;
		setChats(newChats);
	}

	return (
		<div className="flex justify-start h-full relative flex-col">
			<Header chats={chats} handleCreate={handleCreate} handleSelect={selectChat} selectedChat={selectedChatIndex}/>
			<Chatbox
				logs={selectedChat && selectedChat.logs}
				handleQuery={handleQuery}
				source={selectedChat && selectedChat.source}/>
		</div>
	);
}