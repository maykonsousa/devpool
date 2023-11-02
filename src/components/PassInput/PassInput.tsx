import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  FormControl, IconButton, InputAdornment, StandardTextFieldProps, TextField,
} from '@mui/material';
import React from 'react';

interface PassInputProps extends StandardTextFieldProps {
  errorMessage?: string;
}

export function PassInput({ errorMessage, ...props }: PassInputProps) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <FormControl fullWidth>
      <TextField
        color="info"
        type={showPassword ? 'text' : 'password'}
        error={!!errorMessage}
        helperText={errorMessage}
        InputProps={{
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
    </FormControl>
  );
}
