import React from 'react';
import { FormControlLabel, Checkbox as MuiCheckbox, CheckboxProps as MuiCheckboxProps } from '@mui/material';

interface CheckboxProps extends MuiCheckboxProps {
  label: string;
}
export function Checkbox({ label, ...props }: CheckboxProps) {
  return (

    <FormControlLabel
      control={<MuiCheckbox {...props} />}
      label={label}

    />
  );
}
