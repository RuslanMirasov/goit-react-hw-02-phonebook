import React from "react";
import css from './ContactForm.module.css';

export class ContactForm extends React.Component{

  state = {
    name: '',
    number: ''
  }

  render() {
    return (
      <form className={css.contactForm}>
          <label className={css.label}>
            <span className={css.labelText}>Name</span>
            <input
               className={css.input}
               type="text"
               name="name"
               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
               required
               placeholder='Enter your name'
            />
          </label>
          <label className={css.label}>
            <span className={css.labelText}>Number</span>
            <input
               className={css.input}
               type="tel"
               name="number"
               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
               required
               placeholder='Enter your phone number'
            />
          </label>
          <button className={css.submit}>Add contact</button>
      </form>
    );
  }
};