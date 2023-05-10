
//MUI
import { Button, Box, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';


import { useDispatch, useSelector} from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors'
import swal from 'sweetalert';
 
const AddContact = () => {
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

    dispatcher(addContact(newContact));

    return true;
  };
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const newContact = {
      name: form.elements.name.value,
      number: form.elements.phone.value,
    };
    
    addnewContact(contacts, newContact) && form.reset();
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        
        sx={{
          mt: 1,
          maxWidth: 480,
        }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          inputProps={{
            inputMode: 'text',
            pattern:
              "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
          }}
          id="name"
          label="User name"
          name="name"
          autoComplete="name"
          autoFocus
       
        />
        <TextField
          margin="normal"
          required
          fullWidth
          inputProps={{
            inputMode: 'text',
            pattern: String.raw`\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}`,
          }}
          name="phone"
          label="Phone number"
          type="phone"
          id="phone"
     
        />
        <Box
          m={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
        
        >
          <Button
            type="submit"
            fullWidth
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              mt: 3,
              mb: 2,
              maxWidth: 240,
            }}
          >
            Add new contact
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default AddContact;