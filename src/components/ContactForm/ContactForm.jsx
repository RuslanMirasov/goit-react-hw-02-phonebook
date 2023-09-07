import React from "react";
import css from './ContactForm.module.css';
import { inputClean } from 'utils/formValidation.js';


export const ContactForm = ({ onAddContact, onInput}) => (
  <form className={css.contactForm} onSubmit={onAddContact} noValidate>
    <label className={css.label}>
      <span className={css.labelText}>Name</span>
      <input
        className={css.input}
        type="text"
        name="name"
        pattern="[^A-zА-яЁё'-\+ ()\-]"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder='Enter your name'
        onFocus={(input)=>inputClean(input.target)}
        onChange={(input)=>onInput(input)}
      />
    </label>
    <label className={css.label}>
      <span className={css.labelText}>Number</span>
      <input
        className={css.input}
        type="tel"
        name="number"
        pattern="[^0-9\+ ()\-]"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder='Enter your phone number'
        onFocus={(input) => inputClean(input.target)}
        onChange={(input)=>onInput(input)}
      />
    </label>
    <button className={css.submit}>Add contact</button>
  </form>
);
