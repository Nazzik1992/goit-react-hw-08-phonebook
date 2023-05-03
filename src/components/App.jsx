
import { Filter } from './Fiter/Filter';
import  { Contacts } from './Contacts/Contacts';
import  ContactForm   from './ContactForm/ContactForm';

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from 'redux/operations';

 

const App = () => {

  const dispatch = useDispatch();
 
useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    return (
      <container className="App">
        <h1>Phonebook</h1>
        <ContactForm  />

       <h2>Contacts</h2>
            <Filter />
            <Contacts/>
      </container>
    );
  }

  export default App;