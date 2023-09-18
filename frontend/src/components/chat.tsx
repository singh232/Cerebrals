'use client';

import { useChat } from 'ai/react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Send } from 'lucide-react';

export default function Chat() {
	const { messages, input, handleInputChange, handleSubmit } = useChat({
		api: '/api/chat',
	});

	return (
		<div>
			<ul>
				{messages.map((m, index) => (
					<li className='bg-white rounded-sm m-2 p-2' key={index}>
						{m.role === 'user' ? 'User: ' : 'Bot: '}
						{m.content}
					</li>
				))}
			</ul>

			<form onSubmit={handleSubmit}>
				<div className='p-3 flex flex-row gap-3 fixed bottom-0 w-full'>
					<Input value={input} onChange={handleInputChange} />
					<Button size="icon" type='submit'>
						<Send className='p-0.5' />
					</Button>
				</div>
			</form>
		</div>
	);
}
