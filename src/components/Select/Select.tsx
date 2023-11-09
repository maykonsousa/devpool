/* eslint-disable react/no-array-index-key */
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  SelectProps,
} from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface IOptionsProps {
  value: string | number;
  label: string;
}

interface ISelectProps extends SelectProps{
  name: string
  options: IOptionsProps[]
}

export function Select({
  name, label, options, ...rest
}:ISelectProps) {
  const { control, formState } = useFormContext();
  const errorMessage = formState.errors[name]?.message as string || '';

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <>
            <MuiSelect
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label={label}
              error={!!formState.errors[name]}
              {...field}
              {...rest}
            >
              {options.map((option, index) => (
                <MenuItem key={index} value={option.value}>{option.label}</MenuItem>
              ))}
            </MuiSelect>
            <FormHelperText
              error={!!formState.errors[name]}
            >
              {errorMessage}
            </FormHelperText>
          </>
        )}
      />
    </FormControl>
  );
}
