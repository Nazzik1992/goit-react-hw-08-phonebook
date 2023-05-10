
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';


//mui
import { IconButton,TableCell, TableRow} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

;

const Contact = ({ contact }) => {
  const dispatcher = useDispatch();

  const handlerDelete = () => dispatcher(deleteContact(contact.id));

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {contact.name}
      </TableCell>

      <TableCell align="left">{contact.number}</TableCell>

      <TableCell align="left">
        <IconButton aria-label="delete" color="primary" onClick={handlerDelete}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

Contact.propType = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    edit: PropTypes.bool,
  }).isRequired,
};

export default Contact;