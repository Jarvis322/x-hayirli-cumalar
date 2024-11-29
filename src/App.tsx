import React, { useState, useCallback } from 'react';
import { MessageCard } from './components/MessageCard';
import { messages } from './data/messages';
import type { Message } from './types';

function getRandomMessage(currentMessage: Message | null): Message {
  let newMessage;
  do {
    newMessage = messages[Math.floor(Math.random() * messages.length)];
  } while (currentMessage && newMessage.text === currentMessage.text && messages.length > 1);
  return newMessage;
}

function App() {
  const [message, setMessage] = useState<Message>(() => getRandomMessage(null));

  const handleRefresh = useCallback(() => {
    setMessage(currentMessage => getRandomMessage(currentMessage));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 flex items-center justify-center p-4">
      <MessageCard message={message} onRefresh={handleRefresh} />
    </div>
  );
}

export default App;