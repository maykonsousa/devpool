/* eslint-disable no-unused-vars */
import React from 'react';
import {
  FormControl,
  Autocomplete,
  TextField,
  FormHelperText,
} from '@mui/material';

interface ICityInputProps {
  UF: string;
  onChange: (event: React.SyntheticEvent, value: string | null) => void;
  value?: string;
  label?: string;
  errorMessage: string;
}

interface ICity {
  id: number;
  nome: string;
}

export function CityInput({
  UF,
  onChange,
  value,
  label = 'Cidade',
  errorMessage,
}: ICityInputProps) {
  const [cities, setCities] = React.useState<string[]>([]);
  const [enabledInput, setEnabledInput] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (UF) {
      setLoading(true);
      fetch(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/municipios`,
      )
        .then((res) => res.json())
        .then((data) => {
          if (!data || !Array.isArray(data)) {
            setEnabledInput(true);
            setLoading(false);
            return;
          }
          const citiesNames = Array.isArray(data)
            ? data.map((city: ICity) => city.nome)
            : [];
          setCities(citiesNames);
          setEnabledInput(false);
          setLoading(false);
        });
    }
  }, [UF]);
  return (
    <FormControl fullWidth>
      {enabledInput ? (
        <TextField
          id="city-input"
          label="Cidade"
          variant="outlined"
          onChange={(event) => onChange(event, event.target.value)}
          value={value}
        />
      ) : (
        <Autocomplete
          id="multi-select-autocomplete"
          options={cities}
          placeholder="Select a technology"
          value={value}
          onChange={onChange}
          loading={loading}
          loadingText="Carregando..."
          disabled={!UF}
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
      )}
      {enabledInput && !errorMessage ? (
        <FormHelperText sx={{ color: 'primary.main' }}>
          Falha ao obter lista de cidades. Informe manualmente
        </FormHelperText>
      ) : null}
      {errorMessage ? (
        <FormHelperText sx={{ color: 'error.main' }}>
          {errorMessage}
        </FormHelperText>
      ) : null}
    </FormControl>
  );
}
