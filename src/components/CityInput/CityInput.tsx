/* eslint-disable no-unused-vars */
import React from 'react';
import {
  FormControl,
  Autocomplete,
  TextField,
  FormHelperText,
} from '@mui/material';
import { getCities } from '@/utils';
import { TStates } from '@/mock/citiesMock';

interface ICityInputProps {
  UF: TStates;
  onChange: (event: React.SyntheticEvent, value: string | null) => void;
  value?: string;
  label?: string;
  errorMessage: string;
}

export function CityInput({
  UF,
  onChange,
  value,
  label = 'Cidade',
  errorMessage,
}: ICityInputProps) {
  const { citiesOnlyNames } = getCities(UF);
  return (
    <FormControl fullWidth>
      <Autocomplete
        id="multi-select-autocomplete"
        options={citiesOnlyNames}
        placeholder="Select a technology"
        value={value}
        onChange={onChange}
        disabled={!UF}
        noOptionsText="Nenhuma cidade encontrada"
        renderInput={(params) => (
          <TextField {...params} label={label} variant="outlined" />
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

      {errorMessage ? (
        <FormHelperText sx={{ color: 'error.main' }}>
          {errorMessage}
        </FormHelperText>
      ) : null}
    </FormControl>
  );
}
