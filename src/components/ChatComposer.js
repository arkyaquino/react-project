


import { BsFillSendFill } from 'react-icons/bs';

import React, { useState } from 'react';

function ChatComposer() {
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add code here to send the message to the selected contact
  };

  return (
    <div className="chat-composer">
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={handleChange}
          placeholder="Type a message"
          minLength={600}
          required
        />
        <button type="submit"><BsFillSendFill /></button>
      </form>
    </div>
  );
}

export default ChatComposer;

