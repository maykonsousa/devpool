'use client';

import { FormControl, StandardTextFieldProps, TextField } from '@mui/material';
import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';

interface TextInputProps extends StandardTextFieldProps {
  name: string;
  errorMessage?: string;
}

export function TextInput({
  name, errorMessage, helperText, ...props
}: TextInputProps) {
  const { control } = useFormContext();

  return (
    <FormControl fullWidth>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            color="info"
            error={!!errorMessage}
            helperText={errorMessage || helperText}
            {...field}
            {...props}
          />
        )}
      />
    </FormControl>
  );
}
