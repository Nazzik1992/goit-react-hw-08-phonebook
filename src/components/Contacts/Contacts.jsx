
import PropTypes from 'prop-types';
import css from './Contacts.module.css'
import { deleteContact } from 'redux/operations';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/selectors'

export  function Contacts() {
  const filterContacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Contacts</h2>
      <ul>
      {filterContacts.map(({ id, name, number }) => {

          return (
            <li key={id}
            className={css.List}>
              <p>
                {name}: {number}
              </p>
              <button
              className={css.Btn}
                type="button"
                onClick={() => {
                  const action = deleteContact(id);
                  console.log(action)
                  dispatch(deleteContact(id));
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};