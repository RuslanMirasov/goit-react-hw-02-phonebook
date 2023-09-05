import React from "react";
import css from './App.module.css';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';

export class App extends React.Component{

  state = {
    contacts: [],
    filter: '',
    name: '',
    number: ''
  }

  render() {
    return (
      <main className={css.main}>
        <h1 hidden>React homework 2</h1>

        <Section title='Phonebook'>
          <h2>Phonebook</h2>
        </Section>

        <Section title='Contacts'>
          <Notification message='There is no contacts in Phonebook!'></Notification>
        </Section>       

      </main>
    );
  }





};
