import React from "react";
import css from './App.module.css';
import { nanoid } from "nanoid";
import { formValidation } from 'utils/formValidation.js';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

export class App extends React.Component{

  state = {
    contacts: [],
    filter:null,
    name: '',
    number: '',
  };

  handleChange = (event) => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  filterContacts = (event) => {
    const searchName = event.currentTarget.value;
    if (searchName.length === 0) {
      this.setState({ filter: null });
      return;
    }
    this.setState((prev) => ({
      filter: prev.contacts.filter(contact => contact.name.toLowerCase().includes(searchName.toLowerCase()))
    }));
  };

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  addContact = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (formValidation(form) === true) {
      const isSameName = this.state.contacts.reduce((acc, contact) => (contact.name === form.name.value ? acc + 1 : acc), 0);
      isSameName > 0 ? alert(`${form.name.value} is already in contacts!`) :
      this.setState(prevState=>({
        contacts: [{ id: nanoid(), name: this.state.name, number: this.state.number }, ...prevState.contacts ],
      }));
      form.reset();
    }
  };

  render() {
    const { contacts } = this.state
    const { filter } = this.state
    
    return (
      <main className={css.main}>
        <h1 hidden>React HW-o2-Phonebook</h1>

        <Section title='Phonebook'>
          <ContactForm onAddContact={this.addContact} onInput={this.handleChange} />
        </Section>

        <Section title='Contacts'>
          {contacts.length > 1 && <Filter onInput={this.filterContacts} />}
          {contacts.length > 0 ?
            <ContactList contacts={contacts} filter={filter} onDeleteContact={this.deleteContact} /> :
            <Notification message='There is no contacts in Phonebook!'></Notification>
          }
        </Section>       

      </main>
    );
  };
};
