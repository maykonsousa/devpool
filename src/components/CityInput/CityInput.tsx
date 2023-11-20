/* eslint-disable no-unused-vars */
import React from 'react';
import { FormControl, Autocomplete, TextField } from '@mui/material';

interface ICityInputProps {
  UF: string;
  onChange: (event: React.SyntheticEvent, value: string |null) => void;
  value?: string;
  label?: string;
}

interface ICity {
  id: number;
  nome: string;
}

export function CityInput({
  UF, onChange, value, label = 'Cidade',
}: ICityInputProps) {
  const [cities, setCities] = React.useState<string[]>([]);

  React.useEffect(() => {
    if (UF) {
      fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/municipios`)
        .then((res) => res.json())
        .then((data) => {
          const citiesNames = data.map((city:ICity) => city.nome);
          setCities(citiesNames);
        });
    }
  }, [UF]);
  return (
    <FormControl fullWidth>
      <Autocomplete
        id="multi-select-autocomplete"
        options={cities}
        placeholder="Select a technology"
        value={value}
        onChange={onChange}
        disabled={!UF}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            variant="outlined"
          />
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
