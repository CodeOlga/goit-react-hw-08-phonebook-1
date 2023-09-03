import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import {
  selectContactsCount,
  selectIsLoading,
  selectError,
} from 'redux/contacts/selectors';
import { selectVisibleContacts } from 'redux/filter/selectors';

import css from './ContactList.module.css';

export const ContactList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);
  const count = useSelector(selectContactsCount);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <ul className={css.list}>
      {!count && !isLoading && !error ? (
        <p className={css.emptyMessage}>
          The Phonebook is empty. Add your first contact.
        </p>
      ) : (
        filteredContacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))
      )}
    </ul>
  );
};


//--------------------------------------------------
// import { useSelector } from 'react-redux';
// import {
//   selectContacts,
//   selectFilteredContacts,
//   selectError,
//   selectIsLoading,
// } from 'redux/contacts/selectors';
// import ContactItem from '../ContactItem/ContactItem';
// import { Loader } from '../Loader/Loader';
// import css from './ContactList.module.css'

// function ContactList() {
//   const filteredContacts = useSelector(selectFilteredContacts);
//   const contacts = useSelector(selectContacts);
//   const error = useSelector(selectError);
//   const isLoading = useSelector(selectIsLoading);

//   return (
//     <ul className={css.listContainer}>
//       {isLoading && !error ? (
//         <div className={css.loaderWrap}>
//         <Loader/>
//         </div>
//       ) : contacts.length === 0 && !error ? (
//         <p>The Phonebook is empty. Add your first contact. 🫤</p>
//       ) : (
//         filteredContacts.map(({ id, name, number }) => (
//           <ContactItem key={id} contact={{ id, name, number }} />
//         ))
//       )}
//     </ul>
//   );
// }

// export default ContactList;




