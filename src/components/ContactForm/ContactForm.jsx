import css from './ContactForm.module.css'
import { nanoid } from 'nanoid';
import { useDispatch, useSelector} from 'react-redux';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors'
import swal from 'sweetalert';
 
const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatcher = useDispatch();
  const findContactByName = (contacts, userName) => {
    const textFilter = userName.toUpperCase();
    return contacts.find(element => element.name.toUpperCase() === textFilter);
  };
  
  const addnewContact = (contacts, newContact) => {
    if (findContactByName(contacts, newContact.name)) {
      swal(`${newContact.name} is already in contacts`);
      return;
    }

    dispatcher(addContact({...newContact, id: nanoid()}));

    return true;
  };
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const newContact = {
      name: form.elements.name.value,
      number: form.elements.number.value,
    };
    addnewContact(contacts, newContact) && form.reset();
  };
    return (
      
        <form className={css.form} onSubmit={handleSubmit}>
          <label className={css.label} htmlFor="name">
            Name
            <input
              type="text"
              placeholder="Enter name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              required
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              name="name"
            />
          </label>

          <label className={css.label} htmlFor="number">
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button className={css.btn} type="submit">Add contact</button>
        </form>
      
    );
  }

  export default ContactForm;