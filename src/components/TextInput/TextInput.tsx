'use client';

import { FormControl, StandardTextFieldProps, TextField } from '@mui/material';
import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';

interface TextInputProps extends StandardTextFieldProps {
  name: string;
  errorMessage?: string;
}

export function TextInput({ name, ...props }: TextInputProps) {
  const {
    control, formState, setValue,
  } = useFormContext();
  const isError = !!formState.errors[name];
  const errorMessage = formState.errors[name]?.message as string || '';

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const breakLineValue = value.replace(/\n/g, ' \r\n');
    setValue(name, breakLineValue);
  };

  return (
    <FormControl fullWidth>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            color="info"
            error={isError}
            helperText={errorMessage}
            {...field}
            {...props}
            onBlur={handleBlur}
          />
        )}
      />
    </FormControl>
  );
}
