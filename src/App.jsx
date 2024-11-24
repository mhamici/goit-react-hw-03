import { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import { nanoid } from 'nanoid';
import contactsData from './components/Data/contacts.json'; // Импортируем данные
import './App.css';

const App = () => {
  const [contacts, setContacts] = useState(contactsData); // Используем импортированные данные
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (storedContacts) setContacts(storedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (name, number) => {
    const newContact = { id: nanoid(), name, number };
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const handleDeleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const handleFilterChange = (event) => setFilter(event.target.value);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="appContainer">
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox filter={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
    </div>
  );
};

export default App;
