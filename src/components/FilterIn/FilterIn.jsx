import { useDispatch } from 'react-redux';
import { changeFilter, changeFilterNumber } from '../../redux/filterSlice';

import { TextField, TableCell, TableRow} from '@mui/material';


const FilterIn = () => {
  const dispatcher = useDispatch();

  const handlerChangeFilter = event => {
    dispatcher(changeFilter(event.currentTarget.value));
  };

  const handlerChangeFilterNumber = event => {
    dispatcher(changeFilterNumber(event.currentTarget.value));
  };

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        <TextField
          type="search"
          name="filter"
          variant="standard"
          fullWidth
          label="Find by name"
          onChange={handlerChangeFilter}
        />
      </TableCell>

      <TableCell align="left">
        <TextField
          type="search"
          name="filter"
          variant="standard"
          fullWidth
          label="Find by number"
          onChange={handlerChangeFilterNumber}
        />
      </TableCell>

      <TableCell align="left"></TableCell>

      <TableCell align="left"></TableCell>
    </TableRow>
  );
};

export default FilterIn;