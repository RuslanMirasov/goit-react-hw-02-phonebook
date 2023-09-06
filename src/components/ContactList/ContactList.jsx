import css from './ContactList.module.css';

export const ContactList = () => {
   return (
      <ul className={css.contactList}>
         <li>
            <p className={css.contactListText}>Mirasov Ruslan</p>
            <p className={css.contactListText}>+38 (096) 745-45-26</p>
            <button type="button" className={css.delButton}>Delete</button>
         </li>
         <li>
            <p className={css.contactListText}>Mirasova Olga</p>
            <p className={css.contactListText}>+38 (096) 312-68-88</p>
            <button type="button" className={css.delButton}>Delete</button>
         </li>
         <li>
            <p className={css.contactListText}>Trubnikov Oleg</p>
            <p className={css.contactListText}>+38 (050) 205-17-55</p>
            <button type="button" className={css.delButton}>Delete</button>
         </li>
         <li>
            <p className={css.contactListText}>Petrenko Vasiliy</p>
            <p className={css.contactListText}>+38 (099) 777-08-14</p>
            <button type="button" className={css.delButton}>Delete</button>
         </li>
         <li>
            <p className={css.contactListText}>Mirasov Ruslan</p>
            <p className={css.contactListText}>+38 (096) 745-45-26</p>
            <button type="button" className={css.delButton}>Delete</button>
         </li>
         <li>
            <p className={css.contactListText}>Mirasova Olga</p>
            <p className={css.contactListText}>+38 (096) 312-68-88</p>
            <button type="button" className={css.delButton}>Delete</button>
         </li>
         <li>
            <p className={css.contactListText}>Trubnikov Oleg</p>
            <p className={css.contactListText}>+38 (050) 205-17-55</p>
            <button type="button" className={css.delButton}>Delete</button>
         </li>
         <li>
            <p className={css.contactListText}>Mirasov Ruslan</p>
            <p className={css.contactListText}>+38 (096) 745-45-26</p>
            <button type="button" className={css.delButton}>Delete</button>
         </li>
         <li>
            <p className={css.contactListText}>Mirasova Olga</p>
            <p className={css.contactListText}>+38 (096) 312-68-88</p>
            <button type="button" className={css.delButton}>Delete</button>
         </li>
         <li>
            <p className={css.contactListText}>Trubnikov Oleg</p>
            <p className={css.contactListText}>+38 (050) 205-17-55</p>
            <button type="button" className={css.delButton}>Delete</button>
         </li>
      </ul>
   )
}