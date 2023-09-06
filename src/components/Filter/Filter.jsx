import css from './Filter.module.css';

export const Filter = () => (
   <label className={css.label}>
      <span className={css.labelText}>Find contacts by name</span>
      <input
         className={css.input}
         type="text"
         name="name"
         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
         placeholder='Enter contact name'
      />
   </label>
);