import { useSelector } from 'react-redux';
import {
    getContacts,
    getIsLoading,
    getError,
} from '../redux/selectors';
const useContacts = () => {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  return { contacts, isLoading, error };
};

export default useContacts;