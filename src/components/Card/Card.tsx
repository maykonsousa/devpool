import React from 'react';

import {
  CardContent, CardHeader, CardProps, Card as MuiCard,
} from '@mui/material';

interface ICardProps extends CardProps {
  title?: string;
  children: React.ReactNode;
  direction?: 'row' | 'column';
}

export function Card({
  title, children, direction = 'column', ...rest
}:ICardProps) {
  return (
    <MuiCard
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',

      }}
      {...rest}
    >
      {title ? (
        <CardHeader
          title={title}
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'bold',
          }}
        />
      ) : null}
      <CardContent sx={{
        display: 'flex',
        flexDirection: direction,
        alignItems: 'flex-start',
        justifyContent: direction === 'column' ? 'center' : 'flex-start',
        gap: 1,
        flexWrap: 'wrap',
        width: '100%',
      }}
      >
        {children}
      </CardContent>
    </MuiCard>
  );
}
