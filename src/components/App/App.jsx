import { Component } from 'react';
import css from './App.module.css';
import { nanoid } from "nanoid";
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';

export class App extends Component{

  state = {
    contacts: [      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
    filter:'',
  };

  handleFilterChange = event => {
    const filterValue = event.target.value;
    this.setState({ filter: filterValue });
  };

  onFormSubmit = newContact => {
      const isSameName = this.state.contacts.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase());
      if (isSameName) return alert(`${isSameName.name} is already in contacts`);
      this.setState(prevState => ({
        contacts: [ {...newContact,id: nanoid()}, ...prevState.contacts],
      }));
  };

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { contacts } = this.state
    const filteredContacts = this.getFilteredContacts();

    return (
      <main className={css.main}>
        <h1 hidden>React HW-02-Phonebook</h1>

        <Section title='Phonebook'>
          <ContactForm handleFormSubmit={this.onFormSubmit} />
        </Section>

        <Section title='Contacts'>
          {contacts.length > 1 && <Filter name={this.state.filter} handleFilterChange={this.handleFilterChange} />}
          {contacts.length > 0 ?
            <ContactList contacts={filteredContacts} onDeleteContact={this.deleteContact} /> :
            <Notification message='There is no contacts in Phonebook!'></Notification>
          }
        </Section>       

      </main>
    );
  };
};

export default App;