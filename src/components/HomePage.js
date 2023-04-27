import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import ContactList from './ContactList';
import ChatComposer from './ChatComposer';
import ChatHistory from './ChatHistory';
import Notifications from './Notifications';
import FileUpload from './FileUpload';
import Emojis from './Emojis';

function HomePage({ handleLogout }) {
  const [selectedContact, setSelectedContact] = useState(null);
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        sender: 'Me',
        recipient: selectedContact.name,
        content: message,
        time: new Date().toISOString(),
      },
    ]);
  };

  return (
   
    <div className="home-page container">
      <header>
        <h1>Welcome to my Chat App</h1>
        <button onClick={handleLogout}>Log Out</button>
      </header>
      <main className='row'>
        <div className='col'>
        <ContactList  setSelectedContact={setSelectedContact} />
        {selectedContact ? (
          <div className='chatfeed'>
            <ChatHistory messages={messages} selectedContact={selectedContact} />
            <ChatComposer handleSendMessage={handleSendMessage} />
          </div>
        ) : (
          <div className="no-contact-selected">Please select a contact to start chatting</div>
        )}
        </div>
       
        <div className="col">   
            <div className='row'> <Notifications />
            </div>

            <div>
                < ChatComposer  />
                
            </div>
            <div className='row'>
                <FileUpload className="col"/> 
                <Emojis className="col" /> 
            </div>
        </div>
    
      </main>
      <br></br>
      <aside>
        
        
        
      </aside>
    </div>
  );
}

export default HomePage;
