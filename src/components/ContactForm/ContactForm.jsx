
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/selectors';
import Contact from 'components/Contacts/Contacts';

import FilterIn from '../FilterIn/FilterIn';
//MUI
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';



const ContactForm = () => {
  const visibleContacts = useSelector(getContacts);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 480 }} aria-label="customized table">
        {/* <Table aria-label="customized table"> */}
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Phone</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <FilterIn />
          {visibleContacts.map(contact => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContactForm;
