import css from './Filter.module.css';

export const Filter = ({onInput}) => (
   <label className={css.label}>
      <span className={css.labelText}>Find contacts by name</span>
      <input
         className={css.input}
         type="text"
         name="filter"
         placeholder='Enter contact name'
         onChange={(input)=>onInput(input)}
      />
   </label>
);