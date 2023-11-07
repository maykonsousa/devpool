import { VisibilityOff, Visibility } from '@mui/icons-material';
import {
  FormControl, IconButton, InputAdornment, StandardTextFieldProps, TextField,
} from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface PassInputProps extends StandardTextFieldProps {
  name: string;
  errorMessage?: string;
}

export function PassInput({ name, ...props }: PassInputProps) {
  const { control, formState } = useFormContext();

  const [showPassword, setShowPassword] = React.useState(false);

  const isError = !!formState.errors[name];
  const errorMessage = formState.errors[name]?.message as string || '';

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
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
            type={showPassword ? 'text' : 'password'}
            error={isError}
            helperText={errorMessage}
            InputProps={{
              ...field,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            {...props}
          />
        )}
      />
    </FormControl>
  );
}
