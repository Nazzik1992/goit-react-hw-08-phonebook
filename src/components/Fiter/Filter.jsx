import { useDispatch } from 'react-redux';
import  { filterContacts } from 'redux/filterSlice';

export function Filter() {
  const dispatch = useDispatch();
  return (
    <>
      <h2>Find contacts by name</h2>
      <input
        type="text"
        name="filter"
        onChange={e => dispatch(filterContacts(e.target.value))}
      />
    </>
  );
}


