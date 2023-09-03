import PropTypes from 'prop-types';
import css from './ContactItem.module.css';
import { FcPhone } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { AiOutlineDelete } from 'react-icons/ai';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.list_item} key={contact.id}>
      <div className={css.contact_wrp}>
        <FcPhone size={'1.5em'} />
        {contact.name}: {contact.number}
      </div>
      <button
        className={css.button_delete}
        type="button"
        onClick={() => dispatch(deleteContact(contact.id))} //Відправляємо action deleteContact в redux store по кліку на кнопці "Delete"
      >
        <AiOutlineDelete size={'1.5em'} />
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};


//-------------------------------------------------
// import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/contacts/operations';
// import css from './ContactItem.module.css';

// const ContactItem = ({contact }) => {
//   const dispatch = useDispatch();
//   const handleDelete = () => {
//     dispatch(deleteContact(contact.id));
//   };

//   return (
//     <li className={css.listItem} key={contact.id}>
//       <p>{contact.name}: <span>{contact.number}</span></p>
//       <button
//         className={css.listBtn}
//         type="button"
      
//         onClick={handleDelete}>Delete</button>
//     </li>
//   )
// }

// ContactItem.propTypes = {
//   contact: PropTypes.object.isRequired,
// };

// export default ContactItem;


