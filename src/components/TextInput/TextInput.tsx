import { FormControl, StandardTextFieldProps, TextField } from '@mui/material';
import React from 'react';

interface TextInputProps extends StandardTextFieldProps {
  errorMessage?: string;
}

export function TextInput({
  errorMessage, helperText, ...props
}: TextInputProps) {
  return (
    <FormControl fullWidth>
      <TextField
        color="info"
        error={!!errorMessage}
        helperText={errorMessage || helperText}
        {...props}
      />
    </FormControl>
  );
}
