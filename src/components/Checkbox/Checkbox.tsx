import React from 'react';
import {
  CircularProgress, FormControlLabel, Checkbox as MuiCheckbox, CheckboxProps as MuiCheckboxProps,
} from '@mui/material';

interface CheckboxProps extends MuiCheckboxProps {
  label: string;
  loading?: boolean;
}
export function Checkbox({ label, loading = false, ...props }: CheckboxProps) {
  return (

    <FormControlLabel
      control={
        loading ? (
          <CircularProgress
            size={20}
            sx={{
              marginRight: '10px',
            }}
          />
        ) : (<MuiCheckbox {...props} />)
      }
      label={label}

    />
  );
}
