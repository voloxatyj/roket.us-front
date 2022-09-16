import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export const CategoryList = ({
  categories,
  setCategory,
  setNewsByCategory,
}) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Autocomplete
      onChange={(event, newValue) => {
        if (newValue === null) {
          setCategory([]);
          setNewsByCategory({});
          return;
        }
        setCategory(newValue);
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      getOptionLabel={(option) => option.title || ''}
      id='controllable-states-demo'
      options={categories || []}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label='Categories' />}
    />
  );
};
