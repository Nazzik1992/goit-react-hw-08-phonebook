import { useDispatch } from 'react-redux';
import AddContact from 'components/AddContact/AddContact';
import ContactForm from 'components/ContactForm/ContactForm';


import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import useContacts from 'hooks/useContacts';

//MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Contacts = () => {
  const { contacts } = useContacts();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box
      sx={{
        padding: 2,
      }}
    >
      <Typography variant="h3">Phonebook</Typography>

      <AddContact/>

      {contacts.length > 0 && (
        <>
          <Typography variant="h4">Contacts</Typography>


          <ContactForm />
        </>
      )}

    </Box>
  );
};

export default Contacts;