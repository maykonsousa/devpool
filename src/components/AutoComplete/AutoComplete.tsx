/* eslint-disable no-unused-vars */
import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/material';

interface IAutoCompleteProps {
  options: string[];
  value: string[];
  label: string;
  onChange: (event: React.SyntheticEvent, value: string[]) => void;
  limitTags?: number;
  maxWidth?: number;
}

export function AutoComplete({
  options,
  value,
  label,
  ...rest
}: IAutoCompleteProps) {
  return (
    <FormControl fullWidth>
      <Autocomplete
        multiple
        id="multi-select-autocomplete"
        options={options}
        placeholder="Select a technology"
        isOptionEqualToValue={(option, _value) => option === _value}
        value={value}
        {...rest}
        renderInput={(params) => (
          <TextField {...params} label={label} variant="outlined" multiline />
        )}
        ListboxProps={{
          style: {
            maxHeight: '300px',
            width: '100%',
          },
        }}
        componentsProps={{
          paper: {
            sx: {
              maxHeight: '300px',
              display: 'flex',
              overflow: 'auto',
              width: '100%',
            },
          },
        }}
      />
    </FormControl>
  );
}
