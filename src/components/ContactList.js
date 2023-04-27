import React from 'react';

const contacts = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'User1' },
  { id: 3, name: 'Admin' },
];

function ContactList() {
  const [selectedContact, setSelectedContact] = React.useState(null);

  const handleClick = (contact) => {
    setSelectedContact(contact);
  };

  return (
    <div className="contact-list">
      <h2>Contacts</h2>
      <ul>
        {contacts.map((contact) => (
          <li 
            type="button"
            key={contact.id}
            className={selectedContact === contact ? 'selected' : ''}
            onClick={() => handleClick(contact)}
          >
            {contact.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
