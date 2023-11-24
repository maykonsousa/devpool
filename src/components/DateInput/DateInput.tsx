import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ptBR } from 'date-fns/locale';

interface IDateInputProps {
  name: string;
  label: string;
}

export function DateInput({ name, label }: IDateInputProps) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={new Date()}
      render={({ field }) => (
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
          <DatePicker
            {...field}
            label={label}
            sx={{
              width: '100%',
            }}
          />
        </LocalizationProvider>
      )}
    />
  );
}
