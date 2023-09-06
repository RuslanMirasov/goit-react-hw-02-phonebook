import React from "react";
import css from './App.module.css';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

export class App extends React.Component{

  state = {
    contacts: [],
    filter: '', 
  }

  render() {
    return (
      <main className={css.main}>
        <h1 hidden>React homework 2</h1>

        <Section title='Phonebook'>
          <ContactForm/>
        </Section>

        <Section title='Contacts'>
          <Notification message='There is no contacts in Phonebook!'></Notification>
          <Filter />
          <ContactList />
        </Section>       

      </main>
    );
  }





};
